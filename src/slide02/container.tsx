import React, { useState } from 'react';
import { Slide02MarketIntelligenceProps } from './types';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { TAM_SAM_SOM_DATA, INDONESIA_MARKET_TREND, SLIDE_02_COPY } from './data';
import { KeyMarketSignalsStrip } from './KeyMarketSignalsStrip';
import { TamSamSomPyramid } from './TamSamSomPyramid';
import { MarketGrowthCurve } from './MarketGrowthCurve';
import { MarketIntelligenceModal } from './MarketIntelligenceModal';

export const Slide02Container: React.FC<Slide02MarketIntelligenceProps> = ({
  activeTrendIndex = 3,
  onTrendIndexChange,
  onOpenGlossaryModal: _onOpenGlossaryModal
}) => {
  const { language } = useLanguage();
  const isId = language === 'id';
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [selectedModalTamIndex, setSelectedModalTamIndex] = useState<number | null>(null);

  const activeTrendPoint = 
    INDONESIA_MARKET_TREND[activeTrendIndex] || INDONESIA_MARKET_TREND[3];

  const modalLayer = 
    selectedModalTamIndex !== null ? TAM_SAM_SOM_DATA[selectedModalTamIndex] : null;

  return (
    <div className="relative h-full w-full flex flex-col justify-between py-2.5 sm:py-4 lg:py-3.5 px-0 overflow-y-auto overflow-x-hidden scrollbar-thin">
      {/* Top Header - Centered, no glossary button */}
      <div className="space-y-0.5 shrink-0 text-center">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          {isId ? SLIDE_02_COPY.header.id : SLIDE_02_COPY.header.en}
        </h2>
      </div>

      {/* 5 Key Market Signals Strip (Big Numbers Dominance) */}
      <KeyMarketSignalsStrip isId={isId} />

      {/* Main Visual Stage: Side-by-Side Pyramid (Left) + Growth Curve (Right) */}
      <div className="flex-1 min-h-0 py-1.5 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column (5 Cols): Piramida Potensi Pasar (TAM · SAM · SOM) */}
        <TamSamSomPyramid
          isId={isId}
          onSelectLayer={(index) => setSelectedModalTamIndex(index)}
        />

        {/* Right Column (7 Cols): Kurva Pertumbuhan Pasar (2022–2027) */}
        <MarketGrowthCurve
          isId={isId}
          isLight={isLight}
          activeTrendPoint={activeTrendPoint}
          onTrendIndexChange={onTrendIndexChange}
        />
      </div>

      {/* Bottom Bar: Sales Lead Directive Narrative (Centered, Clean, No extra labels) */}
      <div className="pt-2 shrink-0 text-center text-xs text-neutral-300">
        <p className="max-w-4xl mx-auto leading-relaxed">
          {isId ? SLIDE_02_COPY.bottomDirective.id : SLIDE_02_COPY.bottomDirective.en}
        </p>
      </div>

      {/* Modal Detail TAM / SAM / SOM Methodology */}
      <MarketIntelligenceModal
        modalLayer={modalLayer}
        isOpen={!!modalLayer}
        onClose={() => setSelectedModalTamIndex(null)}
        isId={isId}
      />
    </div>
  );
};
