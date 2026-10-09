import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  INITIAL_PIPELINE_ACCOUNTS, 
  PipelineAccount, 
  PipelineStageKey 
} from '../data/pipelineModelData';
import { useLanguage } from '../context/LanguageContext';
import { Slide05AccountPipelineProps, PipelineActiveView } from './types';
import { SLIDE_05_COPY } from './data';
import { getStageLabelMap, calculatePipelineMetrics } from './utils';
import { PipelineViewTabs } from './PipelineViewTabs';
import { KeyPipelineMetricsStrip } from './KeyPipelineMetricsStrip';
import { PipelineKanbanBoard } from './PipelineKanbanBoard';
import { FunnelAndHorizonView } from './FunnelAndHorizonView';
import { MapPipelineView } from './MapPipelineView';

export const Slide05Container: React.FC<Slide05AccountPipelineProps> = ({
  activeViewIndex = 0,
  onViewIndexChange
}) => {
  const { language } = useLanguage();
  const isId = language === 'id';

  const [accounts, setAccounts] = useState<PipelineAccount[]>(INITIAL_PIPELINE_ACCOUNTS);
  const [selectedAccountId, setSelectedAccountId] = useState<string>('bca');
  const [draggedAccountId, setDraggedAccountId] = useState<string | null>(null);

  const activeView: PipelineActiveView = 
    activeViewIndex === 1 ? 'short_and_oneyear' : activeViewIndex === 2 ? 'map_pipeline' : 'kanban';

  const activeAccount = useMemo(() => {
    return accounts.find(a => a.id === selectedAccountId) || accounts[0];
  }, [accounts, selectedAccountId]);

  const metrics = useMemo(() => {
    return calculatePipelineMetrics(accounts, isId);
  }, [accounts, isId]);

  const stageLabelMap = useMemo(() => {
    return getStageLabelMap(isId);
  }, [isId]);

  // Handle stage transition
  const handleMoveStage = (accountId: string, newStage: PipelineStageKey) => {
    setAccounts(prev => prev.map(acc => {
      if (acc.id === accountId) {
        return { ...acc, stage: newStage };
      }
      return acc;
    }));
  };

  // Drag & drop handlers
  const handleDragStart = (e: React.DragEvent, accId: string) => {
    e.dataTransfer.setData('text/plain', accId);
    setDraggedAccountId(accId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetStage: PipelineStageKey) => {
    e.preventDefault();
    const accId = e.dataTransfer.getData('text/plain') || draggedAccountId;
    if (accId) {
      handleMoveStage(accId, targetStage);
      setSelectedAccountId(accId);
    }
    setDraggedAccountId(null);
  };

  return (
    <div className="relative h-full w-full flex flex-col justify-start py-2.5 sm:py-3.5 lg:py-2.5 px-0 overflow-y-auto overflow-x-hidden scrollbar-thin font-sans">
      {/* Header & View Tabs */}
      <PipelineViewTabs
        activeView={activeView}
        onSelectViewIndex={onViewIndexChange}
        isId={isId}
      />

      {/* Dynamic Key Pipeline Metrics Strip */}
      <KeyPipelineMetricsStrip
        metrics={metrics}
        accountsCount={accounts.length}
        isId={isId}
      />

      {/* Main Interactive Views */}
      <div className="py-1 flex flex-col justify-start shrink-0">
        <AnimatePresence mode="wait" initial={false}>
          {activeView === 'kanban' && (
            <motion.div
              key="pipeline-view-kanban"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <PipelineKanbanBoard
                accounts={accounts}
                selectedAccountId={selectedAccountId}
                activeAccount={activeAccount}
                stageLabelMap={stageLabelMap}
                onSelectAccount={setSelectedAccountId}
                onMoveStage={handleMoveStage}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                isId={isId}
              />
            </motion.div>
          )}

          {activeView === 'short_and_oneyear' && (
            <motion.div
              key="pipeline-view-short-and-oneyear"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <FunnelAndHorizonView isId={isId} />
            </motion.div>
          )}

          {activeView === 'map_pipeline' && (
            <motion.div
              key="pipeline-view-map"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <MapPipelineView
                accounts={accounts}
                selectedAccountId={selectedAccountId}
                activeAccount={activeAccount}
                stageLabelMap={stageLabelMap}
                onSelectAccount={setSelectedAccountId}
                onOpenInKanban={() => onViewIndexChange && onViewIndexChange(0)}
                isId={isId}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Bar: Action & Principle */}
      <div className="mt-auto pt-1.5 shrink-0 text-center text-xs text-neutral-300">
        <p className="max-w-4xl mx-auto leading-relaxed">
          {isId ? SLIDE_05_COPY.bottomStatement.id : SLIDE_05_COPY.bottomStatement.en}
        </p>
      </div>
    </div>
  );
};
