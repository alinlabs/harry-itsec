import { PartnerCandidate } from '../data/partnershipData';

export interface Slide08PartnershipsProps {
  activeTabPosition?: number;
  onTabPositionChange?: (index: number) => void;
}

export type PartnershipTabKey = 'pillars_margins' | 'verified_matrix' | 'execution_roadmap';

export type PartnerCategoryFilter = 'ALL' | 'TIER1_SI' | 'TIER2_SI' | 'DISTRIBUTOR' | 'CLOUD_ADVISORY';

export interface CategoryFilterOption {
  id: PartnerCategoryFilter;
  labelId: string;
  labelEn: string;
}

export interface RoadmapPhaseItem {
  phaseNumber: number;
  badgeTitleId: string;
  badgeTitleEn: string;
  monthId: string;
  monthEn: string;
  descriptionId: string;
  descriptionEn: string;
  outputId: string;
  outputEn: string;
  colorScheme: {
    text: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
  };
}
