import React from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { REVENUE_PILLARS, SLIDE_07_COPY } from './data';
import { getPillarColorClass } from './utils';

interface QuotaAllocationPillarsProps {
  isId: boolean;
}

export const QuotaAllocationPillars: React.FC<QuotaAllocationPillarsProps> = ({ isId }) => {
  return (
    <div className="p-2.5 bg-[#0e0f17] border border-neutral-800 rounded-lg shrink-0 space-y-1.5">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-1 text-xs font-mono">
        <span className="text-white font-bold">
          {isId ? SLIDE_07_COPY.formulaHeader.id : SLIDE_07_COPY.formulaHeader.en}
        </span>
        <span className="text-emerald-400 font-bold text-[11px]">
          {SLIDE_07_COPY.formulaBaseline}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-xs font-mono">
        {REVENUE_PILLARS.map((pillar) => {
          const colorClass = getPillarColorClass(pillar.colorScheme);
          return (
            <div key={pillar.pillarNum} className="p-2 bg-neutral-950/90 border border-neutral-900 rounded">
              <div className="flex items-center justify-between mb-0.5">
                <span className={`text-[9px] ${colorClass} font-bold`}>
                  PILAR {pillar.pillarNum} ({pillar.percentage}%)
                </span>
                <span className={`text-[9px] ${colorClass} font-bold`}>
                  <AnimatedCounter value={pillar.amountDisplay} />
                </span>
              </div>
              <h5 className="text-white font-bold text-[11px]">{pillar.title}</h5>
              <p className="text-[9.5px] text-neutral-300 font-sans mt-0.5 leading-snug">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
