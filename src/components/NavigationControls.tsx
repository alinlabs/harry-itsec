import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onJumpToSlide: (slideNumber: number) => void;
  isAnimationLocked?: boolean;
  animationProgress?: number;
  secondsLeft?: number;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onJumpToSlide
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Navigation is never artificially blocked by animation - always immediately responsive
  const isPrevDisabled = currentSlide === 1;
  const isNextDisabled = currentSlide === totalSlides;

  return (
    <footer className={`shrink-0 z-30 backdrop-blur-md border-t px-4 lg:px-8 py-2 relative transition-colors duration-200 ${
      isLight ? 'bg-white/95 border-slate-200 shadow-xs' : 'bg-[#07080c]/95 border-neutral-800/80'
    }`}>
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        {/* Left: Chevron Left Button */}
        <div className="flex items-center">
          <motion.button
            whileHover={!isPrevDisabled ? { scale: 1.08 } : undefined}
            whileTap={!isPrevDisabled ? { scale: 0.92 } : undefined}
            onClick={!isPrevDisabled ? onPrev : undefined}
            disabled={isPrevDisabled}
            className={`p-2 rounded-full border transition-all flex items-center justify-center ${
              isPrevDisabled
                ? isLight 
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400'
                  : 'opacity-40 cursor-not-allowed bg-neutral-950 border-neutral-900 text-neutral-600'
                : isLight
                  ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm cursor-pointer'
                  : 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-white hover:border-neutral-700 shadow-md cursor-pointer'
            }`}
            aria-label="Previous slide"
            title={isPrevDisabled ? undefined : "Slide Sebelumnya"}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Center: Slide Indicator Bullets */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => {
            const isActive = num === currentSlide;
            return (
              <motion.button
                key={num}
                onClick={() => onJumpToSlide(num)}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.85 }}
                className={`transition-all duration-200 rounded-full relative cursor-pointer ${
                  isActive
                    ? 'w-3 h-3 bg-rose-500 shadow-[0_0_10px_rgba(225,29,72,0.6)] ring-2 ring-rose-500/30'
                    : isLight 
                      ? 'w-2 h-2 bg-slate-300 hover:bg-slate-400' 
                      : 'w-2 h-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide ${num}`}
                title={`Slide ${num}`}
              />
            );
          })}
        </div>

        {/* Right: Chevron Right Button */}
        <motion.button
          whileHover={!isNextDisabled ? { scale: 1.08 } : undefined}
          whileTap={!isNextDisabled ? { scale: 0.92 } : undefined}
          onClick={!isNextDisabled ? onNext : undefined}
          disabled={isNextDisabled}
          className={`p-2 rounded-full border transition-all flex items-center justify-center ${
            isNextDisabled
              ? isLight
                ? 'opacity-40 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400'
                : 'opacity-40 cursor-not-allowed bg-neutral-950 border-neutral-900 text-neutral-600'
              : 'bg-rose-600 hover:bg-rose-500 border-rose-500 text-white shadow-[0_0_12px_rgba(225,29,72,0.3)] cursor-pointer'
          }`}
          aria-label="Next slide"
          title={isNextDisabled ? undefined : "Slide Selanjutnya"}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};
