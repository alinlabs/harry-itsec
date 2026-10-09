import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type ViewportMode = 'auto-fit' | 'fluid';
export type DeviceCategory = 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'ultrawide';

interface ViewportContextType {
  mode: ViewportMode;
  setMode: (mode: ViewportMode) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  windowSize: { width: number; height: number };
  aspectRatioLabel: string;
  deviceCategory: DeviceCategory;
  computedScale: number;
  setComputedScale: (scale: number) => void;
  effectiveScale: number;
}

const ViewportContext = createContext<ViewportContextType | undefined>(undefined);

const calculateAspectRatio = (w: number, h: number): string => {
  if (w <= 0 || h <= 0) return '16:9';
  const ratio = w / h;
  if (ratio > 2.2) return '21:9 Ultrawide';
  if (ratio >= 1.7) return '16:9 Widescreen';
  if (ratio >= 1.55) return '16:10 Laptop';
  if (ratio >= 1.4) return '3:2 Surface';
  if (ratio >= 1.25) return '4:3 Standard';
  if (ratio >= 0.9) return '1:1 Square';
  if (ratio >= 0.5) return '9:16 Mobile';
  return 'Mobile Portrait';
};

const getDeviceCategory = (w: number, h: number): DeviceCategory => {
  if (w < 640) return 'mobile';
  if (w < 1024) return 'tablet';
  if (w >= 2200 || (w / h > 2.2)) return 'ultrawide';
  if (w >= 1600 && h >= 950) return 'desktop';
  return 'laptop';
};

export const ViewportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ViewportMode>(() => {
    try {
      const saved = localStorage.getItem('bronyx_viewport_mode_v2');
      if (saved === 'auto-fit' || saved === 'fluid') return saved;
    } catch {
      // ignore
    }
    return 'fluid';
  });

  const [zoom, setZoomState] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('bronyx_viewport_zoom');
      if (saved) {
        const parsed = parseFloat(saved);
        if (!isNaN(parsed) && parsed >= 0.7 && parsed <= 1.3) return parsed;
      }
    } catch {
      // ignore
    }
    return 1.0;
  });

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1440,
    height: typeof window !== 'undefined' ? window.innerHeight : 900
  });

  const [isFullscreen, setIsFullscreen] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return !!document.fullscreenElement;
    }
    return false;
  });

  const [computedScale, setComputedScale] = useState<number>(1.0);

  const setMode = useCallback((newMode: ViewportMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem('bronyx_viewport_mode_v2', newMode);
    } catch {
      // ignore
    }
  }, []);

  const setZoom = useCallback((newZoom: number) => {
    const clamped = Math.max(0.7, Math.min(1.3, Math.round(newZoom * 100) / 100));
    setZoomState(clamped);
    try {
      localStorage.setItem('bronyx_viewport_zoom', clamped.toString());
    } catch {
      // ignore
    }
  }, []);

  const zoomIn = useCallback(() => {
    setZoom(zoom + 0.05);
  }, [zoom, setZoom]);

  const zoomOut = useCallback(() => {
    setZoom(zoom - 0.05);
  }, [zoom, setZoom]);

  const resetZoom = useCallback(() => {
    setZoom(1.0);
  }, [setZoom]);

  const toggleFullscreen = useCallback(() => {
    if (typeof document === 'undefined') return;
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const aspectRatioLabel = calculateAspectRatio(windowSize.width, windowSize.height);
  const deviceCategory = getDeviceCategory(windowSize.width, windowSize.height);

  const effectiveScale = mode === 'auto-fit' 
    ? Math.max(0.6, Math.min(1.3, computedScale * zoom))
    : zoom;

  return (
    <ViewportContext.Provider
      value={{
        mode,
        setMode,
        zoom,
        setZoom,
        zoomIn,
        zoomOut,
        resetZoom,
        isFullscreen,
        toggleFullscreen,
        windowSize,
        aspectRatioLabel,
        deviceCategory,
        computedScale,
        setComputedScale,
        effectiveScale
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = (): ViewportContextType => {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error('useViewport must be used within a ViewportProvider');
  }
  return context;
};
