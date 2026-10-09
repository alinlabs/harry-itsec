import React from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { EXECUTION_SCORECARD_ITEMS } from './data';
import { getScorecardLabel } from './utils';

interface ExecutionScorecardStripProps {
  isId: boolean;
}

export const ExecutionScorecardStrip: React.FC<ExecutionScorecardStripProps> = ({ isId }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 shrink-0">
      {EXECUTION_SCORECARD_ITEMS.map((metric) => (
        <div
          key={metric.id}
          className="p-2.5 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-between font-mono"
        >
          <div>
            <span className="text-[10px] text-neutral-400 block uppercase">
              {getScorecardLabel(metric, isId)}
            </span>
            <span className={`text-base font-black ${metric.valueColor}`}>
              <AnimatedCounter value={metric.value} />
            </span>
          </div>
          <span
            className={`text-[10px] px-2 py-0.5 rounded ${metric.badgeStyle}`}
          >
            {metric.badge}
          </span>
        </div>
      ))}
    </div>
  );
};
