export interface Slide10KPIControlTowerProps {
  activeTabPosition?: number;
  onTabPositionChange?: (index: number) => void;
}

export interface WeekTrajectoryPoint {
  w: number;
  val: number;
}

export interface HorizonQuarterIndicator {
  weeks: string;
  labelId: string;
  labelEn: string;
  colorClass: string;
}

export interface TrajectoryMetricStripItem {
  label: string;
  value: string;
  valueColorClass: string;
}

export interface FunnelStageItem {
  id: string;
  title: string;
  counterValue: string;
  suffix?: string;
  barWidth: string;
  barColorClass: string;
  badgeBgClass: string;
  badgeBorderClass: string;
  badgeTextClass: string;
  valueTextClass: string;
  isBoldTitle?: boolean;
}

export interface SectorBreakdownItem {
  title: string;
  percentageText: string;
  valueText: string;
  barWidth: string;
  barColorClass: string;
  textColorClass: string;
}

export interface PipelineRiskItem {
  id: number;
  title: string;
  badge: string;
  mitigation: string;
}
