import React from 'react';
import { Shield, Target, TrendingUp } from 'lucide-react';

interface StrategicPillarsCardProps {
  isId: boolean;
}

export const StrategicPillarsCard: React.FC<StrategicPillarsCardProps> = ({ isId }) => {
  return (
    <div className="p-3.5 sm:p-4 bg-[#0b0c12]/90 border border-neutral-800/90 rounded-xl shadow-lg space-y-2.5 text-xs card-interactive-shimmer cursor-pointer">
      <div className="flex items-center justify-between text-neutral-300">
        <span className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-rose-500" />
          {isId ? 'Diferensiasi Teknologi' : 'Core Differentiation'}
        </span>
        <span className="text-neutral-400 font-mono text-right text-[11px]">
          Deteksi Otonom Celah Kebocoran Data
        </span>
      </div>
      <div className="flex items-center justify-between text-neutral-300">
        <span className="flex items-center gap-2">
          <Target className="w-3.5 h-3.5 text-rose-500" />
          {isId ? 'Fokus Sektor Utama' : 'Target Sectors'}
        </span>
        <span className="text-neutral-400 font-mono text-right text-[11px]">
          {isId ? 'Perbankan, BUMN & Infrastruktur Kritis' : 'Banking, SOEs & Critical Infrastructure'}
        </span>
      </div>
      <div className="flex items-center justify-between text-neutral-300">
        <span className="flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-rose-500" />
          {isId ? 'Kepatuhan Regulasi' : 'Regulatory Mandate'}
        </span>
        <span className="text-neutral-400 font-mono text-[11px]">
          {isId ? 'UU PDP, POJK 29/2022 & PP 71' : 'UU PDP, POJK 29/2022 & PP 71'}
        </span>
      </div>
    </div>
  );
};
