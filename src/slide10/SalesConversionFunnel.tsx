import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { SLIDE_10_COPY } from './data';

interface SalesConversionFunnelProps {
  isId: boolean;
}

export const SalesConversionFunnel: React.FC<SalesConversionFunnelProps> = ({ isId }) => {
  return (
    <div className="p-2 bg-[#0e0f17] border border-neutral-800 rounded-lg flex flex-col justify-start space-y-1 shadow-xl">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1 mb-1 font-mono text-xs">
        <span className="text-white font-bold">
          {isId ? SLIDE_10_COPY.funnelHeader.id : SLIDE_10_COPY.funnelHeader.en}
        </span>
        <span className="text-emerald-400 font-bold text-[10px]">
          {SLIDE_10_COPY.funnelBadge}
        </span>
      </div>

      <div className="space-y-1 font-mono text-xs flex flex-col justify-start">
        {/* Stage 1 */}
        <div className="p-1.5 bg-neutral-950/80 border border-neutral-900 rounded space-y-0.5">
          <div className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-rose-950/80 border border-rose-800/80 text-rose-300 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                01
              </span>
              <span className="text-white font-bold">Target Leads Terkualifikasi</span>
            </div>
            <span className="font-bold text-white text-[11px] font-mono text-right shrink-0">
              <AnimatedCounter value="50 Akun" />
            </span>
          </div>
          <div className="w-full h-1 bg-neutral-900 rounded overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-slate-500 rounded"
            />
          </div>
        </div>

        {/* Stage 2 */}
        <div className="p-1.5 bg-neutral-950/80 border border-amber-900/40 rounded space-y-0.5">
          <div className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-amber-950/80 border border-amber-800/80 text-amber-300 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                02
              </span>
              <span className="text-white font-bold">5-Day Guided PoC</span>
            </div>
            <span className="font-bold text-amber-300 text-[11px] font-mono text-right shrink-0">
              <AnimatedCounter value="14 Sesi" /> (28%)
            </span>
          </div>
          <div className="w-full h-1 bg-neutral-900 rounded overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '28%' }}
              transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-amber-500 rounded"
            />
          </div>
        </div>

        {/* Stage 3 */}
        <div className="p-1.5 bg-neutral-950/80 border border-rose-900/40 rounded space-y-0.5">
          <div className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-rose-950/80 border border-rose-800/80 text-rose-300 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                03
              </span>
              <span className="text-white font-bold">Executive Proposal ARR</span>
            </div>
            <span className="font-bold text-rose-300 text-[11px] font-mono text-right shrink-0">
              <AnimatedCounter value="6–8 Proposal" /> (43%–57%)
            </span>
          </div>
          <div className="w-full h-1 bg-neutral-900 rounded overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '20%' }}
              transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-rose-500 rounded"
            />
          </div>
        </div>

        {/* Stage 4 */}
        <div className="p-1.5 bg-rose-950/30 border border-emerald-600/80 rounded space-y-0.5">
          <div className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                04
              </span>
              <span className="text-white font-black">Closed Won ARR (90 Hari)</span>
            </div>
            <span className="font-bold text-emerald-400 text-[11px] font-mono text-right shrink-0">
              <AnimatedCounter value="3 Won (Rp 3,0 M)" />
            </span>
          </div>
          <div className="w-full h-1 bg-neutral-900 rounded overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '20%' }}
              transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-emerald-400 rounded"
            />
          </div>
        </div>
      </div>

      <div className="pt-1 border-t border-neutral-900 text-[9.5px] font-mono text-neutral-400 flex items-center justify-between">
        <span>
          {isId ? SLIDE_10_COPY.funnelFooterNote.id : SLIDE_10_COPY.funnelFooterNote.en}
        </span>
        <span className="text-emerald-400 font-bold">
          {SLIDE_10_COPY.funnelFooterBadge}
        </span>
      </div>
    </div>
  );
};
