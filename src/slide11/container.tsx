import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Slide11ClosingProps } from './types';
import { ClosingHeader } from './ClosingHeader';
import { QuotaTrajectoryArc } from './QuotaTrajectoryArc';
import { RegionalExpansionBridge } from './RegionalExpansionBridge';
import { ClosingExecutiveMandate } from './ClosingExecutiveMandate';
import { ClosingQuoteFooter } from './ClosingQuoteFooter';

export const Slide11Container: React.FC<Slide11ClosingProps> = ({ 
  onRestart, 
  isLocked = false 
}) => {
  const { language } = useLanguage();
  const isId = language === 'id';

  return (
    <div className="relative h-full w-full flex flex-col justify-start py-2.5 sm:py-3.5 lg:py-2.5 px-0 overflow-y-auto overflow-x-hidden scrollbar-thin font-sans">
      {/* Header Bar */}
      <ClosingHeader isId={isId} />

      {/* Main Visual Stage: 90-Day Execution Arc & Regional Scale + Closing Mandate */}
      <div className="py-2 grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-start">
        {/* Left Column (7 Cols): Trajectory Arc 30D / 60D / 90D & Jembatan Regional ASEAN */}
        <div className="lg:col-span-7 bg-[#0b0c12]/95 border border-neutral-800 p-3 rounded-lg flex flex-col justify-start space-y-2 shadow-xl">
          <QuotaTrajectoryArc isId={isId} />
          <RegionalExpansionBridge isId={isId} />
        </div>

        {/* Right Column (5 Cols): Closing Executive Mandate & Candidate Readiness */}
        <ClosingExecutiveMandate 
          isId={isId} 
          onRestart={onRestart} 
          isLocked={isLocked} 
        />
      </div>

      {/* Bottom Bar */}
      <ClosingQuoteFooter isId={isId} />
    </div>
  );
};
