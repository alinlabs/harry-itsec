import React from 'react';
import { MapPin, GitBranch } from 'lucide-react';
import { PipelineAccount, PipelineStageKey } from './types';
import { PIPELINE_STAGES } from '../data/pipelineModelData';
import { AccountPipelineMap } from '../components/AccountPipelineMap';

interface MapPipelineViewProps {
  accounts: PipelineAccount[];
  selectedAccountId: string;
  activeAccount: PipelineAccount;
  stageLabelMap: Record<PipelineStageKey, string>;
  onSelectAccount: (id: string) => void;
  onOpenInKanban?: () => void;
  isId: boolean;
}

export const MapPipelineView: React.FC<MapPipelineViewProps> = ({
  accounts,
  selectedAccountId,
  activeAccount,
  stageLabelMap,
  onSelectAccount,
  onOpenInKanban,
  isId
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-start h-[380px] sm:h-[400px] lg:h-[430px]">
      {/* Left 8-9 Cols: Interactive OpenStreetMap / Leaflet Canvas */}
      <div className="lg:col-span-8 xl:col-span-9 bg-[#0b0c12]/90 border border-neutral-800 p-2.5 rounded-lg flex flex-col justify-between shadow-xl h-full">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5 mb-1.5 shrink-0">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            {isId ? 'Peta Wilayah Pipeline' : 'Territory Pipeline Map'}
          </span>
          <span className="text-[10px] font-mono text-rose-400 font-semibold">
            {isId ? 'KLIK TITIK AKUN UNTUK DETAIL' : 'CLICK ACCOUNT MARKER FOR DETAILS'}
          </span>
        </div>

        {/* Real Leaflet Map Container */}
        <div className="w-full flex-1 min-h-[220px]">
          <AccountPipelineMap
            accounts={accounts}
            selectedAccountId={selectedAccountId}
            onSelectAccount={onSelectAccount}
            isId={isId}
            stageLabelMap={stageLabelMap}
          />
        </div>

        {/* Map Legend */}
        <div className="pt-1.5 border-t border-neutral-800 flex flex-wrap items-center justify-between text-[10px] font-mono text-neutral-400 gap-2 shrink-0">
          {PIPELINE_STAGES.map((s) => (
            <div key={s.key} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.stageColor }} />
              <span className="text-neutral-300">{stageLabelMap[s.key] || s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Account Profile Sidebar */}
      <div className="lg:col-span-4 xl:col-span-3 bg-[#0e0f17] border border-neutral-800 p-3 rounded-lg flex flex-col justify-between space-y-2 h-full shadow-none">
        <div className="space-y-2">
          <div className="border-b border-neutral-800 pb-2">
            <span className="text-[10px] font-mono text-rose-500 uppercase font-semibold block">
              {isId ? 'Disposisi Peta Akun' : 'Account Map Dispatch'}
            </span>
            <h3 className="text-sm font-bold text-white mt-1">{activeAccount.name}</h3>
            <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
              {activeAccount.sector} · {activeAccount.city}
            </div>
            <div className="mt-1 text-xs font-mono font-bold text-emerald-400">
              {stageLabelMap[activeAccount.stage] || activeAccount.stage.toUpperCase()}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 bg-neutral-950/80 rounded border border-neutral-900">
              <span className="text-[9px] text-neutral-400 block">{isId ? 'Potensi ARR' : 'ARR Value'}</span>
              <span className="text-xs font-bold text-white">
                {isId ? `Rp ${activeAccount.dealValueIdrMillions} Jt` : `IDR ${activeAccount.dealValueIdrMillions}M`}
              </span>
            </div>
            <div className="p-2 bg-neutral-950/80 rounded border border-neutral-900">
              <span className="text-[9px] text-neutral-400 block">{isId ? 'Skor Peluang' : 'Score'}</span>
              <span className="text-xs font-bold text-rose-400 font-mono">
                {activeAccount.compositeScore}/100
              </span>
            </div>
          </div>

          <div className="p-2.5 bg-neutral-950/80 rounded border border-neutral-900 space-y-1">
            <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold block">
              {isId ? 'Fokus Use Case' : 'Use Case Focus'}
            </span>
            <p className="text-[11px] text-neutral-200 leading-snug">{activeAccount.useCase}</p>
          </div>

          <div className="p-2.5 bg-rose-950/20 border border-rose-900/40 rounded space-y-1">
            <span className="text-[10px] font-mono text-rose-400 uppercase font-semibold block">
              {isId ? 'Playbook Tindakan' : 'Action Playbook'}
            </span>
            <p className="text-[11px] text-rose-100 leading-snug">{activeAccount.nextAction}</p>
          </div>
        </div>

        <button
          onClick={onOpenInKanban}
          className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-white rounded transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
        >
          <GitBranch className="w-3.5 h-3.5 text-rose-500" />
          <span>{isId ? 'Buka di Papan Kanban →' : 'Open in Kanban Board →'}</span>
        </button>
      </div>
    </div>
  );
};
