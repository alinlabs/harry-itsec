import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Slide04GoToMarketProps } from './types';
import { GTM_TAB_KEYS, SLIDE_04_COPY } from './data';
import { GtmHeaderTabs } from './GtmHeaderTabs';
import { ExecutivePillarsStrip } from './ExecutivePillarsStrip';
import { QuadrantMatrixView } from './QuadrantMatrixView';
import { AcquisitionFunnelView } from './AcquisitionFunnelView';

export const Slide04Container: React.FC<Slide04GoToMarketProps> = ({
  activeTabPosition = 0,
  onTabPositionChange
}) => {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const isId = language === 'id';

  const activeTab = GTM_TAB_KEYS[activeTabPosition] || GTM_TAB_KEYS[0];

  const [selectedSegmentId, setSelectedSegmentId] = useState<string | null>(null);
  const [hoveredSegmentId, setHoveredSegmentId] = useState<string | null>(null);

  const handleTabClick = (index: number) => {
    if (onTabPositionChange) {
      onTabPositionChange(index);
    }
  };

  return (
    <div className="relative h-full w-full flex flex-col justify-between py-2.5 sm:py-3.5 lg:pt-3 lg:pb-1 px-0 overflow-y-auto overflow-x-hidden scrollbar-thin font-sans">
      {/* Header & Clean 2 Tabs */}
      <GtmHeaderTabs 
        activeTab={activeTab} 
        onTabClick={handleTabClick} 
        isId={isId} 
      />

      {/* WHO / WHY / WHEN / HOW Executive Strip (Punchy, Visual, All Bottom Texts Gray) */}
      <ExecutivePillarsStrip isId={isId} />

      {/* Main Interactive Stage */}
      <div className="flex-1 min-h-0 py-1 flex flex-col justify-between">
        <AnimatePresence mode="wait" initial={false}>
          {activeTab === 'segmentation' && (
            <motion.div 
              key="segmentation"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <QuadrantMatrixView 
                selectedSegmentId={selectedSegmentId}
                hoveredSegmentId={hoveredSegmentId}
                onSelectSegment={setSelectedSegmentId}
                onHoverSegment={setHoveredSegmentId}
                isId={isId}
                isDark={isDark}
              />
            </motion.div>
          )}

          {activeTab === 'lead_generation' && (
            <motion.div 
              key="lead_generation"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <AcquisitionFunnelView isId={isId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Bar: Sales Lead Directive Narrative (Single Line, Centered, Clean with Dedicated Spacing) */}
      <div className="pt-2.5 pb-2 sm:pb-3 shrink-0 text-center">
        <p className="max-w-5xl mx-auto text-[11px] sm:text-xs text-neutral-300 tracking-tight leading-normal px-2">
          {isId ? SLIDE_04_COPY.bottomNarrative.id : SLIDE_04_COPY.bottomNarrative.en}
        </p>
      </div>
    </div>
  );
};
