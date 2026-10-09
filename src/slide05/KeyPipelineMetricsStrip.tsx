import React from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { PipelineCalculatedMetrics } from './types';

interface KeyPipelineMetricsStripProps {
  metrics: PipelineCalculatedMetrics;
  accountsCount: number;
  isId: boolean;
}

export const KeyPipelineMetricsStrip: React.FC<KeyPipelineMetricsStripProps> = ({
  metrics,
  accountsCount,
  isId
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 my-1 shrink-0">
      <div className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 rounded card-interactive-shimmer cursor-pointer">
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
          {isId ? 'TOTAL POOL PIPELINE' : 'TOTAL PIPELINE POOL'}
        </span>
        <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-white mt-0.5">
          <AnimatedCounter value={metrics.totalValueIdr} />
        </div>
        <span className="text-[10px] font-mono text-neutral-400 block mt-0.5 truncate">
          {accountsCount} {isId ? 'Akun Dimodelkan' : 'Modelled Accounts'}
        </span>
      </div>

      <div className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 rounded card-interactive-shimmer cursor-pointer">
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
          {isId ? 'PIPELINE TERKUALIFIKASI' : 'QUALIFIED PIPELINE'}
        </span>
        <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-rose-400 mt-0.5">
          <AnimatedCounter value={metrics.qualifiedValueIdr} />
        </div>
        <span className="text-[10px] font-mono text-neutral-400 block mt-0.5 truncate">
          {isId ? 'Terkualifikasi → Negosiasi' : 'Qualified → Negotiation'}
        </span>
      </div>

      <div className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 rounded card-interactive-emerald cursor-pointer">
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
          {isId ? 'PIPELINE DIBOBOTKAN (ARR)' : 'WEIGHTED PIPELINE (ARR)'}
        </span>
        <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-emerald-400 mt-0.5">
          <AnimatedCounter value={metrics.weightedValueIdr} />
        </div>
        <span className="text-[10px] font-mono text-neutral-400 block mt-0.5 truncate">
          {isId ? 'Hasil tertimbang probabilitas' : 'Probability yield'}
        </span>
      </div>

      <div className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 rounded card-interactive-shimmer cursor-pointer">
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
          {isId ? 'CAKUPAN PIPELINE' : 'PIPELINE COVERAGE'}
        </span>
        <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-white mt-0.5">
          <AnimatedCounter value={metrics.coverageRatio} />
        </div>
        <span className="text-[10px] font-mono text-neutral-400 block mt-0.5 truncate">
          {isId ? 'Target: 3.5x–4.0x' : 'Target: 3.5x–4.0x Buffer'}
        </span>
      </div>

      <div className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 rounded card-interactive-emerald cursor-pointer">
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
          {isId ? 'TARGET BULANAN HARRY GULTOM' : 'MONTHLY QUOTA (HARRY GULTOM)'}
        </span>
        <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-emerald-400 mt-0.5">
          <AnimatedCounter value="Rp 1,0 M / Bln" />
        </div>
        <span className="text-[10px] font-mono text-neutral-400 block mt-0.5 truncate">
          {isId ? '1 Deal @ Rp 1M (Maks. 500 Dev)' : '1 Deal @ IDR 1B (Max 500 Dev)'}
        </span>
      </div>
    </div>
  );
};
