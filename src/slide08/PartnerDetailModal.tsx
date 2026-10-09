import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { PartnerCandidate } from '../data/partnershipData';

interface PartnerDetailModalProps {
  partner: PartnerCandidate | null;
  onClose: () => void;
}

export const PartnerDetailModal: React.FC<PartnerDetailModalProps> = ({
  partner,
  onClose
}) => {
  if (!partner) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3"
      onClick={onClose}
    >
      <div 
        className="bg-[#0e0f17] border border-neutral-700 max-w-lg w-full rounded-xl p-4 space-y-3 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-neutral-800 pb-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white">{partner.name}</h3>
              {partner.ticker && (
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-neutral-800 text-sky-400 border border-neutral-700">
                  {partner.ticker}
                </span>
              )}
            </div>
            <span className="text-xs text-rose-400 font-mono">{partner.category}</span>
          </div>
          <button 
            onClick={onClose}
            className="text-neutral-400 hover:text-white text-xs font-mono px-2 py-1 bg-neutral-900 rounded"
          >
            ✕ Tutup
          </button>
        </div>

        {/* Score Breakdown */}
        <div className="p-2.5 bg-neutral-950 rounded border border-neutral-800 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-400">Total Skor Ekosistem:</span>
            <span className="text-emerald-400 font-bold text-sm">{partner.ecosystemScore} / 100</span>
          </div>
          <div className="grid grid-cols-5 gap-1 text-[9px] font-mono text-center">
            <div className="bg-neutral-900 p-1 rounded">
              <span className="text-neutral-400 block">Market</span>
              <span className="text-white font-bold">{partner.marketReach}/20</span>
            </div>
            <div className="bg-neutral-900 p-1 rounded">
              <span className="text-neutral-400 block">Strategic</span>
              <span className="text-white font-bold">{partner.strategicFit}/20</span>
            </div>
            <div className="bg-neutral-900 p-1 rounded">
              <span className="text-neutral-400 block">Technical</span>
              <span className="text-white font-bold">{partner.technicalFit}/20</span>
            </div>
            <div className="bg-neutral-900 p-1 rounded">
              <span className="text-neutral-400 block">Sales</span>
              <span className="text-white font-bold">{partner.salesCapability}/20</span>
            </div>
            <div className="bg-neutral-900 p-1 rounded">
              <span className="text-neutral-400 block">Geo</span>
              <span className="text-white font-bold">{partner.geographicReach}/20</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">Rasionalisasi Komersial:</span>
            <p className="text-neutral-200 mt-0.5">{partner.commercialRationale}</p>
          </div>

          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">Model Kolaborasi Co-Sell:</span>
            <p className="text-neutral-200 mt-0.5">{partner.coSellMotion}</p>
          </div>

          <div className="p-2 bg-emerald-950/40 border border-emerald-900/80 rounded">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Hasil Audit Non-Kompetitor:
            </span>
            <p className="text-neutral-200 text-[11px] mt-0.5">{partner.auditNotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
