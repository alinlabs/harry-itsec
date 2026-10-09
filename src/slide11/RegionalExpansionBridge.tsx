import React from 'react';
import { Globe } from 'lucide-react';
import { SLIDE_11_COPY, REGIONAL_EXPANSION_STAGES } from './data';

interface RegionalExpansionBridgeProps {
  isId: boolean;
}

export const RegionalExpansionBridge: React.FC<RegionalExpansionBridgeProps> = ({ isId }) => {
  return (
    <>
      {/* Regional Expansion Logical Bridge (ASEAN Scale) */}
      <div className="p-2.5 bg-neutral-950 border border-neutral-900 rounded-lg space-y-1.5">
        <div className="flex items-center justify-between font-mono text-xs border-b border-neutral-900 pb-1">
          <span className="text-white font-bold flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            {isId 
              ? SLIDE_11_COPY.regionalExpansion.title.id 
              : SLIDE_11_COPY.regionalExpansion.title.en}
          </span>
          <span className="text-[10px] text-sky-400 font-semibold">
            {SLIDE_11_COPY.regionalExpansion.badge}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
          {REGIONAL_EXPANSION_STAGES.map((stage) => (
            <div key={stage.step} className="p-2 bg-neutral-900/80 rounded border border-neutral-800">
              <span className={`text-[10px] ${stage.stepColorClass} font-bold block`}>
                {stage.step}
              </span>
              <span className="text-xs text-white font-bold block my-0.5">
                {stage.title}
              </span>
              <span className={`text-[9px] ${stage.subColorClass || 'text-neutral-400'}`}>
                {stage.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-neutral-900 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
        <span>{SLIDE_11_COPY.regionalExpansion.footerText}</span>
        <span className="text-rose-400 font-bold">{SLIDE_11_COPY.regionalExpansion.footerTag}</span>
      </div>
    </>
  );
};
