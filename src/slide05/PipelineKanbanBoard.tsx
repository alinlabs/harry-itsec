import React from 'react';
import { motion } from 'motion/react';
import { PipelineAccount, PipelineStageKey } from './types';
import { PIPELINE_STAGES } from '../data/pipelineModelData';
import { AccountDossierSidebar } from './AccountDossierSidebar';

interface PipelineKanbanBoardProps {
  accounts: PipelineAccount[];
  selectedAccountId: string;
  activeAccount: PipelineAccount;
  stageLabelMap: Record<PipelineStageKey, string>;
  onSelectAccount: (id: string) => void;
  onMoveStage: (accountId: string, newStage: PipelineStageKey) => void;
  onDragStart: (e: React.DragEvent, accId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, stageKey: PipelineStageKey) => void;
  isId: boolean;
}

export const PipelineKanbanBoard: React.FC<PipelineKanbanBoardProps> = ({
  accounts,
  selectedAccountId,
  activeAccount,
  stageLabelMap,
  onSelectAccount,
  onMoveStage,
  onDragStart,
  onDragOver,
  onDrop,
  isId
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-start h-[380px] sm:h-[400px] lg:h-[430px]">
      {/* 8 Stage Columns Grid */}
      <div className="lg:col-span-8 xl:col-span-9 bg-[#0b0c12]/90 border border-neutral-800 p-2.5 rounded-lg shadow-xl overflow-x-auto scrollbar-thin h-full flex flex-col">
        <div className="shrink-0 flex items-center justify-between border-b border-neutral-800 pb-1.5 mb-2">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            {isId 
              ? 'Papan Kanban 8 Tahap Penjualan (Tarik & Lepas Akun Antar Tahap)' 
              : '8-Stage Interactive Kanban Board (Drag & Drop Accounts Across Stages)'}
          </span>
          <span className="text-[10px] font-mono text-rose-400 font-semibold">
            {isId ? 'GESER KARTU UNTUK SIMULASI' : 'DRAG TO SIMULATE PIPELINE'}
          </span>
        </div>

        {/* Stage Lanes Container */}
        <div className="grid grid-cols-8 gap-2 min-w-[760px] flex-1 min-h-0">
          {PIPELINE_STAGES.map((stage) => {
            const stageAccounts = accounts.filter(a => a.stage === stage.key);
            const stageTotalMillions = stageAccounts.reduce((sum, a) => sum + a.dealValueIdrMillions, 0);

            return (
              <div
                key={stage.key}
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, stage.key)}
                className="bg-[#07080d] border border-neutral-900 rounded p-2 flex flex-col h-full hover:border-neutral-800 transition-colors"
              >
                {/* Lane Header */}
                <div className="shrink-0 border-b border-neutral-900 pb-1.5 mb-2">
                  <div className="flex items-center justify-between mb-0.5">
                    <span 
                      className="text-[10px] font-mono font-bold uppercase truncate"
                      style={{ color: stage.stageColor }}
                    >
                      {stageLabelMap[stage.key] || stage.label}
                    </span>
                    <span className="text-[10px] font-mono bg-neutral-900 px-1 rounded text-neutral-300">
                      {stageAccounts.length}
                    </span>
                  </div>
                  <div className="text-[9px] font-mono text-neutral-400 flex items-center justify-between">
                    <span>{Math.round(stage.probabilityWeight * 100)}% Win</span>
                    <span className="text-neutral-300">
                      {isId ? `Rp ${(stageTotalMillions / 1000).toFixed(1).replace('.', ',')} M` : `IDR ${(stageTotalMillions / 1000).toFixed(1)}B`}
                    </span>
                  </div>
                </div>

                {/* Lane Account Cards */}
                <div className="flex-1 min-h-0 space-y-1.5 overflow-y-auto scrollbar-thin pr-0.5">
                  {stageAccounts.map((acc) => {
                    const isSelected = acc.id === selectedAccountId;
                    const displayName = acc.shortName || acc.name.replace(/^PT\s+/i, '').split(' ')[0];
                    return (
                      <motion.div
                        key={acc.id}
                        layoutId={`kanban-card-${acc.id}`}
                        transition={{
                          layout: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
                        }}
                        draggable
                        onDragStart={(e: any) => onDragStart(e, acc.id)}
                        onClick={() => onSelectAccount(acc.id)}
                        className={`p-2 rounded border cursor-grab active:cursor-grabbing transition-colors card-interactive-shimmer ${
                          isSelected
                            ? 'bg-rose-950/50 border-rose-600 shadow-[0_0_10px_rgba(225,29,72,0.2)]'
                            : 'bg-neutral-950 hover:bg-neutral-900 border-neutral-900'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1 gap-1">
                          <span className="text-xs font-bold text-white truncate max-w-[85px]" title={acc.name}>
                            {displayName}
                          </span>
                          <span className="text-[9px] font-mono text-rose-400 font-semibold shrink-0">
                            {acc.compositeScore}
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-neutral-300 flex items-center justify-between">
                          <span>{isId ? `Rp ${acc.dealValueIdrMillions} Jt` : `IDR ${acc.dealValueIdrMillions}M`}</span>
                          <span className="text-neutral-400">{acc.city.slice(0, 3).toUpperCase()}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Dropzone Hint */}
                <div className="shrink-0 mt-auto pt-1.5 border-t border-neutral-900 text-center text-[9px] font-mono text-neutral-600">
                  {stageAccounts.length === 0 ? (isId ? 'Tarik ke sini' : 'Drop here') : (isId ? `${stageAccounts.length} akun` : `${stageAccounts.length} accounts`)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Account Detail Dossier Sidebar */}
      <AccountDossierSidebar
        activeAccount={activeAccount}
        stageLabelMap={stageLabelMap}
        onMoveStage={onMoveStage}
        isId={isId}
      />
    </div>
  );
};
