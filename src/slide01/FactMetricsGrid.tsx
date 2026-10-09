import React from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FACT_METRICS } from './data';

interface FactMetricsGridProps {
  isId: boolean;
}

export const FactMetricsGrid: React.FC<FactMetricsGridProps> = ({ isId }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {FACT_METRICS.map((metric) => {
        const isAmber = metric.id === 'poc_speed';
        const isEmerald = metric.id === 'nrr_retention';
        const valueClass = isAmber
          ? 'text-xl sm:text-2xl font-black text-amber-400 font-mono tracking-tight block'
          : isEmerald
            ? 'text-xl sm:text-2xl font-black text-emerald-400 font-mono tracking-tight block'
            : 'text-2xl font-black text-white font-mono tracking-tight block';

        return (
          <div
            key={metric.id}
            className="p-3 sm:p-3.5 bg-[#0b0c12]/90 border border-neutral-800/90 rounded-xl shadow-lg card-interactive-shimmer cursor-pointer"
          >
            <span className="text-[11px] font-mono text-neutral-400 block mb-1">
              {isId ? metric.labelId : metric.labelEn}
            </span>
            <span className={valueClass}>
              <AnimatedCounter value={isId ? metric.valueId : metric.valueEn} />
            </span>
            <span className="text-[11px] text-neutral-400 block mt-0.5 font-mono">
              {isId ? metric.subtextId : metric.subtextEn}
            </span>
          </div>
        );
      })}
    </div>
  );
};
