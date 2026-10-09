import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { 
  PARTNER_ECOSYSTEM_CANDIDATES, 
  PartnerCandidate 
} from '../data/partnershipData';
import { Slide08PartnershipsProps } from './types';
import { PARTNERSHIP_TAB_KEYS } from './data';
import { filterPartners } from './utils';
import { PartnershipHeaderTabs } from './PartnershipHeaderTabs';
import { PillarsAndMarginsView } from './PillarsAndMarginsView';
import { VerifiedPartnerMatrixView } from './VerifiedPartnerMatrixView';
import { NinetyDayRoadmapView } from './NinetyDayRoadmapView';
import { PartnerDetailModal } from './PartnerDetailModal';
import { PartnershipSpeakingQuote } from './PartnershipSpeakingQuote';

export const Slide08Container: React.FC<Slide08PartnershipsProps> = ({
  activeTabPosition = 0,
  onTabPositionChange
}) => {
  const { language } = useLanguage();
  const isId = language === 'id';

  const currentTab = Math.min(Math.max(activeTabPosition, 0), PARTNERSHIP_TAB_KEYS.length - 1);

  // States for Tab 1 (Verified Partner Matrix)
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePartnerModal, setActivePartnerModal] = useState<PartnerCandidate | null>(null);

  const handleTabChange = (index: number) => {
    if (onTabPositionChange) {
      onTabPositionChange(index);
    }
  };

  // Filtered partners for Tab 1 (Verified Partner Matrix)
  const filteredPartners = filterPartners(
    PARTNER_ECOSYSTEM_CANDIDATES,
    selectedCategory,
    searchQuery
  );

  return (
    <div className="relative h-full w-full flex flex-col justify-start py-2 sm:py-2.5 px-0 overflow-y-auto overflow-x-hidden scrollbar-thin font-sans">
      {/* Header Bar with Sub-Tab Switcher */}
      <PartnershipHeaderTabs
        isId={isId}
        currentTab={currentTab}
        onTabChange={handleTabChange}
      />

      {/* Main Dynamic Content Area */}
      <div className="py-2 flex-1">
        <AnimatePresence mode="wait">
          {/* TAB 0: PILAR KANAL & STRUKTUR MARGIN KOMERSIAL */}
          {currentTab === 0 && (
            <PillarsAndMarginsView isId={isId} />
          )}

          {/* TAB 1: MATRIKS EVALUASI SI & MITRA TARGET */}
          {currentTab === 1 && (
            <VerifiedPartnerMatrixView
              isId={isId}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filteredPartners={filteredPartners}
              onSelectPartner={setActivePartnerModal}
            />
          )}

          {/* TAB 2: REKOMENDASI KOLABORASI 90 HARI & TATA KELOLA KANAL */}
          {currentTab === 2 && (
            <NinetyDayRoadmapView isId={isId} />
          )}
        </AnimatePresence>
      </div>

      {/* Partner Detail Modal */}
      <PartnerDetailModal
        partner={activePartnerModal}
        onClose={() => setActivePartnerModal(null)}
      />

      {/* Bottom Bar: Speaking Quote */}
      <PartnershipSpeakingQuote isId={isId} />
    </div>
  );
};
