import React from 'react';
import { RETENTION_FLYWHEEL, SLIDE_07_COPY } from './data';
import { getFlywheelColorClass } from './utils';

interface RetentionFlywheelCardProps {
  isId: boolean;
}

export const RetentionFlywheelCard: React.FC<RetentionFlywheelCardProps> = ({ isId }) => {
  return (
    <div className="p-2 bg-[#0e0f17] border border-neutral-800 rounded-lg flex flex-col justify-start space-y-1.5">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1 mb-1.5">
        <span className="text-xs font-mono text-white font-bold">
          {isId ? SLIDE_07_COPY.flywheelHeader.id : SLIDE_07_COPY.flywheelHeader.en}
        </span>
        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-1.5 py-0.5 rounded font-bold">
          {SLIDE_07_COPY.flywheelBadge}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-xs">
        {RETENTION_FLYWHEEL.map((step) => {
          const colorClass = getFlywheelColorClass(step.colorScheme);
          return (
            <div 
              key={step.stepNum} 
              className="p-1.5 bg-neutral-950/90 border border-neutral-900 rounded flex flex-col justify-start space-y-1"
            >
              <div className="space-y-0.5">
                <span className={`text-[8.5px] font-mono ${colorClass} font-bold block uppercase`}>
                  {step.badge}
                </span>
                <h5 className="text-[11px] font-bold text-white">{step.title}</h5>
                <p className="text-[9.5px] text-neutral-300 leading-tight">
                  {step.description}
                </p>
              </div>
              <div className={`pt-1 border-t border-neutral-900 text-[8.5px] font-mono ${colorClass}`}>
                {step.footerMetric}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
