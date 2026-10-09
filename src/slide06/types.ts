export interface Slide06SalesMotionProps {
  activeTabPosition?: number;
  onTabPositionChange?: (index: number) => void;
}

export type MeddpiccRole = 'CHAMPION' | 'ECONOMIC' | 'TECHNICAL' | 'GATEKEEPER';

export interface StakeholderRoleItem {
  id: string;
  badge: string;
  meddpiccRole: MeddpiccRole;
  title: string;
  focusId: string;
  focusEn: string;
  valueId: string;
  valueEn: string;
  badgeColorClass: string;
  hoverBorderClass: string;
}

export interface LifecyclePhaseItem {
  phase: string;
  dayRange: string;
  phaseColorClass: string;
  title: string;
  descId: string;
  descEn: string;
}

export interface PocStepItem {
  step: string;
  label: string;
  title: string;
  descId: string;
  descEn: string;
  checkmarkText: string;
  colorScheme: 'rose' | 'emerald' | 'sky';
  isBoldCheckmark?: boolean;
}

export interface DealVelocityMetricItem {
  id: string;
  labelId: string;
  labelEn: string;
  value: string;
  suffix?: string;
  valueColorClass: string;
  badgeTextId: string;
  badgeTextEn: string;
  badgeClass: string;
}
