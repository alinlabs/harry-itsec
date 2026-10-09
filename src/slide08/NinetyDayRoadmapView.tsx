import React from 'react';
import { Handshake, Check, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { ROADMAP_PHASES } from './data';

interface NinetyDayRoadmapViewProps {
  isId: boolean;
}

export const NinetyDayRoadmapView: React.FC<NinetyDayRoadmapViewProps> = ({ isId }) => {
  return (
    <motion.div
      key="tab2"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-start"
    >
      {/* SISI KIRI (7 COLS): ROADMAP ONBOARDING & TATA KELOLA DEAL REGISTRATION */}
      <div className="lg:col-span-7 bg-[#0b0c12]/95 border border-neutral-800 p-3 rounded-lg flex flex-col justify-start space-y-2.5 shadow-xl">
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1.5">
          <div className="flex items-center gap-2">
            <Handshake className="w-4 h-4 text-rose-500" />
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {isId ? 'Roadmap Eksekusi Kemitraan SI 90 Hari' : '90-Day SI Partnership Execution Roadmap'}
            </h3>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-semibold">TERUKUR & TERSTRUKTUR</span>
        </div>

        {/* 3 Onboarding Phases */}
        <div className="space-y-2">
          {ROADMAP_PHASES.map((phase) => (
            <div key={phase.phaseNumber} className="p-2.5 bg-neutral-950 border border-neutral-900 rounded space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className={`${phase.colorScheme.text} font-bold flex items-center gap-1.5`}>
                  <span className={`w-4 h-4 rounded-full ${phase.colorScheme.badgeBg} ${phase.colorScheme.badgeText} border ${phase.colorScheme.badgeBorder} flex items-center justify-center text-[9px]`}>
                    {phase.phaseNumber}
                  </span>
                  {isId ? phase.badgeTitleId : phase.badgeTitleEn}
                </span>
                <span className="text-neutral-400 text-[10px]">
                  {isId ? phase.monthId : phase.monthEn}
                </span>
              </div>
              <p className="text-[11px] text-neutral-300 leading-snug">
                {isId ? phase.descriptionId : phase.descriptionEn}
              </p>
              <div className="pt-1 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-400" />
                {isId ? phase.outputId : phase.outputEn}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SISI KANAN (5 COLS): PROTOKOL DEAL REGISTRATION & MATRIKS SEKTOR */}
      <div className="lg:col-span-5 bg-[#0e0f17] border border-neutral-800 p-3 rounded-lg flex flex-col justify-start space-y-2 shadow-xl">
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {isId ? 'Tata Kelola Kanal & Kebijakan Anti-Konflik' : 'Channel Governance & Anti-Conflict Policy'}
            </h3>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-semibold">60-HARI LOCK</span>
        </div>

        <div className="space-y-2 text-xs">
          {/* Deal Registration Policy */}
          <div className="p-2.5 bg-neutral-950 border border-neutral-900 rounded space-y-1">
            <span className="text-white font-bold block text-xs">1. Deal Registration Protection:</span>
            <p className="text-[11px] text-neutral-300 leading-snug">
              Mitra yang pertama kali mendaftarkan peluang prospek enterprise diverifikasi terlindungi selama 60 hari kalender. Mencegah perang diskon dan menjamin margin mitra tetap aman di 25% – 30%.
            </p>
          </div>

          {/* Rules of Engagement */}
          <div className="p-2.5 bg-neutral-950 border border-neutral-900 rounded space-y-1">
            <span className="text-white font-bold block text-xs">2. Peran Jelas (Rules of Engagement):</span>
            <p className="text-[11px] text-neutral-300 leading-snug">
              <strong className="text-rose-400">ITSEC Asia / Bronyx:</strong> Memimpin arsitektur keamanan, demo eksploitasi data nyata, dan supervisi PoC 5 hari.<br />
              <strong className="text-sky-400">Mitra SI:</strong> Memimpin hubungan kontrak pengadaan, master service agreement, dan penagihan lokal.
            </p>
          </div>

          {/* Target Revenue Contribution */}
          <div className="p-2.5 bg-neutral-950 border border-emerald-900/60 rounded flex items-center justify-between">
            <div>
              <span className="text-[10px] text-neutral-400 uppercase font-mono block">Target Kontribusi Pipeline Kanal</span>
              <span className="text-base font-black text-emerald-400">25% – 30% dari Total Pipeline</span>
              <span className="text-[9.5px] text-neutral-300 block">Setara Rp 5,0 Miliar – Rp 6,0 Miliar ARR</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400 font-bold font-mono text-xs">
              30%
            </div>
          </div>
        </div>

        <div className="pt-1.5 border-t border-neutral-800 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
          <span>Audit Kepatuhan Rutin Tiap Kuartal</span>
          <span className="text-emerald-400 font-bold">ZERO TOLERANCE COMPETITORS</span>
        </div>
      </div>
    </motion.div>
  );
};
