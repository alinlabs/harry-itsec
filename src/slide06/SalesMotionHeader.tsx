import React from 'react';
import { Clock, Award } from 'lucide-react';
import { SLIDE_06_COPY } from './data';

interface SalesMotionHeaderProps {
  isId: boolean;
}

export const SalesMotionHeader: React.FC<SalesMotionHeaderProps> = ({ isId }) => {
  return (
    <div className="shrink-0 flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-2">
      <div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight">
          {isId ? SLIDE_06_COPY.headerTitleId : SLIDE_06_COPY.headerTitleEn}
        </h2>
      </div>

      {/* Badge Metrik Header Ringkas */}
      <div className="hidden sm:flex items-center gap-2 font-mono text-[11px]">
        <div className="px-2.5 py-1 rounded bg-rose-950/60 border border-rose-800/80 text-rose-300 font-bold flex items-center gap-1.5 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-rose-400" />
          <span>{isId ? SLIDE_06_COPY.badgeCycleId : SLIDE_06_COPY.badgeCycleEn}</span>
        </div>
        <div className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 font-bold flex items-center gap-1.5 shadow-sm">
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          <span>{isId ? SLIDE_06_COPY.badgeWinRateId : SLIDE_06_COPY.badgeWinRateEn}</span>
        </div>
      </div>
    </div>
  );
};
