import React from 'react';
import { LIFECYCLE_PHASES, SLIDE_06_COPY } from './data';

interface LifecyclePhasesTrackProps {
  isId: boolean;
}

export const LifecyclePhasesTrack: React.FC<LifecyclePhasesTrackProps> = ({ isId }) => {
  return (
    <div className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 rounded-lg shadow-sm shrink-0">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1 mb-1.5 text-xs font-mono">
        <span className="text-white font-bold">
          {isId ? SLIDE_06_COPY.lifecycleTitleId : SLIDE_06_COPY.lifecycleTitleEn}
        </span>
        <span className="text-neutral-400 text-[10px]">{SLIDE_06_COPY.lifecycleDuration}</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs font-mono">
        {LIFECYCLE_PHASES.map((phaseItem) => (
          <div key={phaseItem.phase} className="p-1.5 bg-neutral-950/80 border border-neutral-900 rounded">
            <div className="flex items-center justify-between mb-0.5">
              <span className={`text-[9px] font-bold ${phaseItem.phaseColorClass}`}>
                {phaseItem.phase}
              </span>
              <span className="text-[8.5px] text-neutral-500">{phaseItem.dayRange}</span>
            </div>
            <span className="text-white font-bold block text-[11px] leading-tight">
              {phaseItem.title}
            </span>
            <p className="text-[9.5px] text-neutral-400 mt-0.5 font-sans leading-tight">
              {isId ? phaseItem.descId : phaseItem.descEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
