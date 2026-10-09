import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Slide07CommercializationProps } from './types';
import { CommercializationHeader } from './CommercializationHeader';
import { PricingPackagesGrid } from './PricingPackagesGrid';
import { QuotaAllocationPillars } from './QuotaAllocationPillars';
import { QuarterlyTrajectoryCard } from './QuarterlyTrajectoryCard';
import { RetentionFlywheelCard } from './RetentionFlywheelCard';
import { ExecutiveObjectionsCard } from './ExecutiveObjectionsCard';
import { CommercializationQuote } from './CommercializationQuote';

/**
 * Slide07Container (Bab 07)
 * Orchestrates layout and language state for Revenue Architecture & Commercialization.
 */
export const Slide07Container: React.FC<Slide07CommercializationProps> = () => {
  const { language } = useLanguage();
  const isId = language === 'id';

  return (
    <div className="relative h-full w-full flex flex-col justify-start py-2.5 sm:py-3.5 lg:py-2.5 px-0 overflow-y-auto overflow-x-hidden scrollbar-thin font-sans">
      {/* Header Bar */}
      <CommercializationHeader isId={isId} />

      {/* Main Unified Content Area (Fills upper space snugly) */}
      <div className="py-2 grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-start">
        {/* LEFT COLUMN (6 Cols): Tiering Paket Komersial & Formula Kuota Rp 1M */}
        <div className="lg:col-span-6 flex flex-col justify-start space-y-2">
          <PricingPackagesGrid />
          <QuotaAllocationPillars isId={isId} />
        </div>

        {/* RIGHT COLUMN (6 Cols): Trajektori Pertumbuhan Kuartal (Q4 Nov-Des sd Q4 Tahun Depan) */}
        <div className="lg:col-span-6 flex flex-col justify-start space-y-2">
          <QuarterlyTrajectoryCard isId={isId} />
          <RetentionFlywheelCard isId={isId} />
          <ExecutiveObjectionsCard isId={isId} />
        </div>
      </div>

      {/* Bottom Bar */}
      <CommercializationQuote isId={isId} />
    </div>
  );
};
