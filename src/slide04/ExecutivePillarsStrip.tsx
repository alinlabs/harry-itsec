import React from 'react';
import { Users, ShieldCheck, Clock, Zap } from 'lucide-react';
import { EXECUTIVE_PILLARS } from './data';

interface ExecutivePillarsStripProps {
  isId: boolean;
}

export const ExecutivePillarsStrip: React.FC<ExecutivePillarsStripProps> = ({ isId }) => {
  const getIcon = (key: string) => {
    switch (key) {
      case 'who':
        return <Users className="w-3.5 h-3.5 text-rose-500" />;
      case 'why':
        return <ShieldCheck className="w-3.5 h-3.5 text-rose-500" />;
      case 'when':
        return <Clock className="w-3.5 h-3.5 text-rose-500" />;
      case 'how':
      default:
        return <Zap className="w-3.5 h-3.5 text-rose-500" />;
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-1 sm:my-1.5 shrink-0">
      {EXECUTIVE_PILLARS.map((pillar) => (
        <div
          key={pillar.key}
          className="p-2 sm:p-2.5 bg-[#0b0c12]/90 border border-neutral-800 rounded flex flex-col items-center justify-between text-center card-interactive-shimmer cursor-pointer"
        >
          <span className="text-[10px] font-mono text-rose-500 uppercase tracking-wider block font-bold flex items-center justify-center gap-1.5 text-center">
            {getIcon(pillar.key)}
            {isId ? pillar.tagId : pillar.tagEn}
          </span>
          <p className="text-xs text-white font-bold leading-snug mt-1 text-center truncate w-full">
            {isId ? pillar.titleId : pillar.titleEn}
          </p>
          <span className="text-[10px] font-mono text-neutral-400 mt-0.5 block text-center truncate w-full">
            {isId ? pillar.subtitleId : pillar.subtitleEn}
          </span>
        </div>
      ))}
    </div>
  );
};
