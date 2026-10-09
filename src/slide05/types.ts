import { PipelineAccount, PipelineStageKey, PipelineStageConfig } from '../data/pipelineModelData';

export type { PipelineAccount, PipelineStageKey, PipelineStageConfig };

export interface Slide05AccountPipelineProps {
  activeViewIndex?: number;
  onViewIndexChange?: (index: number) => void;
}

export type PipelineActiveView = 'kanban' | 'short_and_oneyear' | 'map_pipeline';

export interface PipelineCalculatedMetrics {
  totalValueIdr: string;
  qualifiedValueIdr: string;
  activeOppsCount: number;
  wonCount: number;
  wonValueIdr: string;
  weightedValueIdr: string;
  coverageRatio: string;
}

export interface FunnelStepCard {
  step: string;
  title: string;
  metric: string;
  descId: string;
  descEn: string;
  footerLeft: string;
  footerRight: string;
  stepColorClass: string;
  stepBorderClass: string;
}
