import React from 'react';
import { motion } from 'motion/react';
import { PipelineAccount, PipelineStageKey } from './types';
import { PIPELINE_STAGES } from '../data/pipelineModelData';

interface AccountDossierSidebarProps {
  activeAccount: PipelineAccount;
  stageLabelMap: Record<PipelineStageKey, string>;
  onMoveStage: (accountId: string, newStage: PipelineStageKey) => void;
  isId: boolean;
}

export const AccountDossierSidebar: React.FC<AccountDossierSidebarProps> = ({
  activeAccount,
  stageLabelMap,
  onMoveStage,
  isId
}) => {
  return (
    <div className="lg:col-span-4 xl:col-span-3 bg-[#0e0f17] border border-neutral-800 p-3 rounded-lg flex flex-col justify-between space-y-2 shadow-none h-full">
      <div>
        <div className="border-b border-neutral-800 pb-2.5 mb-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-rose-500 uppercase font-semibold">
              {isId ? 'Dossier Peluang Terpilih' : 'Selected Opportunity Dossier'}
            </span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              {stageLabelMap[activeAccount.stage] || activeAccount.stage.toUpperCase()}
            </span>
          </div>
          <h3 className="text-base font-bold text-white tracking-tight mt-1">{activeAccount.name}</h3>
          <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
            {activeAccount.sector} · {activeAccount.city}
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 bg-neutral-950/80 border border-neutral-900 rounded">
              <span className="text-[10px] font-mono text-neutral-400 block">{isId ? 'Nilai Potensi ARR' : 'ARR Deal Value'}</span>
              <span className="text-sm font-bold text-white font-mono">{isId ? `Rp ${activeAccount.dealValueIdrMillions} Jt` : `IDR ${activeAccount.dealValueIdrMillions}M`}</span>
            </div>
            <div className="p-2 bg-neutral-950/80 border border-neutral-900 rounded">
              <span className="text-[10px] font-mono text-neutral-400 block">{isId ? 'Skor Peluang' : 'Opportunity Score'}</span>
              <span className="text-sm font-bold text-rose-400 font-mono">{activeAccount.compositeScore}/100</span>
            </div>
          </div>

          <div className="p-2.5 bg-neutral-950/80 border border-neutral-900 rounded space-y-1">
            <span className="text-[10px] font-mono text-neutral-400 block uppercase font-semibold">
              {isId ? 'Fokus Use Case Utama' : 'Primary Use Case Focus'}
            </span>
            <p className="text-[11px] text-neutral-200 leading-snug">
              {activeAccount.useCase}
            </p>
          </div>

          <div className="p-2.5 bg-rose-950/20 border border-rose-900/40 rounded space-y-1">
            <span className="text-[10px] font-mono text-rose-400 block uppercase font-semibold">
              {isId ? 'Aksi Sales Lead Berikutnya' : 'Next Sales Lead Action'}
            </span>
            <p className="text-[11px] text-rose-100 leading-snug">
              {activeAccount.nextAction}
            </p>
          </div>

          {/* Manual Stage Shifter */}
          <div className="pt-2 border-t border-neutral-900">
            <span className="text-[10px] font-mono text-neutral-400 block mb-1">
              {isId ? 'Pindahkan Cepat ke Tahap:' : 'Quick Stage Transition:'}
            </span>
            <div className="grid grid-cols-4 gap-1">
              {PIPELINE_STAGES.map(s => (
                <button
                  key={s.key}
                  onClick={() => onMoveStage(activeAccount.id, s.key)}
                  className={`py-1 text-[9px] font-mono rounded transition-colors ${
                    activeAccount.stage === s.key
                      ? 'bg-rose-600 text-white font-bold'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {s.key.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-2.5 bg-neutral-950/80 border border-neutral-900 rounded text-xs text-neutral-400 font-mono flex items-center justify-between">
        <span>{isId ? 'Target Siklus Penjualan' : 'Target Sales Cycle'}:</span>
        <span className="text-white font-bold">45–60 {isId ? 'Hari' : 'Days'}</span>
      </div>
    </div>
  );
};
