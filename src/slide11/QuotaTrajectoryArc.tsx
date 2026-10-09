import React from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { SLIDE_11_COPY } from './data';

interface QuotaTrajectoryArcProps {
  isId: boolean;
}

export const QuotaTrajectoryArc: React.FC<QuotaTrajectoryArcProps> = ({ isId }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1.5 font-mono text-xs">
        <span className="text-rose-400 font-bold flex items-center gap-1.5">
          <svg className="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
          {isId 
            ? SLIDE_11_COPY.trajectoryHeader.title.id 
            : SLIDE_11_COPY.trajectoryHeader.title.en}
        </span>
        <span className="text-emerald-400 font-bold">
          {isId 
            ? SLIDE_11_COPY.trajectoryHeader.totalQ4.id 
            : SLIDE_11_COPY.trajectoryHeader.totalQ4.en}
        </span>
      </div>

      {/* 30D / 60D / 90D Sharp Bullet Cards */}
      <div className="space-y-2">
        {/* 30D */}
        <div className="p-2.5 bg-neutral-950/80 border border-neutral-900 rounded-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono font-black text-xs text-rose-400 shrink-0">
              30D
            </div>
            <div>
              <span className="text-xs font-bold text-white block">
                {isId ? 'Bulan 1 (Okt): Fondasi, 50 Akun & 6 PoC' : 'Month 1 (Oct): Foundation, 50 Accounts & 6 PoCs'}
              </span>
              <span className="text-[11px] text-neutral-300 font-sans block leading-tight">
                Progres pengumpulan data 50 akun, mining warm client ITSEC & 6 PoC staging (Rp 0).
              </span>
            </div>
          </div>
          <div className="text-right font-mono shrink-0">
            <span className="text-sm font-extrabold text-neutral-400 block">
              <AnimatedCounter value="Rp 0 (Ramp-up)" />
            </span>
            <span className="text-[9px] text-rose-400 font-semibold">Pipeline Rp 9,0 M</span>
          </div>
        </div>

        {/* 60D */}
        <div className="p-2.5 bg-neutral-950/80 border border-neutral-900 rounded-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono font-black text-xs text-amber-400 shrink-0">
              60D
            </div>
            <div>
              <span className="text-xs font-bold text-white block">
                {isId ? 'Bulan 2 (Nov): First Win & Achieve Perdana' : 'Month 2 (Nov): First Win & Initial Achievement'}
              </span>
              <span className="text-[11px] text-neutral-300 font-sans block leading-tight">
                Closing deal enterprise perdana (@ Rp 1,0 Miliar / 500 device), sukses membuktikan konversi komersial di November.
              </span>
            </div>
          </div>
          <div className="text-right font-mono shrink-0">
            <span className="text-sm font-extrabold text-emerald-400 block">
              <AnimatedCounter value="Rp 1,0 M" />
            </span>
            <span className="text-[9px] text-amber-400 font-bold">1 Deal Won (Nov)</span>
          </div>
        </div>

        {/* 90D */}
        <div className="p-2.5 bg-emerald-950/20 border border-emerald-900/50 rounded-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-emerald-900/60 border border-emerald-700 flex items-center justify-center font-mono font-black text-xs text-white shrink-0">
              90D
            </div>
            <div>
              <span className="text-xs font-bold text-white block">
                {isId ? 'Bulan 3 (Des): Akselerasi Q4 & Total 90D Rp 3,0 M' : 'Month 3 (Dec): Q4 Acceleration & 90D Total IDR 3.0B'}
              </span>
              <span className="text-[11px] text-emerald-100 font-sans block leading-tight">
                2 Deal Won closing (@ Rp 1,0M via Year-End Budget Flush), akselerasi growth Rp 2,0 M/bulan, mengunci total 90 hari (Q4 Penuh) Rp 3,0 Miliar kumulatif (3 Deals Won), pipeline Rp 20 M.
              </span>
            </div>
          </div>
          <div className="text-right font-mono shrink-0">
            <span className="text-sm font-extrabold text-emerald-400 block">
              <AnimatedCounter value="Rp 2,0 M" />
            </span>
            <span className="text-[9px] text-emerald-300 font-bold">
              <AnimatedCounter value="Total 90D Rp 3,0 M (3 Deals)" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
