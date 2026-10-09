import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { SLIDE_08_COPY } from './data';

interface PartnershipHeaderTabsProps {
  isId: boolean;
  currentTab: number;
  onTabChange: (index: number) => void;
}

export const PartnershipHeaderTabs: React.FC<PartnershipHeaderTabsProps> = ({
  isId,
  currentTab,
  onTabChange
}) => {
  return (
    <div className="shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/80 pb-2">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight">
            {isId 
              ? SLIDE_08_COPY.header.title.id 
              : SLIDE_08_COPY.header.title.en}
          </h2>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            {isId ? SLIDE_08_COPY.header.badge.id : SLIDE_08_COPY.header.badge.en}
          </span>
        </div>
        <p className="text-[11px] text-neutral-400 mt-0.5">
          {isId 
            ? SLIDE_08_COPY.header.subtitle.id 
            : SLIDE_08_COPY.header.subtitle.en}
        </p>
      </div>

      {/* View Switcher Tabs with Layout Morphing */}
      <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-neutral-900 border border-slate-300 dark:border-neutral-800 rounded-md">
        {SLIDE_08_COPY.header.tabs.map((tab, idx) => {
          const isActive = currentTab === idx;
          return (
            <button
              key={idx}
              onClick={() => onTabChange(idx)}
              data-active-tab={isActive ? 'true' : 'false'}
              className={`relative px-3 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                isActive
                  ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="slide08ActiveTabPill"
                  className="absolute inset-0 bg-rose-600 rounded-md shadow-xs pointer-events-none"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${isActive ? 'text-white !text-white font-bold' : ''}`}>
                {isId ? tab.id : tab.en}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
