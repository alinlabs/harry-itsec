import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Slide09NinetyDayExecutionProps } from './types';
import { ExecutionHeader } from './ExecutionHeader';
import { ExecutionTriptychView } from './ExecutionTriptychView';
import { ExecutionScorecardStrip } from './ExecutionScorecardStrip';
import { ExecutionQuoteFooter } from './ExecutionQuoteFooter';

export const Slide09Container: React.FC<Slide09NinetyDayExecutionProps> = () => {
  const { language } = useLanguage();
  const isId = language === 'id';

  return (
    <div className="relative h-full w-full flex flex-col justify-start py-2.5 sm:py-3.5 lg:py-2.5 px-0 overflow-y-auto overflow-x-hidden scrollbar-thin font-sans">
      {/* Header Bar */}
      <ExecutionHeader isId={isId} />

      {/* Main Single Unified Stage: Triptych 3 Kolom Horizon + Bilah Bawah Scorecard */}
      <div className="py-2 flex flex-col justify-start space-y-2">
        <ExecutionTriptychView isId={isId} />
        <ExecutionScorecardStrip isId={isId} />
      </div>

      {/* Bottom Bar */}
      <ExecutionQuoteFooter isId={isId} />
    </div>
  );
};
