import { TargetAccount, TargetFocusLevel } from '../data/targetAccounts';

export type { TargetAccount, TargetFocusLevel };

export interface Slide03TargetMarketMapProps {
  activeSectorIndex?: number;
  onSectorIndexChange?: (newIndex: number) => void;
}

export interface LevelBadgeInfo {
  labelId: string;
  labelEn: string;
  badgeClass: string;
  dotClass: string;
  colorHex: string;
}

export interface NodePosition {
  nodeX: number;
  nodeY: number;
}

export interface LevelCounts {
  all: number;
  FOCUS_PRIMARY: number;
  MEDIUM_PRIORITY: number;
  LEVEL_3_PROSPECT: number;
}
