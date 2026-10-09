import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SLIDE_09_COPY } from './data';

interface ExecutionHeaderProps {
  isId: boolean;
}

export const ExecutionHeader: React.FC<ExecutionHeaderProps> = ({ isId }) => {
  return (
    <div className="shrink-0 flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-2">
      <div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight">
          {isId ? SLIDE_09_COPY.headerTitle.id : SLIDE_09_COPY.headerTitle.en}
        </h2>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800 flex items-center gap-1.5 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          {isId ? SLIDE_09_COPY.headerBadge.id : SLIDE_09_COPY.headerBadge.en}
        </span>
      </div>
    </div>
  );
};
