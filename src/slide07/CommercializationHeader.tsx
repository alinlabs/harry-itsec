import React from 'react';
import { Target, RefreshCw } from 'lucide-react';
import { SLIDE_07_COPY } from './data';

interface CommercializationHeaderProps {
  isId: boolean;
}

export const CommercializationHeader: React.FC<CommercializationHeaderProps> = ({ isId }) => {
  return (
    <div className="shrink-0 flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-2">
      <div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight">
          {isId ? SLIDE_07_COPY.headerTitle.id : SLIDE_07_COPY.headerTitle.en}
        </h2>
      </div>

      {/* Header Badges */}
      <div className="hidden sm:flex items-center gap-2 font-mono text-[11px]">
        <div className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 font-bold flex items-center gap-1.5 shadow-sm">
          <Target className="w-3.5 h-3.5 text-emerald-400" />
          <span>{SLIDE_07_COPY.headerBadges.monthlyDeal}</span>
        </div>
        <div className="px-2.5 py-1 rounded bg-rose-950/60 border border-rose-800/80 text-rose-300 font-bold flex items-center gap-1.5 shadow-sm">
          <RefreshCw className="w-3.5 h-3.5 text-rose-400" />
          <span>{SLIDE_07_COPY.headerBadges.retention}</span>
        </div>
      </div>
    </div>
  );
};
