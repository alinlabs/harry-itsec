import { SegmentPlot } from '../data/goToMarketData';

export type { SegmentPlot };

export type GtmTabKey = 'segmentation' | 'lead_generation';

export interface Slide04GoToMarketProps {
  activeTabPosition?: number;
  onTabPositionChange?: (newIndex: number) => void;
}

export interface ExecutivePillarItem {
  key: 'who' | 'why' | 'when' | 'how';
  tagId: string;
  tagEn: string;
  titleId: string;
  titleEn: string;
  subtitleId: string;
  subtitleEn: string;
}

export interface PrioritySectorCardData {
  id: string;
  titleId: string;
  titleEn: string;
  percentage: string;
  percentageNumber: number;
  colorTheme: 'rose' | 'sky' | 'emerald';
  chips: string[];
  focusId: string;
  focusEn: string;
  roles: string;
}

export interface PipelineStep {
  num: number;
  title: string;
  focus: string;
  tag: string;
  metric: string;
}

export interface ChannelMixCard {
  id: string;
  title: string;
  percent: number;
  duration: string;
  colorClass: string;
  barColor: string;
  dotColor: string;
  descId: string;
  descEn: string;
}
