import React from 'react';
import { POC_STEPS, SLIDE_06_COPY } from './data';
import { getPocColorStyles } from './utils';

interface PocPlaybookStepperProps {
  isId: boolean;
}

export const PocPlaybookStepper: React.FC<PocPlaybookStepperProps> = ({ isId }) => {
  return (
    <div className="p-2 bg-[#0e0f17] border border-neutral-800 rounded-lg flex flex-col justify-start space-y-1.5">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1 mb-1.5">
        <span className="text-xs font-mono text-white font-bold">
          {isId ? SLIDE_06_COPY.pocPlaybookTitleId : SLIDE_06_COPY.pocPlaybookTitleEn}
        </span>
        <span className="text-[9.5px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-1.5 py-0.5 rounded font-bold">
          {SLIDE_06_COPY.zeroBlastRadiusTag}
        </span>
      </div>

      {/* 4 Linear Stepper Cards for 5 Days */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {POC_STEPS.map((stepItem) => {
          const styles = getPocColorStyles(stepItem.colorScheme);

          return (
            <div 
              key={stepItem.step} 
              className="p-2 bg-neutral-950/90 border border-neutral-900 rounded flex flex-col justify-start space-y-1"
            >
              <div className="space-y-0.5">
                <div className="flex items-center justify-between font-mono text-[9px]">
                  <span className={`px-1 py-0.5 rounded border font-bold ${styles.stepBadgeClass}`}>
                    {stepItem.step}
                  </span>
                  <span className={`font-semibold ${styles.stepLabelClass}`}>
                    {stepItem.label}
                  </span>
                </div>
                <h5 className="text-[11px] font-bold text-white">{stepItem.title}</h5>
                <p className="text-[9.5px] text-neutral-300 font-sans leading-tight">
                  {isId ? stepItem.descId : stepItem.descEn}
                </p>
              </div>
              <div className={`pt-1 border-t border-neutral-900 text-[9px] font-mono ${styles.checkmarkClass} ${stepItem.isBoldCheckmark ? 'font-bold' : ''}`}>
                {stepItem.checkmarkText}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
