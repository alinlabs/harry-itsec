import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ExecutionMilestoneMonth } from './types';
import { getMilestoneTag, getTargetRevenueLabel } from './utils';

interface MonthMilestoneCardProps {
  milestone: ExecutionMilestoneMonth;
  isId: boolean;
}

export const MonthMilestoneCard: React.FC<MonthMilestoneCardProps> = ({
  milestone,
  isId,
}) => {
  const { theme } = milestone;
  const isMonth1 = milestone.monthNumber === 1;
  const isMonth3 = milestone.monthNumber === 3;

  return (
    <div
      className={`p-3 bg-[#0b0c12]/95 ${theme.containerBorder} rounded-lg flex flex-col justify-start space-y-2 shadow-xl ${
        isMonth3 ? 'relative' : ''
      }`}
    >
      <div className={isMonth1 ? 'space-y-2' : 'space-y-1.5'}>
        <div
          className={`flex items-center justify-between border-b ${
            isMonth3 ? 'border-emerald-900/60' : 'border-neutral-800/80'
          } ${isMonth1 ? 'pb-1.5' : 'pb-1'} font-mono text-xs`}
        >
          <span
            className={`px-2 py-0.5 rounded ${theme.tagBg} ${theme.tagText} border ${theme.tagBorder} font-bold`}
          >
            {getMilestoneTag(milestone, isId)}
          </span>
          <span className={theme.subtextColor}>{milestone.subtitle}</span>
        </div>

        <div>
          <span className="text-[10px] font-mono text-neutral-400 block uppercase">
            {getTargetRevenueLabel(milestone, isId)}
          </span>
          <span
            className={`text-xl font-black ${theme.counterColor} font-mono block`}
          >
            <AnimatedCounter value={milestone.targetRevenueValue} />
          </span>
          <span className={theme.subtextDetailColor}>
            {milestone.revenueSubtext}
          </span>
        </div>

        <div
          className={`space-y-1.5 pt-1 border-t ${
            isMonth3 ? 'border-neutral-800' : 'border-neutral-900'
          } text-xs`}
        >
          <div className="p-2 bg-neutral-950/80 border border-neutral-900 rounded space-y-0.5">
            <span
              className={`text-[10px] font-mono ${theme.focusTitleColor} font-bold block`}
            >
              {milestone.focusKeyActionTitle}
            </span>
            <p className="text-[11px] text-neutral-200 leading-snug">
              {milestone.focusKeyActionDesc}
            </p>
          </div>

          <div className="space-y-1 text-[11px] text-neutral-300 font-mono pt-0.5">
            {milestone.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2
                  className={`w-3.5 h-3.5 ${theme.checkIconColor} shrink-0`}
                />
                <span
                  className={bullet.isBoldWhite ? 'text-white font-bold' : ''}
                >
                  {bullet.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${isMonth1 ? 'pt-2' : 'pt-1.5'} border-t ${
          isMonth3 ? 'border-neutral-800' : 'border-neutral-900'
        } text-[10px] font-mono ${theme.footerStatusColor} flex items-center justify-between`}
      >
        <span>{milestone.footerStatus}</span>
        <span className={theme.footerBadgeColor}>{milestone.footerBadge}</span>
      </div>
    </div>
  );
};
