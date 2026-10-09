import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Slide01OpeningProps } from './types';
import { BackgroundSignalCanvas } from './BackgroundSignalCanvas';
import { HeroBanner } from './HeroBanner';
import { QuotaTargetCard } from './QuotaTargetCard';
import { FactMetricsGrid } from './FactMetricsGrid';
import { StrategicPillarsCard } from './StrategicPillarsCard';
import { StartActionButton } from './StartActionButton';

export const Slide01Container: React.FC<Slide01OpeningProps> = ({
  onNext,
  isLocked = false,
}) => {
  const { language } = useLanguage();
  const isId = language === 'id';

  // Keyboard navigation for opening slide: Enter key proceeds to presentation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isLocked) {
        e.preventDefault();
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, isLocked]);

  return (
    <div className="relative h-full w-full flex flex-col justify-between py-3 sm:py-5 px-0 overflow-y-auto overflow-x-hidden scrollbar-thin font-sans">
      {/* Background Interactive Signal Canvas (SVG Grid & Network Nodes) */}
      <BackgroundSignalCanvas />

      {/* Center Main Stage: Executive Title & Visual Anchor */}
      <div className="relative z-10 flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column: Bold Typography Anchor */}
        <HeroBanner isId={isId} />

        {/* Right Column: Visual Signal Anchor - Cards rendered directly without "card fondasi" wrapper */}
        <div className="lg:col-span-5 space-y-3.5">
          <QuotaTargetCard isId={isId} />
          <FactMetricsGrid isId={isId} />
          <StrategicPillarsCard isId={isId} />
        </div>
      </div>

      {/* Bottom Action Area: Full-width "Mulai" button, Enter instruction above, no top border line */}
      <StartActionButton isId={isId} onNext={onNext} isLocked={isLocked} />
    </div>
  );
};
