export interface Slide09NinetyDayExecutionProps {
  activeTabPosition?: number;
  onTabPositionChange?: (index: number) => void;
}

export interface MilestoneBullet {
  text: string;
  isBoldWhite?: boolean;
}

export interface ExecutionMilestoneTheme {
  containerBorder: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
  subtextColor: string;
  counterColor: string;
  subtextDetailColor: string;
  focusTitleColor: string;
  checkIconColor: string;
  footerStatusColor: string;
  footerBadgeColor: string;
}

export interface ExecutionMilestoneMonth {
  id: string;
  monthNumber: number;
  tagId: string;
  tagEn: string;
  subtitle: string;
  targetRevenueLabelId: string;
  targetRevenueLabelEn: string;
  targetRevenueValue: string;
  revenueSubtext: string;
  focusKeyActionTitle: string;
  focusKeyActionDesc: string;
  bullets: MilestoneBullet[];
  footerStatus: string;
  footerBadge: string;
  theme: ExecutionMilestoneTheme;
}

export interface ExecutionScorecardItem {
  id: string;
  labelId: string;
  labelEn: string;
  value: string;
  badge: string;
  badgeStyle: string;
  valueColor: string;
}
