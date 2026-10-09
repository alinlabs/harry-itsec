import React from 'react';
import { SLIDE_10_COPY, PIPELINE_RISK_ITEMS } from './data';

interface PipelineRiskMatrixProps {
  isId: boolean;
}

export const PipelineRiskMatrix: React.FC<PipelineRiskMatrixProps> = ({ isId }) => {
  return (
    <div className="p-2 bg-[#0e0f17] border border-neutral-800 rounded-lg flex flex-col justify-start space-y-1 shadow-xl">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1 mb-1 font-mono text-xs">
        <span className="text-white font-bold">
          {isId ? SLIDE_10_COPY.riskHeader.id : SLIDE_10_COPY.riskHeader.en}
        </span>
        <span className="text-emerald-400 font-bold text-[9.5px]">
          {SLIDE_10_COPY.riskBadge}
        </span>
      </div>

      <div className="space-y-1 text-xs flex flex-col justify-start">
        {PIPELINE_RISK_ITEMS.map((risk) => (
          <div
            key={risk.id}
            className="p-1.5 bg-neutral-950/90 border border-neutral-900 rounded space-y-0.5"
          >
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="text-amber-400 font-bold">{risk.title}</span>
              <span className="text-[9px] text-neutral-400">{risk.badge}</span>
            </div>
            <p className="text-[10px] text-neutral-300 leading-snug">
              <strong className="text-white">Mitigasi: </strong>
              {risk.mitigation}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-1 border-t border-neutral-800 text-[9.5px] font-mono text-neutral-400 flex items-center justify-between">
        <span>{SLIDE_10_COPY.riskFooterPrinciple}</span>
        <span className="text-rose-400 font-bold">{SLIDE_10_COPY.riskFooterBadge}</span>
      </div>
    </div>
  );
};
