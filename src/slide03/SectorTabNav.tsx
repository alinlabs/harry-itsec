import React from 'react';
import { motion } from 'motion/react';
import { SECTOR_FILTER_OPTIONS, FILTER_DISPLAY_MAP, SLIDE_03_COPY } from './data';

interface SectorTabNavProps {
  activeSectorIndex: number;
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
  isId: boolean;
}

export const SectorTabNav: React.FC<SectorTabNavProps> = ({
  activeSectorIndex,
  selectedFilter,
  onSelectFilter,
  isId
}) => {
  return (
    <div className="space-y-0.5 mb-1 shrink-0">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {isId ? SLIDE_03_COPY.title.id : SLIDE_03_COPY.title.en}
          </h2>
        </div>

        {/* Sector Tabs aligned on the right with the title (Shared Layout Morphing Pill) */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none shrink-0 p-1 bg-slate-200/70 dark:bg-neutral-900 border border-slate-300 dark:border-neutral-800 rounded-md">
          {SECTOR_FILTER_OPTIONS.map((filter, idx) => {
            const isSelected = activeSectorIndex === idx || selectedFilter === filter;
            const displayLabel = FILTER_DISPLAY_MAP[filter] 
              ? (isId ? FILTER_DISPLAY_MAP[filter].id : FILTER_DISPLAY_MAP[filter].en)
              : filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => onSelectFilter(filter)}
                data-active-tab={isSelected ? 'true' : 'false'}
                className={`relative px-3 py-1 text-xs rounded-md transition-colors font-mono whitespace-nowrap cursor-pointer btn-interactive ${
                  isSelected
                    ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs'
                    : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="slide03ActiveSectorTabPill"
                    className="absolute inset-0 bg-rose-600 rounded-md shadow-xs pointer-events-none"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30
                    }}
                  />
                )}
                <span className={`relative z-10 ${isSelected ? 'text-white !text-white font-bold' : ''}`}>
                  {displayLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
