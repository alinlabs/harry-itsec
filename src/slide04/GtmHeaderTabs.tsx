import React from 'react';
import { motion } from 'motion/react';
import { GtmTabKey } from './types';
import { SLIDE_04_COPY } from './data';

interface GtmHeaderTabsProps {
  activeTab: GtmTabKey;
  onTabClick: (index: number) => void;
  isId: boolean;
}

export const GtmHeaderTabs: React.FC<GtmHeaderTabsProps> = ({
  activeTab,
  onTabClick,
  isId
}) => {
  return (
    <div className="space-y-0.5 shrink-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {isId ? SLIDE_04_COPY.header.titleId : SLIDE_04_COPY.header.titleEn}
          </h2>
        </div>

        {/* Module Switcher Tabs (Shared Layout Morphing Pill) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-neutral-900 border border-slate-300 dark:border-neutral-800 rounded-md">
            <button
              onClick={() => onTabClick(0)}
              data-active-tab={activeTab === 'segmentation' ? 'true' : 'false'}
              className={`relative px-3 py-1 text-xs font-mono rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'segmentation'
                  ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {activeTab === 'segmentation' && (
                <motion.span
                  layoutId="slide04ActiveGtmTabPill"
                  className="absolute inset-0 bg-rose-600 rounded-md shadow-xs pointer-events-none"
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30
                  }}
                />
              )}
              <span className={`relative z-10 ${activeTab === 'segmentation' ? 'text-white !text-white font-bold' : ''}`}>
                {isId ? SLIDE_04_COPY.header.tab1Id : SLIDE_04_COPY.header.tab1En}
              </span>
            </button>
            <button
              onClick={() => onTabClick(1)}
              data-active-tab={activeTab === 'lead_generation' ? 'true' : 'false'}
              className={`relative px-3 py-1 text-xs font-mono rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'lead_generation'
                  ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {activeTab === 'lead_generation' && (
                <motion.span
                  layoutId="slide04ActiveGtmTabPill"
                  className="absolute inset-0 bg-rose-600 rounded-md shadow-xs pointer-events-none"
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30
                  }}
                />
              )}
              <span className={`relative z-10 ${activeTab === 'lead_generation' ? 'text-white !text-white font-bold' : ''}`}>
                {isId ? SLIDE_04_COPY.header.tab2Id : SLIDE_04_COPY.header.tab2En}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
