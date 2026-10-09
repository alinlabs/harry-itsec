import React, { useState, useMemo, useEffect } from 'react';
import { Slide03TargetMarketMapProps, TargetAccount, TargetFocusLevel } from './types';
import { 
  TARGET_ACCOUNT_UNIVERSE, 
  SECTOR_FILTER_OPTIONS 
} from './data';
import { 
  filterAccountsBySector, 
  calculateLevelCounts 
} from './utils';
import { useLanguage } from '../context/LanguageContext';
import { SectorTabNav } from './SectorTabNav';
import { MindMapCanvas } from './MindMapCanvas';
import { CompanyListPanel } from './CompanyListPanel';
import { CompanyDossierModal } from './CompanyDossierModal';

export const Slide03Container: React.FC<Slide03TargetMarketMapProps> = ({
  activeSectorIndex = 0,
  onSectorIndexChange
}) => {
  const { language } = useLanguage();
  const isId = language === 'id';

  const selectedFilter = SECTOR_FILTER_OPTIONS[activeSectorIndex] || SECTOR_FILTER_OPTIONS[0];

  const [levelFilter, setLevelFilter] = useState<'ALL' | TargetFocusLevel>('ALL');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [expandedCompanyId, setExpandedCompanyId] = useState<string | null>(null);
  const [modalCompany, setModalCompany] = useState<TargetAccount | null>(null);

  // Reset internal filters when sector tab changes
  useEffect(() => {
    setLevelFilter('ALL');
    setHoveredNodeId(null);
    setExpandedCompanyId(null);
    setModalCompany(null);
  }, [activeSectorIndex]);

  const handleSelectFilter = (filter: string) => {
    const idx = SECTOR_FILTER_OPTIONS.indexOf(filter as any);
    if (idx !== -1 && onSectorIndexChange) {
      onSectorIndexChange(idx);
    }
  };

  const handleToggleLevelFilter = (target: TargetFocusLevel) => {
    setLevelFilter(prev => (prev === target ? 'ALL' : target));
  };

  const handleCanvasClick = () => {
    setLevelFilter('ALL');
    setExpandedCompanyId(null);
    setHoveredNodeId(null);
  };

  const handleSelectCompany = (account: TargetAccount) => {
    if (levelFilter !== 'ALL' && account.targetLevel !== levelFilter) {
      setLevelFilter('ALL');
    }
    setExpandedCompanyId(prev => (prev === account.id ? null : account.id));
    setHoveredNodeId(account.id);

    setTimeout(() => {
      const cardEl = document.getElementById(`company-card-${account.id}`);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 60);
  };

  // Sector Filter logic
  const filteredAccounts = useMemo(() => {
    return filterAccountsBySector(TARGET_ACCOUNT_UNIVERSE, selectedFilter);
  }, [selectedFilter]);

  // Display up to 24 accounts on radial map for full level representation
  const displayedAccounts = useMemo(() => {
    return filteredAccounts.slice(0, 24);
  }, [filteredAccounts]);

  // List accounts for right-hand panel (filtered by levelFilter if active)
  const listAccounts = useMemo(() => {
    if (levelFilter === 'ALL') return filteredAccounts;
    return filteredAccounts.filter(a => a.targetLevel === levelFilter);
  }, [filteredAccounts, levelFilter]);

  // Level groupings for radial map orbits
  const focusAccounts = useMemo(
    () => displayedAccounts.filter(a => a.targetLevel === 'FOCUS_PRIMARY'),
    [displayedAccounts]
  );
  const strategicAccounts = useMemo(
    () => displayedAccounts.filter(a => a.targetLevel === 'MEDIUM_PRIORITY'),
    [displayedAccounts]
  );
  const prospectAccounts = useMemo(
    () => displayedAccounts.filter(a => a.targetLevel === 'LEVEL_3_PROSPECT'),
    [displayedAccounts]
  );

  return (
    <div className="relative h-full w-full flex flex-col justify-between py-2.5 sm:py-4 lg:py-3 px-0 font-sans overflow-y-auto overflow-x-hidden scrollbar-thin">
      {/* Header & Sector Tabs */}
      <SectorTabNav
        activeSectorIndex={activeSectorIndex}
        selectedFilter={selectedFilter}
        onSelectFilter={handleSelectFilter}
        isId={isId}
      />

      {/* Main Visual Stage: Radial Mind Map (Left 7 Cols) + Company List (Right 5 Cols) */}
      <div className="flex-1 min-h-0 py-1 grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
        <MindMapCanvas
          selectedFilter={selectedFilter}
          activeSectorIndex={activeSectorIndex}
          displayedAccounts={displayedAccounts}
          focusAccounts={focusAccounts}
          strategicAccounts={strategicAccounts}
          prospectAccounts={prospectAccounts}
          levelFilter={levelFilter}
          hoveredNodeId={hoveredNodeId}
          expandedCompanyId={expandedCompanyId}
          onCanvasClick={handleCanvasClick}
          onSelectCompany={handleSelectCompany}
          onHoverNode={setHoveredNodeId}
          isId={isId}
          language={language}
        />

        <CompanyListPanel
          listAccounts={listAccounts}
          levelFilter={levelFilter}
          onToggleLevelFilter={handleToggleLevelFilter}
          hoveredNodeId={hoveredNodeId}
          expandedCompanyId={expandedCompanyId}
          onSelectCompany={handleSelectCompany}
          onHoverNode={setHoveredNodeId}
          onOpenModal={setModalCompany}
          isId={isId}
        />
      </div>

      {/* Company Dossier Detail Modal */}
      <CompanyDossierModal
        modalCompany={modalCompany}
        onClose={() => setModalCompany(null)}
        isId={isId}
      />
    </div>
  );
};
