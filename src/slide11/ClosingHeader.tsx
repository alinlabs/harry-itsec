import React from 'react';
import { Award } from 'lucide-react';
import { SLIDE_11_COPY } from './data';

interface ClosingHeaderProps {
  isId: boolean;
}

export const ClosingHeader: React.FC<ClosingHeaderProps> = ({ isId }) => {
  return (
    <div className="shrink-0 flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-2">
      <div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight">
          {isId 
            ? SLIDE_11_COPY.headerTitle.id 
            : SLIDE_11_COPY.headerTitle.en}
        </h2>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-rose-950/60 text-rose-300 border border-rose-800 flex items-center gap-1.5 font-bold">
          <Award className="w-3.5 h-3.5 text-rose-500" />
          <span>{SLIDE_11_COPY.companyBadge}</span>
        </span>
      </div>
    </div>
  );
};
