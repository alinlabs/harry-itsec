import React from 'react';
import { motion } from 'motion/react';
import { PartnerCandidate } from '../data/partnershipData';
import { PartnerAuditMetricsStrip } from './PartnerAuditMetricsStrip';
import { PartnerFilterToolbar } from './PartnerFilterToolbar';
import { PartnerCardGrid } from './PartnerCardGrid';

interface VerifiedPartnerMatrixViewProps {
  isId: boolean;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredPartners: PartnerCandidate[];
  onSelectPartner: (partner: PartnerCandidate) => void;
}

export const VerifiedPartnerMatrixView: React.FC<VerifiedPartnerMatrixViewProps> = ({
  isId,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  filteredPartners,
  onSelectPartner
}) => {
  return (
    <motion.div
      key="tab1"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="space-y-2"
    >
      {/* Executive Summary Metrics Banner */}
      <PartnerAuditMetricsStrip />

      {/* Controls Bar: Filter & Search */}
      <PartnerFilterToolbar
        isId={isId}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />

      {/* Partners Grid */}
      <PartnerCardGrid
        partners={filteredPartners}
        onSelectPartner={onSelectPartner}
      />
    </motion.div>
  );
};
