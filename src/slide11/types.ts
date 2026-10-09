export interface Slide11ClosingProps {
  onRestart: () => void;
  isLocked?: boolean;
}

export interface ExecutionTrajectoryCard {
  badge: string;
  badgeColorClass: string;
  titleId: string;
  titleEn: string;
  descId: string;
  descEn: string;
  counterValue: string;
  subCounterText: string;
  subCounterColorClass: string;
  cardBgClass?: string;
  cardBorderClass?: string;
  badgeBoxBgClass?: string;
  badgeBoxBorderClass?: string;
  descTextColorClass?: string;
}

export interface RegionalExpansionStage {
  step: string;
  title: string;
  sub: string;
  stepColorClass: string;
  subColorClass?: string;
}

export interface ExecutiveMandateReason {
  title: string;
  desc: string;
}
