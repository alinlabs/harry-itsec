import React, { useState, useRef, useEffect } from 'react';
import { 
  Maximize, 
  Minimize, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Monitor, 
  SlidersHorizontal,
  Check,
  ChevronDown
} from 'lucide-react';
import { useViewport } from '../context/ViewportContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const ViewportControls: React.FC = () => {
  const { language } = useLanguage();
  const isId = language === 'id';
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const {
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
    effectiveScale
  } = useViewport();

  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const percentageDisplay = `${Math.round(effectiveScale * 100)}%`;

  return (
    <div className="relative inline-flex items-center text-left" ref={popoverRef}>
      {/* Trigger Button in Header - bare gray icon without card wrapper */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer select-none"
        title={isId ? 'Penyesuaian Adaptif & Presisi Layar' : 'Adaptive & Precision Layout Settings'}
        aria-label={isId ? 'Penyesuaian Adaptif & Presisi Layar' : 'Adaptive & Precision Layout Settings'}
        aria-expanded={isOpen}
      >
        <SlidersHorizontal
          className={`w-3.5 h-3.5 transition-colors shrink-0 ${
            isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-white'
          }`}
        />
      </button>

      {/* Popover Panel */}
      {isOpen && (
        <div 
          className={`absolute right-0 mt-2 w-72 sm:w-80 rounded-xl border p-3.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl ${
            isLight
              ? 'bg-white/95 border-slate-200 text-slate-800'
              : 'bg-[#0d0e15]/95 border-neutral-800 text-neutral-100'
          }`}
        >
          {/* Header & Detected Resolution */}
          <div className="border-b border-neutral-800/80 pb-2.5 mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-rose-400" />
              <div>
                <div className="text-xs font-bold tracking-tight">
                  {isId ? 'Penyesuaian Adaptif & Presisi' : 'Adaptive Layout & Precision'}
                </div>
                <div className="text-[10px] text-neutral-400 font-mono">
                  {windowSize.width} × {windowSize.height} • {aspectRatioLabel}
                </div>
              </div>
            </div>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
              {deviceCategory}
            </span>
          </div>

          {/* Mode Selector */}
          <div className="space-y-1.5 mb-3">
            <div className="text-[10px] font-mono uppercase text-neutral-400 font-semibold tracking-wider">
              {isId ? 'Mode Tampilan' : 'Display Mode'}
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => setMode('auto-fit')}
                className={`flex flex-col items-start p-2 rounded-lg border text-left transition-all cursor-pointer ${
                  mode === 'auto-fit'
                    ? 'bg-rose-500/15 border-rose-500/60 text-white shadow-xs'
                    : 'bg-neutral-900/60 hover:bg-neutral-800/60 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-semibold">
                    {isId ? 'Presisi Auto-Fit' : 'Auto-Fit'}
                  </span>
                  {mode === 'auto-fit' && <Check className="w-3.5 h-3.5 text-rose-400" />}
                </div>
                <span className="text-[9px] text-neutral-400 mt-0.5 leading-tight">
                  {isId ? 'Kunci 100% pas tinggi & lebar layar' : 'Fit height & width to device'}
                </span>
              </button>

              <button
                onClick={() => setMode('fluid')}
                className={`flex flex-col items-start p-2 rounded-lg border text-left transition-all cursor-pointer ${
                  mode === 'fluid'
                    ? 'bg-rose-500/15 border-rose-500/60 text-white shadow-xs'
                    : 'bg-neutral-900/60 hover:bg-neutral-800/60 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-semibold">
                    {isId ? 'Responsif Fluid' : 'Fluid Scroll'}
                  </span>
                  {mode === 'fluid' && <Check className="w-3.5 h-3.5 text-rose-400" />}
                </div>
                <span className="text-[9px] text-neutral-400 mt-0.5 leading-tight">
                  {isId ? 'Aliran bebas dengan scroll alami' : 'Natural flow with vertical scroll'}
                </span>
              </button>
            </div>
          </div>

          {/* Precision Zoom Controls */}
          <div className="space-y-1.5 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-neutral-400 font-semibold tracking-wider">
                {isId ? 'Skala Presisi' : 'Precision Zoom'}
              </span>
              <span className="text-xs font-mono text-rose-400 font-bold">
                {percentageDisplay}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={zoomOut}
                disabled={zoom <= 0.7}
                className="p-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title={isId ? 'Perkecil tampilan' : 'Zoom out'}
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <div className="flex-1 grid grid-cols-4 gap-1">
                {[0.85, 0.95, 1.0, 1.1].map((val) => {
                  const isActive = Math.abs(zoom - val) < 0.03;
                  return (
                    <button
                      key={val}
                      onClick={() => setZoom(val)}
                      className={`py-1 text-[10px] font-mono rounded border transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-rose-500 text-white border-rose-400 font-bold'
                          : 'bg-neutral-900/80 hover:bg-neutral-800 border-neutral-800 text-neutral-300'
                      }`}
                    >
                      {Math.round(val * 100)}%
                    </button>
                  );
                })}
              </div>

              <button
                onClick={zoomIn}
                disabled={zoom >= 1.3}
                className="p-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title={isId ? 'Perbesar tampilan' : 'Zoom in'}
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={resetZoom}
                className="p-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white cursor-pointer transition-colors"
                title={isId ? 'Reset ke 100%' : 'Reset to 100%'}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Fullscreen Button */}
          <div className="pt-2 border-t border-neutral-800/80">
            <button
              onClick={toggleFullscreen}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 text-xs font-semibold text-neutral-200 hover:text-white transition-all cursor-pointer"
            >
              {isFullscreen ? (
                <>
                  <Minimize className="w-3.5 h-3.5 text-rose-400" />
                  <span>{isId ? 'Keluar Layar Penuh' : 'Exit Fullscreen'}</span>
                </>
              ) : (
                <>
                  <Maximize className="w-3.5 h-3.5 text-rose-400" />
                  <span>{isId ? 'Mode Presentasi Layar Penuh' : 'Fullscreen Presentation'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Compact Bottom Toolbar Viewport Controls (for NavigationControls footer)
export const QuickViewportPill: React.FC = () => {
  const { language } = useLanguage();
  const isId = language === 'id';
  const {
    zoomIn,
    zoomOut,
    resetZoom,
    effectiveScale,
    mode,
    setMode,
    isFullscreen,
    toggleFullscreen
  } = useViewport();

  return (
    <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-400 bg-neutral-900/80 border border-neutral-800 rounded-full px-2 py-0.5 shadow-xs">
      <button
        onClick={() => setMode(mode === 'auto-fit' ? 'fluid' : 'auto-fit')}
        className="hover:text-white px-1 font-sans text-[10px] font-medium transition-colors cursor-pointer"
        title={isId ? 'Ganti mode Auto-Fit / Fluid' : 'Toggle Auto-Fit / Fluid mode'}
      >
        {mode === 'auto-fit' ? 'Fit' : 'Fluid'}
      </button>
      <span className="text-neutral-700 select-none">•</span>
      <button
        onClick={zoomOut}
        className="hover:text-white px-0.5 text-xs transition-colors cursor-pointer"
        title={isId ? 'Perkecil zoom' : 'Zoom out'}
      >
        -
      </button>
      <button
        onClick={resetZoom}
        className="hover:text-white font-mono px-0.5 transition-colors cursor-pointer text-[10px]"
        title={isId ? 'Reset Zoom' : 'Reset Zoom'}
      >
        {Math.round(effectiveScale * 100)}%
      </button>
      <button
        onClick={zoomIn}
        className="hover:text-white px-0.5 text-xs transition-colors cursor-pointer"
        title={isId ? 'Perbesar zoom' : 'Zoom in'}
      >
        +
      </button>
      <span className="text-neutral-700 select-none">•</span>
      <button
        onClick={toggleFullscreen}
        className="hover:text-white px-0.5 transition-colors cursor-pointer"
        title={isFullscreen ? (isId ? 'Keluar layar penuh' : 'Exit fullscreen') : (isId ? 'Layar penuh' : 'Fullscreen')}
      >
        {isFullscreen ? <Minimize className="w-2.5 h-2.5" /> : <Maximize className="w-2.5 h-2.5" />}
      </button>
    </div>
  );
};
