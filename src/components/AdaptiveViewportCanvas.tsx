import React, { useRef, useEffect } from 'react';
import { useViewport } from '../context/ViewportContext';

interface AdaptiveViewportCanvasProps {
  children: React.ReactNode;
}

export const AdaptiveViewportCanvas: React.FC<AdaptiveViewportCanvasProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { 
    effectiveScale, 
    setComputedScale, 
    windowSize 
  } = useViewport();

  // Baseline reference dimensions for scale telemetry
  const BASE_WIDTH = 1440;
  const BASE_HEIGHT = 810;

  useEffect(() => {
    if (!containerRef.current) return;

    const updateScale = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const availW = rect.width;
      const availH = rect.height;

      if (availW > 0 && availH > 0) {
        const scaleX = availW / BASE_WIDTH;
        const scaleY = availH / BASE_HEIGHT;
        const scale = Math.min(scaleX, scaleY);
        const clampedScale = Math.max(0.45, Math.min(1.35, scale));
        setComputedScale(clampedScale);
      }
    };

    updateScale();

    const resizeObserver = new ResizeObserver(() => {
      updateScale();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [setComputedScale, windowSize.width, windowSize.height]);

  const isSmallScreen = windowSize.width < 768;

  // Directly attach slide content to the main layout aligned flush with HeaderBar and NavigationControls (max-w-[1920px] mx-auto px-4 lg:px-8)
  return (
    <div 
      ref={containerRef}
      className="flex-1 min-h-0 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-thin flex flex-col relative select-text bg-transparent shadow-none border-none"
    >
      <div 
        className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 h-full flex-1 flex flex-col min-h-full transition-transform duration-150 bg-transparent shadow-none border-none slide-precision-container"
        style={effectiveScale !== 1 && !isSmallScreen ? {
          transform: `scale(${effectiveScale})`,
          transformOrigin: 'top center'
        } : undefined}
      >
        {children}
      </div>
    </div>
  );
};
