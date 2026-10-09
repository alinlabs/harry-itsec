import React from 'react';
import { FUNNEL_STEP_CARDS } from './data';

interface FunnelAndHorizonViewProps {
  isId: boolean;
}

export const FunnelAndHorizonView: React.FC<FunnelAndHorizonViewProps> = ({ isId }) => {
  return (
    <div className="flex flex-col justify-start space-y-2.5">
      {/* Top Section: 50 Accounts Execution Funnel (No outer card wrapper, only 01 to 04 cards) */}
      <div className="flex flex-col space-y-1.5 shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-0.5">
          <div className="flex items-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {isId ? 'RENCANA 50 AKUN JABODETABEK → CORONG KONVERSI 4 TAHAP' : '50 JABODETABEK ACCOUNTS → 4-STAGE CONVERSION FUNNEL'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2 py-0.5 rounded bg-rose-950/70 border border-rose-800/60 text-rose-300 font-bold">
              {isId ? 'TARGET UTAMA: 1 WON / BLN (RP 1 M / BLN)' : 'PRIMARY TARGET: 1 WON / MO (IDR 1B / MO)'}
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-800/60 text-emerald-300 font-bold">
              {isId ? 'TOTAL Q4–Q1: 2–3 COMMERCIAL DEALS' : 'Q4–Q1 TOTAL: 2–3 DEALS'}
            </span>
          </div>
        </div>

        {/* 4 Clean Visual Funnel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 relative">
          {FUNNEL_STEP_CARDS.map((card) => (
            <div
              key={card.step}
              className={`pipeline-funnel-card p-3 bg-[#0e0f17] dark:bg-[#0e0f17] border border-neutral-800 dark:border-neutral-800 rounded-lg relative overflow-hidden group transition-all flex flex-col justify-between space-y-2 ${card.stepBorderClass}`}
            >
              <div>
                {/* Header Row: [01] Badge + Title on Left, Metric Aligned on Right */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className={`w-5 h-5 rounded font-mono text-[10px] font-extrabold flex items-center justify-center shrink-0 shadow-xs ${card.stepColorClass}`}>
                      {card.step}
                    </span>
                    <h4 className="text-xs font-bold text-white tracking-tight truncate">
                      {card.title}
                    </h4>
                  </div>
                  <span className="text-xs font-bold font-mono text-white shrink-0 text-right">
                    {card.metric}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-300 leading-tight">
                  {isId ? card.descId : card.descEn}
                </p>
              </div>
              <div className="mt-2 pt-0.5 flex justify-between text-[10px] font-mono text-neutral-400">
                <span>{card.footerLeft}</span>
                <span className={card.step === '01' ? 'text-rose-400 font-bold' : card.step === '02' ? 'text-sky-400 font-bold' : card.step === '03' ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>
                  {card.footerRight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: 1-Year Balanced Strategy Matrix (No outer card wrapper) */}
      <div className="shrink-0 flex flex-col justify-start space-y-1.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-0.5">
          <div className="flex items-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {isId ? 'HORIZON 1 TAHUN: STRUKTUR PENDAPATAN & KESEIMBANGAN KPI' : '1-YEAR HORIZON: REVENUE STRUCTURE & BALANCED KPIS'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-white font-bold">{isId ? 'Rasio Cakupan:' : 'Coverage Ratio:'}</span>
            <span className="text-emerald-400 font-bold">3.5x – 4.0x Buffer (Rp 10,0 M – Rp 20,0 M / Bln)</span>
          </div>
        </div>

        {/* 2-Column Concise Comparison: Left Revenue Anchors, Right Activity Drivers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {/* Left: Revenue Pillars */}
          <div className="p-3 bg-neutral-950/80 border border-neutral-900 rounded-lg flex flex-col justify-start space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold block text-center">
              {isId ? '4 PILAR PENDAPATAN STRATEGIS (REVENUE PILLARS)' : '4 REVENUE STRATEGY PILLARS'}
            </span>
            
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2 bg-[#07080d] border border-neutral-900 rounded">
                <span className="text-[9px] text-neutral-400 block truncate">Monthly Quota (Harry)</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 block mt-0.5">Rp 1,0 M → Rp 3,0 M</span>
                <span className="text-[9px] text-neutral-400 block">Skalabilitas B2 → Q4 Akhir</span>
              </div>

              <div className="p-2 bg-[#07080d] border border-neutral-900 rounded">
                <span className="text-[9px] text-neutral-400 block truncate">Deal Benchmark</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 block mt-0.5">Rp 1,0 M / Bln</span>
                <span className="text-[9px] text-neutral-400 block">Kapasitas ≤ 500 Dev</span>
              </div>

              <div className="p-2 bg-[#07080d] border border-neutral-900 rounded">
                <span className="text-[9px] text-neutral-400 block truncate">ARR Kumulatif (Y1)</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 block mt-0.5">Rp 24 M – Rp 25 M</span>
                <span className="text-[9px] text-neutral-400 block">Total Siklus 1 Tahun</span>
              </div>

              <div className="p-2 bg-[#07080d] border border-neutral-900 rounded">
                <span className="text-[9px] text-neutral-400 block truncate">Ekspansi Akun (NRR)</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 block mt-0.5">120% – 130%</span>
                <span className="text-[9px] text-neutral-400 block">Holding & Subsidiaries</span>
              </div>
            </div>
          </div>

          {/* Right: Operational Activity Ratios */}
          <div className="p-3 bg-neutral-950/80 border border-neutral-900 rounded-lg flex flex-col justify-start space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold block text-center">
              {isId ? 'RITME AKTIVITAS BULANAN (MONTHLY CADENCE)' : 'MONTHLY ACTIVITY CADENCE'}
            </span>

            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <div className="p-2 bg-[#07080d] border border-neutral-900 rounded text-center">
                <span className="text-[9px] text-neutral-400 block">Target Universe</span>
                <span className="text-sm font-black text-white block mt-0.5">50 Akun</span>
                <span className="text-[9px] text-neutral-400 block">Jabodetabek</span>
              </div>

              <div className="p-2 bg-[#07080d] border border-neutral-900 rounded text-center">
                <span className="text-[9px] text-neutral-400 block">C-Level Meeting</span>
                <span className="text-sm font-black text-white block mt-0.5">16+ Sesi</span>
                <span className="text-[9px] text-neutral-400 block">CISO/CIO / Bln</span>
              </div>

              <div className="p-2 bg-[#07080d] border border-neutral-900 rounded text-center">
                <span className="text-[9px] text-neutral-400 block">PoC Aktif</span>
                <span className="text-sm font-black text-white block mt-0.5">8–14 Sesi</span>
                <span className="text-[9px] text-neutral-400 block">5-Hari Tanpa Risiko</span>
              </div>
            </div>

            <div className="p-2 bg-emerald-950/30 border border-emerald-900/40 rounded flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-300 text-[11px]">
                {isId ? 'Tingkat Konversi Peluang Matang ke Won:' : 'Mature Opportunity Win Rate:'}
              </span>
              <span className="text-emerald-400 font-black text-sm">
                ≥ 30% (1 Won dari 3 Matang)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
