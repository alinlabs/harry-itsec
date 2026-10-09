import React from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { VELOCITY_METRICS } from './data';

interface DealVelocityKpiCardsProps {
  isId: boolean;
}

export const DealVelocityKpiCards: React.FC<DealVelocityKpiCardsProps> = ({ isId }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 shrink-0">
      {VELOCITY_METRICS.map((metric) => (
        <div 
          key={metric.id}
          className="p-2 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-between font-mono"
        >
          <div>
            <span className="text-[9px] text-neutral-400 block uppercase">
              {isId ? metric.labelId : metric.labelEn}
            </span>
            <span className={`text-sm lg:text-base font-extrabold ${metric.valueColorClass}`}>
              <AnimatedCounter value={metric.value} />
              {metric.suffix && metric.suffix}
            </span>
          </div>
          <span className={`text-[9px] px-1.5 py-0.5 rounded border font-bold ${metric.badgeClass}`}>
            {isId ? metric.badgeTextId : metric.badgeTextEn}
          </span>
        </div>
      ))}
    </div>
  );
};
