import React from 'react';
import { TargetAccount } from './types';
import { GlobalModal } from '../components/GlobalModal';
import { Building2, ShieldAlert, ArrowRight } from 'lucide-react';
import { getLevelBadge } from './utils';
import { SLIDE_03_COPY } from './data';

interface CompanyDossierModalProps {
  modalCompany: TargetAccount | null;
  onClose: () => void;
  isId: boolean;
}

export const CompanyDossierModal: React.FC<CompanyDossierModalProps> = ({
  modalCompany,
  onClose,
  isId
}) => {
  if (!modalCompany) return null;

  const levelBadge = getLevelBadge(modalCompany.targetLevel);

  return (
    <GlobalModal
      isOpen={!!modalCompany}
      onClose={onClose}
      icon={<Building2 className="w-5 h-5 text-rose-500" />}
      title={
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-white font-bold">{modalCompany.name}</span>
          <span className={`px-2 py-0.5 text-xs font-mono rounded border ${levelBadge.badgeClass}`}>
            {isId ? levelBadge.labelId : levelBadge.labelEn}
          </span>
        </div>
      }
      subtitle={
        <span className="font-mono text-xs text-neutral-400">
          {modalCompany.sector} · {modalCompany.subSector} · {modalCompany.city} ({modalCompany.region}) · {modalCompany.stockTicker || modalCompany.listingStatus}
        </span>
      }
      maxWidthClass="max-w-3xl"
      footerContent={
        <span>{isId ? SLIDE_03_COPY.modalFooter.id : SLIDE_03_COPY.modalFooter.en}</span>
      }
    >
      <div className="space-y-4">
        {/* Top Score & Radial Level Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-neutral-950 border border-neutral-800 rounded">
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">
              {isId ? 'Skor Peluang Komposit' : 'Opportunity Score'}
            </span>
            <span className="text-3xl font-black font-mono text-rose-400 block mt-0.5">
              {modalCompany.opportunityScore}<span className="text-xs text-neutral-500 font-normal">/100</span>
            </span>
            <span className="text-[10px] text-neutral-400 font-mono block mt-1">
              {isId ? 'Total 5 faktor pembobotan' : '5 composite weighting factors'}
            </span>
          </div>

          <div className="p-3 bg-neutral-950 border border-neutral-800 rounded">
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">
              {isId ? 'Posisi Radial Orbit' : 'Radial Orbit Position'}
            </span>
            <span className="text-sm font-bold font-mono text-white block mt-1">
              {modalCompany.targetLevel === 'FOCUS_PRIMARY' 
                ? (isId ? 'Fokus (125px)' : 'Focus (125px)')
                : modalCompany.targetLevel === 'MEDIUM_PRIORITY'
                ? (isId ? 'Strategis (205px)' : 'Strategic (205px)')
                : (isId ? 'Prospek (285px)' : 'Prospect (285px)')}
            </span>
            <span className="text-[10px] text-neutral-400 font-mono block mt-1">
              {modalCompany.targetLevel === 'FOCUS_PRIMARY' 
                ? (isId ? 'Prioritas Eksekusi Utama Hari ke-1' : 'Primary Day 1 Execution Target')
                : modalCompany.targetLevel === 'MEDIUM_PRIORITY'
                ? (isId ? 'Target Ekspansi Strategis Bulan ke-2' : 'Month 2 Strategic Expansion Target')
                : (isId ? 'Target Prospek Cadangan Ekosistem' : 'Level 3 Prospect Ecosystem Backup')}
            </span>
          </div>

          <div className="p-3 bg-neutral-950 border border-neutral-800 rounded">
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">
              {isId ? 'Skala Perusahaan' : 'Enterprise Size'}
            </span>
            <span className="text-sm font-bold font-mono text-white block mt-1">{modalCompany.companySize}</span>
            <span className="text-[10px] text-neutral-400 font-mono block mt-1">{modalCompany.listingStatus}</span>
          </div>
        </div>

        {/* 5 Dimensional Score Breakdown */}
        <div className="bg-neutral-950/80 p-3.5 rounded border border-neutral-900 space-y-2">
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block font-semibold">
            {isId ? 'Rincian Pembobotan Skor Peluang (Model Komposit)' : 'Scoring Dimensions Breakdown (Composite Model)'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { label: isId ? 'Kompleksitas Digital' : 'Digital Complexity', val: modalCompany.digitalComplexity },
              { label: isId ? 'Paparan Risiko Keamanan' : 'Security Exposure', val: modalCompany.securityExposure },
              { label: isId ? 'Tekanan Regulasi' : 'Regulatory Pressure', val: modalCompany.regulatoryPressure },
              { label: isId ? 'Skala Bisnis' : 'Business Scale', val: modalCompany.businessScale },
              { label: isId ? 'Kesesuaian Produk' : 'Potential Fit', val: modalCompany.potentialFit }
            ].map(d => (
              <div key={d.label} className="p-2 bg-neutral-900/60 rounded border border-neutral-800/80 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-neutral-300">{d.label}</span>
                  <span className="text-white font-bold">{d.val}/20</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-950 rounded overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-rose-700 to-rose-500 rounded"
                    style={{ width: `${(d.val / 20) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Value Proposition / Why Relevant */}
        <div className="p-3.5 bg-neutral-950/80 border border-neutral-900 rounded space-y-1 text-xs">
          <span className="text-[10px] font-mono text-rose-400 uppercase font-semibold flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
            {isId ? 'Alasan Relevansi Strategis dengan Bronyx AI' : 'Strategic Relevance to Bronyx AI'}
          </span>
          <p className="text-neutral-200 leading-relaxed text-xs">
            {modalCompany.whyRelevant}
          </p>
        </div>

        {/* Target Buyer */}
        <div className="p-3 bg-neutral-950/80 border border-neutral-900 rounded text-xs">
          <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">
            {isId ? 'Pusat Target Pembuat Keputusan' : 'Target Decision Center'}
          </span>
          <span className="text-white font-mono text-xs font-semibold">{modalCompany.potentialBuyer}</span>
        </div>

        {/* Next Tactical Action */}
        <div className="p-3.5 bg-rose-950/30 border border-rose-900/60 rounded space-y-1">
          <span className="text-[10px] font-mono text-rose-300 uppercase font-semibold flex items-center gap-1.5">
            <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
            {isId ? 'Aksi Taktis Penjualan Selanjutnya (Sales Lead Action)' : 'Next Tactical Sales Action'}
          </span>
          <p className="text-xs text-rose-100 leading-relaxed font-sans">
            {modalCompany.nextSalesAction}
          </p>
        </div>
      </div>
    </GlobalModal>
  );
};
