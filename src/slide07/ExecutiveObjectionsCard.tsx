import React from 'react';
import { EXECUTIVE_OBJECTIONS, SLIDE_07_COPY } from './data';

interface ExecutiveObjectionsCardProps {
  isId: boolean;
}

export const ExecutiveObjectionsCard: React.FC<ExecutiveObjectionsCardProps> = ({ isId }) => {
  return (
    <div className="p-2 bg-neutral-950 border border-neutral-800 rounded-lg shrink-0">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-1 mb-1 text-xs font-mono">
        <span className="text-white font-bold">
          {isId ? SLIDE_07_COPY.objectionsHeader.id : SLIDE_07_COPY.objectionsHeader.en}
        </span>
        <span className="text-neutral-400 text-[9px] font-mono">{SLIDE_07_COPY.objectionsSub}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-xs">
        {EXECUTIVE_OBJECTIONS.map((item, idx) => (
          <div key={idx} className="p-1.5 bg-neutral-900/80 border border-neutral-800/80 rounded">
            <span className="text-[9px] font-mono text-amber-400 font-bold block">{item.objection}</span>
            <p className="text-[9.5px] text-neutral-300 mt-0.5 leading-tight">
              <strong className="text-white">Solusi: </strong>{item.solution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
