import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Slide06SalesMotionProps } from './types';
import { SalesMotionHeader } from './SalesMotionHeader';
import { StakeholderDecisionMatrix } from './StakeholderDecisionMatrix';
import { LifecyclePhasesTrack } from './LifecyclePhasesTrack';
import { PocPlaybookStepper } from './PocPlaybookStepper';
import { DealVelocityKpiCards } from './DealVelocityKpiCards';
import { ExecutiveMandateQuote } from './ExecutiveMandateQuote';

export const Slide06Container: React.FC<Slide06SalesMotionProps> = () => {
  const { language } = useLanguage();
  const isId = language === 'id';

  return (
    <div className="relative h-full w-full flex flex-col justify-start py-2.5 sm:py-3.5 lg:py-2.5 px-0 overflow-y-auto overflow-x-hidden scrollbar-thin font-sans">
      {/* Header Bar */}
      <SalesMotionHeader isId={isId} />

      {/* Main Unified Content Area */}
      <div className="py-2 grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-start">
        {/* LEFT COLUMN (5 Cols): 4 Stakeholder Decision Matrix */}
        <StakeholderDecisionMatrix isId={isId} />

        {/* RIGHT COLUMN (7 Cols): Lifecycle + PoC Stepper + KPI */}
        <div className="lg:col-span-7 flex flex-col justify-start space-y-2">
          {/* Top: 4 Consolidated Lifecycle Phases (14 Stages Condensed) */}
          <LifecyclePhasesTrack isId={isId} />

          {/* Middle: Zero-Click 5-Day Guided PoC Horizontal Stepper */}
          <PocPlaybookStepper isId={isId} />

          {/* Bottom: 3 Big Deal Velocity KPI Cards */}
          <DealVelocityKpiCards isId={isId} />
        </div>
      </div>

      {/* Bottom Mandate Bar */}
      <ExecutiveMandateQuote isId={isId} />
    </div>
  );
};
