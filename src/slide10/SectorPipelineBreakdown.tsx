import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { SLIDE_10_COPY, SECTOR_BREAKDOWN_ITEMS } from './data';

interface SectorPipelineBreakdownProps {
  isId: boolean;
}

export const SectorPipelineBreakdown: React.FC<SectorPipelineBreakdownProps> = ({ isId }) => {
  return (
    <div className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 rounded-lg flex flex-col justify-start space-y-1.5 shadow-xl">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1 mb-1.5 font-mono text-xs">
        <span className="text-white font-bold">
          {isId ? SLIDE_10_COPY.sectorHeader.id : SLIDE_10_COPY.sectorHeader.en}
        </span>
        <span className="text-neutral-400 text-[10px]">
          {SLIDE_10_COPY.sectorTotalBadge}
        </span>
      </div>

      <div className="space-y-1.5 font-mono text-xs">
        {SECTOR_BREAKDOWN_ITEMS.map((item, idx) => (
          <div key={idx} className="space-y-0.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-white font-bold">{item.title}</span>
              <span className={`${item.textColorClass} font-bold`}>
                <AnimatedCounter value={item.percentageText} /> ·{' '}
                <AnimatedCounter value={item.valueText} />
              </span>
            </div>
            <div className="w-full h-2 bg-neutral-900 rounded overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: item.barWidth }}
                transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
                className={`h-full ${item.barColorClass} rounded`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
