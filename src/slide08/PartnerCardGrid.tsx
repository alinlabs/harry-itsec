import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PartnerCandidate } from '../data/partnershipData';

interface PartnerCardGridProps {
  partners: PartnerCandidate[];
  onSelectPartner: (partner: PartnerCandidate) => void;
}

export const PartnerCardGrid: React.FC<PartnerCardGridProps> = ({
  partners,
  onSelectPartner
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
      {partners.map((partner) => (
        <div
          key={partner.id}
          onClick={() => onSelectPartner(partner)}
          className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 transition-all rounded-lg flex flex-col justify-between cursor-pointer group shadow"
        >
          <div>
            {/* Top Row: Name, Ticker, Score Badge */}
            <div className="flex items-start justify-between gap-1.5 mb-1.5">
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h4 className="text-xs font-bold text-white group-hover:text-rose-400 transition-colors">
                    {partner.shortName}
                  </h4>
                  {partner.ticker && (
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-neutral-800 text-sky-300 border border-neutral-700">
                      {partner.ticker}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-neutral-400 block mt-0.5 line-clamp-1">
                  {partner.category}
                </span>
              </div>

              {/* Overall Score */}
              <div className="shrink-0 text-right">
                <span className="text-xs font-black text-emerald-400 font-mono">
                  {partner.ecosystemScore}/100
                </span>
                <span className="text-[8.5px] text-neutral-400 block font-mono">SKOR FIT</span>
              </div>
            </div>

            {/* Sector Focus Tag */}
            <div className="p-1.5 bg-neutral-950/80 border border-neutral-900 rounded mb-1.5 text-[10.5px]">
              <span className="text-neutral-400 block text-[9px] uppercase font-mono">Fokus Sektor & Basis Klien:</span>
              <span className="text-neutral-200 font-medium line-clamp-2">
                {partner.primarySectorFocus}
              </span>
            </div>

            {/* Co-Sell Motion Snippet */}
            <p className="text-[10.5px] text-neutral-300 leading-snug line-clamp-2 mb-2">
              {partner.coSellMotion}
            </p>
          </div>

          {/* Bottom Status & Audit Tag */}
          <div className="pt-1.5 border-t border-neutral-900 flex items-center justify-between text-[9.5px] font-mono">
            <span className="px-1.5 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">
              {partner.tierStatus}
            </span>
            <span className="text-emerald-400 flex items-center gap-1 font-bold">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              AUDITED NON-KOMPETITOR
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
