import React from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { QUARTERLY_TRAJECTORY, SLIDE_07_COPY } from './data';

interface QuarterlyTrajectoryCardProps {
  isId: boolean;
}

export const QuarterlyTrajectoryCard: React.FC<QuarterlyTrajectoryCardProps> = ({ isId }) => {
  return (
    <div className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 rounded-lg shrink-0">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1 mb-1.5 text-xs font-mono">
        <span className="text-white font-bold">
          {isId ? SLIDE_07_COPY.trajectoryHeader.id : SLIDE_07_COPY.trajectoryHeader.en}
        </span>
        <span className="text-white font-bold text-[10px]">{SLIDE_07_COPY.trajectoryTotal}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-xs font-mono">
        {QUARTERLY_TRAJECTORY.map((item) => {
          if (item.isHighlighted) {
            return (
              <div key={item.quarter} className="p-1.5 bg-emerald-950/30 border border-emerald-600/80 rounded text-center">
                <span className="text-[8.5px] text-emerald-300 font-bold block">{item.quarter}</span>
                <span className="text-xs font-black text-emerald-400 block">
                  <AnimatedCounter value={item.amount} />
                </span>
                <span className="text-[8px] text-neutral-300 block truncate">{item.timelineSubtitle}</span>
              </div>
            );
          }

          if (item.isFinalScale) {
            return (
              <div key={item.quarter} className="p-1.5 bg-neutral-950/90 border border-neutral-900 rounded text-center col-span-2 sm:col-span-1">
                <span className="text-[8.5px] text-sky-400 font-bold block">{item.quarter}</span>
                <span className="text-xs font-black text-sky-300 block">
                  <AnimatedCounter value={item.amount} />
                </span>
                <span className="text-[8px] text-neutral-300 block truncate">{item.timelineSubtitle}</span>
              </div>
            );
          }

          return (
            <div key={item.quarter} className="p-1.5 bg-neutral-950/90 border border-neutral-900 rounded text-center">
              <span className="text-[8.5px] text-neutral-400 block">{item.quarter}</span>
              <span className="text-xs font-black text-emerald-400 block">
                <AnimatedCounter value={item.amount} />
              </span>
              <span className="text-[8px] text-neutral-400 block truncate">{item.timelineSubtitle}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
