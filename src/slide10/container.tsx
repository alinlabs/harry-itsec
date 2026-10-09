import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Slide10KPIControlTowerProps } from './types';
import { ControlTowerHeader } from './ControlTowerHeader';
import { PipelineTrajectoryChart } from './PipelineTrajectoryChart';
import { SalesConversionFunnel } from './SalesConversionFunnel';
import { SectorPipelineBreakdown } from './SectorPipelineBreakdown';
import { PipelineRiskMatrix } from './PipelineRiskMatrix';
import { ControlTowerQuoteFooter } from './ControlTowerQuoteFooter';

export const Slide10Container: React.FC<Slide10KPIControlTowerProps> = () => {
  const { language } = useLanguage();
  const isId = language === 'id';

  return (
    <div className="relative h-full w-full flex flex-col justify-start py-2.5 sm:py-3.5 lg:py-2.5 px-0 overflow-y-auto overflow-x-hidden scrollbar-thin font-sans">
      {/* Header Bar */}
      <ControlTowerHeader isId={isId} />

      {/* Main Unified Content Stage (Single Unified Screen - 2 Columns, Fills upper space) */}
      <div className="py-2 grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-start">
        {/* LEFT COLUMN (6 Cols): Trajektori 12 Minggu & Funnel Konversi 4 Tahap */}
        <div className="lg:col-span-6 flex flex-col justify-start space-y-2">
          <PipelineTrajectoryChart isId={isId} />
          <SalesConversionFunnel isId={isId} />
        </div>

        {/* RIGHT COLUMN (6 Cols): Distribusi Sektor & Matriks Manajemen 3 Risiko */}
        <div className="lg:col-span-6 flex flex-col justify-start space-y-2">
          <SectorPipelineBreakdown isId={isId} />
          <PipelineRiskMatrix isId={isId} />
        </div>
      </div>

      {/* Bottom Bar */}
      <ControlTowerQuoteFooter isId={isId} />
    </div>
  );
};
