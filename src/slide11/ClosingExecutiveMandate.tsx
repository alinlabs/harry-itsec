import React from 'react';
import { Shield, CheckCircle2, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { SLIDE_11_COPY, EXECUTIVE_MANDATE_REASONS } from './data';

interface ClosingExecutiveMandateProps {
  isId: boolean;
  onRestart: () => void;
  isLocked?: boolean;
}

export const ClosingExecutiveMandate: React.FC<ClosingExecutiveMandateProps> = ({
  isId,
  onRestart,
  isLocked = false,
}) => {
  return (
    <div className="lg:col-span-5 bg-[#0e0f17] border border-neutral-800 p-3 rounded-lg flex flex-col justify-start space-y-2.5 shadow-xl">
      <div className="space-y-2.5">
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1.5">
          <div>
            <span className="text-[10px] font-mono text-rose-500 uppercase tracking-wider block font-bold">
              {SLIDE_11_COPY.executiveMandate.preTitle}
            </span>
            <h3 className="text-sm font-extrabold text-white">
              {SLIDE_11_COPY.executiveMandate.leaderTitle}
            </h3>
          </div>
          <Shield className="w-5 h-5 text-rose-500 shrink-0" />
        </div>

        {/* 3 Executive Reasons Why This Wins */}
        <div className="space-y-2 text-xs">
          {EXECUTIVE_MANDATE_REASONS.map((reason) => (
            <div key={reason.title} className="p-2.5 bg-neutral-950/80 border border-neutral-900 rounded flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-neutral-300">
                <strong className="text-white block">{reason.title}</strong>
                {reason.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Restart Button */}
        <div className="pt-1">
          <motion.button
            whileHover={!isLocked ? { scale: 1.02 } : undefined}
            whileTap={!isLocked ? { scale: 0.98 } : undefined}
            onClick={!isLocked ? onRestart : undefined}
            disabled={isLocked}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono rounded border transition-all ${
              isLocked
                ? 'opacity-40 cursor-not-allowed bg-neutral-950 border-neutral-900 text-neutral-600'
                : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border-neutral-800 cursor-pointer'
            }`}
            title={isLocked ? undefined : (isId ? SLIDE_11_COPY.executiveMandate.restartTitle.id : SLIDE_11_COPY.executiveMandate.restartTitle.en)}
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
            <span>
              {isId 
                ? SLIDE_11_COPY.executiveMandate.restartButton.id 
                : SLIDE_11_COPY.executiveMandate.restartButton.en}
            </span>
          </motion.button>
        </div>
      </div>

      <div className="pt-1.5 border-t border-neutral-900 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
        <span>{SLIDE_11_COPY.executiveMandate.readinessText}</span>
        <span className="text-emerald-400 font-bold">{SLIDE_11_COPY.executiveMandate.readinessTag}</span>
      </div>
    </div>
  );
};
