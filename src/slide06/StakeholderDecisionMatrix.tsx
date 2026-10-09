import React from 'react';
import { STAKEHOLDER_ROLES, SLIDE_06_COPY } from './data';

interface StakeholderDecisionMatrixProps {
  isId: boolean;
}

export const StakeholderDecisionMatrix: React.FC<StakeholderDecisionMatrixProps> = ({ isId }) => {
  return (
    <div className="lg:col-span-5 bg-[#0b0c12]/95 border border-neutral-800 rounded-lg p-2.5 flex flex-col justify-start space-y-2 shadow-xl">
      <div className="border-b border-neutral-800/80 pb-1.5 flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-white">
          {isId ? SLIDE_06_COPY.matrixTitleId : SLIDE_06_COPY.matrixTitleEn}
        </span>
        <span className="text-[10px] font-mono text-rose-400 bg-rose-950/60 border border-rose-800/60 px-1.5 py-0.5 rounded">
          {SLIDE_06_COPY.meddpiccTag}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {STAKEHOLDER_ROLES.map((role) => (
          <div 
            key={role.id}
            className={`p-2 bg-neutral-950/80 border border-neutral-800/80 rounded flex flex-col justify-start space-y-1.5 ${role.hoverBorderClass} transition-colors`}
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border font-bold ${role.badgeColorClass}`}>
                  {role.badge}
                </span>
                <span className="text-[9px] font-mono text-neutral-400">{role.meddpiccRole}</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-tight">{role.title}</h4>
              <div className="p-1.5 bg-[#0e0f17] rounded border border-neutral-900">
                <span className="text-[8.5px] font-mono text-neutral-400 block font-semibold uppercase">
                  {isId ? SLIDE_06_COPY.focusLabelId : SLIDE_06_COPY.focusLabelEn}
                </span>
                <p className="text-[10px] text-neutral-400 leading-snug">
                  {isId ? role.focusId : role.focusEn}
                </p>
              </div>
            </div>
            <div className="mt-1 pt-1 border-t border-neutral-900/80">
              <span className="text-[8.5px] font-mono text-neutral-400 block font-semibold uppercase">
                {isId ? SLIDE_06_COPY.valueLabelId : SLIDE_06_COPY.valueLabelEn}
              </span>
              <p className="text-[10px] text-neutral-400 font-medium leading-tight">
                {isId ? role.valueId : role.valueEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 pt-1.5 border-t border-neutral-900 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
        <span>{isId ? SLIDE_06_COPY.elevationLabelId : SLIDE_06_COPY.elevationLabelEn}</span>
        <span className="text-white font-bold">
          {isId ? SLIDE_06_COPY.elevationTargetId : SLIDE_06_COPY.elevationTargetEn}
        </span>
      </div>
    </div>
  );
};
