export interface Slide07CommercializationProps {
  activeTabPosition?: number;
  onTabPositionChange?: (index: number) => void;
}

export type PricingTierLevel = 'entry' | 'flagship' | 'bespoke';

export interface PricingPackageFeature {
  label: string;
  isStrong?: boolean;
}

export interface PricingPackageItem {
  id: string;
  tierBadge: string;
  tierBadgeVariant: 'neutral' | 'emerald' | 'purple';
  isFlagship?: boolean;
  nodeRange: string;
  name: string;
  subtitle: string;
  priceDisplay: string;
  isAnimatedCounter?: boolean;
  priceSubtext: string;
  features: PricingPackageFeature[];
  footerNote: string;
}

export interface RevenuePillarItem {
  pillarNum: number;
  percentage: number;
  amountDisplay: string;
  title: string;
  description: string;
  colorScheme: 'rose' | 'amber' | 'sky';
}

export interface QuarterlyTrajectoryItem {
  quarter: string;
  amount: string;
  timelineSubtitle: string;
  isHighlighted?: boolean;
  isFinalScale?: boolean;
  spanColClass?: string;
}

export interface RetentionFlywheelStep {
  stepNum: number;
  badge: string;
  title: string;
  description: string;
  footerMetric: string;
  colorScheme: 'rose' | 'amber' | 'emerald';
}

export interface ExecutiveObjectionItem {
  objection: string;
  solution: string;
}
