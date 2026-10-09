import { ExecutionMilestoneMonth, ExecutionScorecardItem } from './types';

export const getMilestoneTag = (milestone: ExecutionMilestoneMonth, isId: boolean): string => {
  return isId ? milestone.tagId : milestone.tagEn;
};

export const getTargetRevenueLabel = (milestone: ExecutionMilestoneMonth, isId: boolean): string => {
  return isId ? milestone.targetRevenueLabelId : milestone.targetRevenueLabelEn;
};

export const getScorecardLabel = (scorecard: ExecutionScorecardItem, isId: boolean): string => {
  return isId ? scorecard.labelId : scorecard.labelEn;
};
