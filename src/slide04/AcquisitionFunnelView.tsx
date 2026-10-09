import React from 'react';
import { SLIDE_04_COPY, CHANNEL_MIX_CARDS } from './data';
import { getOutboundSteps, getInboundSteps } from './utils';

interface AcquisitionFunnelViewProps {
  isId: boolean;
}

export const AcquisitionFunnelView: React.FC<AcquisitionFunnelViewProps> = ({ isId }) => {
  const outboundSteps = getOutboundSteps(isId);
  const inboundSteps = getInboundSteps(isId);

  return (
    <div className="h-full flex flex-col justify-between space-y-3.5 mt-2 sm:mt-3">
      {/* ENGINE 1: OUTBOUND PIPELINE (NO WRAPPER CARD, CLEAN TEXT WITH BADGE) */}
      <div className="flex flex-col space-y-1.5">
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono">
              {isId ? SLIDE_04_COPY.pipeline.outboundTitleId : SLIDE_04_COPY.pipeline.outboundTitleEn}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 rounded border border-rose-300 dark:border-rose-800/80">
              {SLIDE_04_COPY.pipeline.outboundBadge}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
            <span>{isId ? SLIDE_04_COPY.pipeline.outboundCycleId : SLIDE_04_COPY.pipeline.outboundCycleEn}</span>
            <span>·</span>
            <span className="text-rose-600 dark:text-rose-400 font-semibold">
              {isId ? SLIDE_04_COPY.pipeline.outboundTargetId : SLIDE_04_COPY.pipeline.outboundTargetEn}
            </span>
          </div>
        </div>

        {/* Connected Pipeline Track with Flow Lines */}
        <div className="relative pt-0.5">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative z-10">
            {outboundSteps.map((step) => (
              <div 
                key={step.num}
                className="outbound-step-card group bg-white dark:bg-[#0e0f17] border border-neutral-200 dark:border-neutral-800 hover:border-rose-600 dark:hover:border-rose-600 hover:bg-rose-600 dark:hover:bg-rose-600 transition-all duration-200 rounded p-2.5 flex flex-col justify-between space-y-1.5 shadow-sm cursor-pointer"
              >
                {/* Step Header with Node Number Only */}
                <div className="flex items-center justify-between">
                  <span className="step-num-node-outbound w-6 h-6 rounded-md bg-rose-600 border border-rose-600 text-white dark:bg-rose-600 dark:border-rose-600 dark:text-white group-hover:bg-white group-hover:border-white group-hover:text-rose-600 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 transition-colors shadow-xs">
                    0{step.num}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-white tracking-tight leading-snug transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-neutral-600 dark:text-neutral-300 group-hover:text-white/95 leading-snug line-clamp-2 transition-colors">
                    {step.focus}
                  </p>
                </div>

                {/* Bottom Key Metric / Output */}
                <div className="pt-1.5 border-t border-neutral-100 dark:border-neutral-800/80 group-hover:border-white/20 flex items-center justify-between text-[9px] font-mono transition-colors">
                  <span className="text-neutral-500 dark:text-neutral-400 group-hover:text-white/80 transition-colors">{isId ? 'Hasil:' : 'Output:'}</span>
                  <span className="text-rose-700 dark:text-rose-300 font-semibold bg-rose-50 dark:bg-rose-950/80 group-hover:bg-white/20 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-800/80 group-hover:border-white/30 group-hover:text-white transition-colors">
                    {step.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ENGINE 2: INBOUND PIPELINE (NO WRAPPER CARD, CLEAN TEXT WITH BADGE) */}
      <div className="flex flex-col space-y-1.5">
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono">
              {isId ? SLIDE_04_COPY.pipeline.inboundTitleId : SLIDE_04_COPY.pipeline.inboundTitleEn}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 rounded border border-sky-300 dark:border-sky-800/80">
              {SLIDE_04_COPY.pipeline.inboundBadge}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
            <span>{isId ? SLIDE_04_COPY.pipeline.inboundCycleId : SLIDE_04_COPY.pipeline.inboundCycleEn}</span>
            <span>·</span>
            <span className="text-sky-600 dark:text-sky-400 font-semibold">
              {isId ? SLIDE_04_COPY.pipeline.inboundTargetId : SLIDE_04_COPY.pipeline.inboundTargetEn}
            </span>
          </div>
        </div>

        {/* Connected Pipeline Track with Flow Lines */}
        <div className="relative pt-0.5">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative z-10">
            {inboundSteps.map((step) => (
              <div 
                key={step.num}
                className="inbound-step-card group bg-white dark:bg-[#0e0f17] border border-neutral-200 dark:border-neutral-800 hover:border-sky-600 dark:hover:border-sky-600 hover:bg-sky-600 dark:hover:bg-sky-600 transition-all duration-200 rounded p-2.5 flex flex-col justify-between space-y-1.5 shadow-sm cursor-pointer"
              >
                {/* Step Header with Node Number Only */}
                <div className="flex items-center justify-between">
                  <span className="step-num-node-inbound w-6 h-6 rounded-md bg-sky-600 border border-sky-600 text-white dark:bg-sky-600 dark:border-sky-600 dark:text-white group-hover:bg-white group-hover:border-white group-hover:text-sky-600 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 transition-colors shadow-xs">
                    0{step.num}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-white tracking-tight leading-snug transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-neutral-600 dark:text-neutral-300 group-hover:text-white/95 leading-snug line-clamp-2 transition-colors">
                    {step.focus}
                  </p>
                </div>

                {/* Bottom Key Metric / Output */}
                <div className="pt-1.5 border-t border-neutral-100 dark:border-neutral-800/80 group-hover:border-white/20 flex items-center justify-between text-[9px] font-mono transition-colors">
                  <span className="text-neutral-500 dark:text-neutral-400 group-hover:text-white/80 transition-colors">{isId ? 'Hasil:' : 'Output:'}</span>
                  <span className="text-sky-700 dark:text-sky-300 font-semibold bg-sky-50 dark:bg-sky-950/80 group-hover:bg-white/20 px-1.5 py-0.5 rounded border border-sky-200 dark:border-sky-800/80 group-hover:border-white/30 group-hover:text-white transition-colors">
                    {step.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTEGRATED MULTI-CHANNEL MIX & 90-DAY GOAL STRIP (NO WRAPPER CARD, DIRECT CLEAN WHITE CARDS) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 text-xs shrink-0">
        {CHANNEL_MIX_CARDS.map((ch) => (
          <div key={ch.id} className="p-2.5 bg-white dark:bg-[#0e0f17] border border-neutral-200 dark:border-neutral-800/80 rounded flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${ch.dotColor}`} />
                {ch.title}
              </span>
              <span className={`${ch.colorClass} font-semibold text-[10px]`}>{ch.duration}</span>
            </div>
            <div className="w-full bg-neutral-100 dark:bg-neutral-900 h-1.5 rounded-full overflow-hidden my-1.5">
              <div className={`${ch.barColor} h-full`} style={{ width: `${ch.percent}%` }} />
            </div>
            <p className="text-[10px] text-neutral-600 dark:text-neutral-300 leading-tight">
              {isId ? ch.descId : ch.descEn}
            </p>
          </div>
        ))}

        {/* Target 90 Days Goal */}
        <div className="p-2.5 bg-white dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/70 rounded flex flex-col justify-between shadow-xs">
          <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider block">
            {isId ? SLIDE_04_COPY.pipeline.target90DaysTitleId : SLIDE_04_COPY.pipeline.target90DaysTitleEn}
          </span>
          <span className="text-sm font-extrabold text-neutral-900 dark:text-white font-mono mt-0.5 block">
            {SLIDE_04_COPY.pipeline.target90DaysGoal}
          </span>
          <span className="text-[10px] text-rose-700 dark:text-rose-300 font-mono mt-0.5 block">
            {isId ? SLIDE_04_COPY.pipeline.target90DaysSubId : SLIDE_04_COPY.pipeline.target90DaysSubEn}
          </span>
        </div>
      </div>
    </div>
  );
};
