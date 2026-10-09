import React from 'react';
import { motion } from 'motion/react';
import { SLIDE_01_COPY } from './data';

interface StartActionButtonProps {
  isId: boolean;
  onNext: () => void;
  isLocked?: boolean;
}

export const StartActionButton: React.FC<StartActionButtonProps> = ({
  isId,
  onNext,
  isLocked = false,
}) => {
  return (
    <div className="relative z-10 pt-2 shrink-0 flex flex-col items-center justify-center gap-1.5 text-center w-full">
      <span className="text-neutral-500 font-mono text-[11px] font-light tracking-wide select-none">
        {isId ? SLIDE_01_COPY.action.enterHintId : SLIDE_01_COPY.action.enterHintEn}
      </span>
      <motion.button
        whileHover={!isLocked ? { scale: 1.005 } : undefined}
        whileTap={!isLocked ? { scale: 0.995 } : undefined}
        onClick={!isLocked ? onNext : undefined}
        disabled={isLocked}
        className={`w-full py-2.5 sm:py-3 text-white font-bold text-sm tracking-wide rounded-lg transition-all ${
          isLocked
            ? 'opacity-60 cursor-not-allowed bg-neutral-900 border border-neutral-800 shadow-none text-neutral-400'
            : 'bg-rose-600 hover:bg-rose-500 shadow-[0_0_20px_rgba(225,29,72,0.4)] cursor-pointer'
        }`}
        title={isId ? SLIDE_01_COPY.action.buttonId : SLIDE_01_COPY.action.buttonEn}
      >
        <span>{isId ? SLIDE_01_COPY.action.buttonId : SLIDE_01_COPY.action.buttonEn}</span>
      </motion.button>
    </div>
  );
};
