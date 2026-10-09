import React from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { SLIDE_01_COPY } from './data';

interface QuotaTargetCardProps {
  isId: boolean;
}

export const QuotaTargetCard: React.FC<QuotaTargetCardProps> = ({ isId }) => {
  return (
    <div className="p-3.5 sm:p-4 bg-[#0b0c12]/90 border border-rose-900/50 rounded-xl flex items-center justify-between shadow-xl card-interactive-shimmer cursor-pointer">
      <div>
        <span className="text-[11px] font-mono text-neutral-400 block tracking-tight">
          {isId ? SLIDE_01_COPY.quotaCard.labelId : SLIDE_01_COPY.quotaCard.labelEn}
        </span>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="text-2xl sm:text-3xl font-black text-rose-400 font-mono tracking-tight">
            <AnimatedCounter value={isId ? SLIDE_01_COPY.quotaCard.valueId : SLIDE_01_COPY.quotaCard.valueEn} />
          </span>
          <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wide">
            {isId ? SLIDE_01_COPY.quotaCard.unitId : SLIDE_01_COPY.quotaCard.unitEn}
          </span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[11px] text-neutral-400 font-mono font-medium block">
          {isId ? SLIDE_01_COPY.quotaCard.timelineId : SLIDE_01_COPY.quotaCard.timelineEn}
        </span>
        <span className="text-[11px] text-neutral-400 font-mono block mt-0.5">
          {isId ? SLIDE_01_COPY.quotaCard.cycleId : SLIDE_01_COPY.quotaCard.cycleEn}
        </span>
      </div>
    </div>
  );
};
