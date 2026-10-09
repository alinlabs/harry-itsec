import React from 'react';
import { motion } from 'motion/react';
import { PipelineActiveView } from './types';
import { SLIDE_05_COPY } from './data';

interface PipelineViewTabsProps {
  activeView: PipelineActiveView;
  onSelectViewIndex?: (index: number) => void;
  isId: boolean;
}

export const PipelineViewTabs: React.FC<PipelineViewTabsProps> = ({
  activeView,
  onSelectViewIndex,
  isId
}) => {
  return (
    <div className="shrink-0 mb-1 border-b border-neutral-800/80 pb-1.5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight">
            {isId ? SLIDE_05_COPY.header.id : SLIDE_05_COPY.header.en}
          </h2>
        </div>

        {/* View Tabs with Shared Layout Morphing Pill */}
        <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-neutral-900 border border-slate-300 dark:border-neutral-800 rounded-md">
          <button
            onClick={() => onSelectViewIndex && onSelectViewIndex(0)}
            data-active-tab={activeView === 'kanban' ? 'true' : 'false'}
            className={`relative px-3.5 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
              activeView === 'kanban'
                ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {activeView === 'kanban' && (
              <motion.span
                layoutId="slide05ActivePipelineTabPill"
                className="absolute inset-0 bg-rose-600 rounded-md shadow-xs pointer-events-none"
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30
                }}
              />
            )}
            <span className={`relative z-10 ${activeView === 'kanban' ? 'text-white !text-white font-bold' : ''}`}>
              {isId ? SLIDE_05_COPY.tabs.kanban.id : SLIDE_05_COPY.tabs.kanban.en}
            </span>
          </button>
          <button
            onClick={() => onSelectViewIndex && onSelectViewIndex(1)}
            data-active-tab={activeView === 'short_and_oneyear' ? 'true' : 'false'}
            className={`relative px-3.5 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
              activeView === 'short_and_oneyear'
                ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {activeView === 'short_and_oneyear' && (
              <motion.span
                layoutId="slide05ActivePipelineTabPill"
                className="absolute inset-0 bg-rose-600 rounded-md shadow-xs pointer-events-none"
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30
                }}
              />
            )}
            <span className={`relative z-10 ${activeView === 'short_and_oneyear' ? 'text-white !text-white font-bold' : ''}`}>
              {isId ? SLIDE_05_COPY.tabs.shortAndOneYear.id : SLIDE_05_COPY.tabs.shortAndOneYear.en}
            </span>
          </button>
          <button
            onClick={() => onSelectViewIndex && onSelectViewIndex(2)}
            data-active-tab={activeView === 'map_pipeline' ? 'true' : 'false'}
            className={`relative px-3.5 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
              activeView === 'map_pipeline'
                ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {activeView === 'map_pipeline' && (
              <motion.span
                layoutId="slide05ActivePipelineTabPill"
                className="absolute inset-0 bg-rose-600 rounded-md shadow-xs pointer-events-none"
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30
                }}
              />
            )}
            <span className={`relative z-10 ${activeView === 'map_pipeline' ? 'text-white !text-white font-bold' : ''}`}>
              {isId ? SLIDE_05_COPY.tabs.mapPipeline.id : SLIDE_05_COPY.tabs.mapPipeline.en}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
