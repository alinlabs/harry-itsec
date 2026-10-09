import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeaderBar } from './components/HeaderBar';
import { NavigationControls } from './components/NavigationControls';
import { SlideDrawer } from './components/SlideDrawer';
import { DataTransparencyModal } from './components/DataTransparencyModal';
import { GlossaryModal } from './components/GlossaryModal';
import { SharePresentationModal } from './components/SharePresentationModal';
import { SlideExportRenderer } from './components/SlideExportRenderer';
import { ContextMenu } from './components/ContextMenu';
import { AdaptiveViewportCanvas } from './components/AdaptiveViewportCanvas';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
import { SLIDE_INDEX_LIST_BILINGUAL } from './data/translations';
import { SECTOR_FILTER_OPTIONS } from './data/targetAccounts';

// Slides
import { Slide01Opening } from './slide01';
import { Slide02MarketIntelligence } from './slide02';
import { Slide03TargetMarketMap } from './slide03';
import { Slide04GoToMarket } from './slide04';
import { Slide05AccountPipeline } from './slide05';
import { Slide06SalesMotion } from './slide06';
import { Slide07Commercialization } from './slide07';
import { Slide08Partnerships } from './slide08';
import { Slide09NinetyDayExecution } from './slide09';
import { Slide10KPIControlTower } from './slide10';
import { Slide11Closing } from './slide11';

const TOTAL_SLIDES = 11;

const SLIDE_TAB_COUNTS: Record<number, number> = {
  1: 1,  // Opening (Halaman Judul)
  2: 1,  // Bab 01: Market Intelligence (Direct slide transition: Next -> Bab 02, Back -> Halaman Judul)
  3: 7,  // Bab 02: Target Account Universe (7 Sector Filter Tabs)
  4: 2,  // Bab 03: Go-To-Market Strategy (2 Focused Presentation Tabs: Target Kuadran & Sektor ICP, Alur Akuisisi & Kanal Penjualan)
  5: 3,  // Bab 04: Sales Pipeline (3 Pipeline View Mode Tabs: Kanban, Rencana Akun, Peta Wilayah)
  6: 1,  // Bab 05: Sales Motion (Unified Single Screen, Zero-Tab)
  7: 1,  // Bab 06: Commercialization (Unified Single Screen, Zero-Tab)
  8: 3,  // Bab 07/08: Partnerships (3 Focused Views: Pilar & Margin, Matriks SI Terverifikasi, Rekomendasi 90 Hari)
  9: 1,  // Bab 08: Execution & Quotas (Horizon Triptych Screen, Zero-Tab)
  10: 1, // Bab 09: KPI Control Tower (Unified Single Screen, Zero-Tab)
  11: 1  // Closing
};

export default function App() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [slideTabPositions, setSlideTabPositions] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0
  });

  const [isDataModalOpen, setIsDataModalOpen] = useState<boolean>(false);
  const [isGlossaryModalOpen, setIsGlossaryModalOpen] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; isOpen: boolean }>({
    x: 0,
    y: 0,
    isOpen: false
  });

  const activeSlideMeta = SLIDE_INDEX_LIST_BILINGUAL.find((s) => s.id === currentSlide) || SLIDE_INDEX_LIST_BILINGUAL[0];

  const setTabPositionForSlide = useCallback((slideNum: number, tabIndex: number) => {
    setSlideTabPositions((prev) => ({
      ...prev,
      [slideNum]: tabIndex
    }));
  }, []);

  const handleNext = useCallback(() => {
    const maxTabs = SLIDE_TAB_COUNTS[currentSlide] || 1;
    const currentTab = slideTabPositions[currentSlide] || 0;

    if (currentTab < maxTabs - 1) {
      // Step to next tab inside active slide immediately
      setSlideTabPositions((prev) => ({
        ...prev,
        [currentSlide]: (prev[currentSlide] || 0) + 1
      }));
    } else {
      // At last tab of current slide -> advance to next slide immediately
      const nextSlide = Math.min(currentSlide + 1, TOTAL_SLIDES);
      if (nextSlide !== currentSlide) {
        setSlideDirection(1);
        setSlideTabPositions((prev) => ({
          ...prev,
          [nextSlide]: 0 // Reset next slide to tab 0
        }));
        setCurrentSlide(nextSlide);
      }
    }
  }, [currentSlide, slideTabPositions]);

  const handlePrev = useCallback(() => {
    const currentTab = slideTabPositions[currentSlide] || 0;

    if (currentTab > 0) {
      // Step to previous tab inside active slide immediately
      setSlideTabPositions((prev) => ({
        ...prev,
        [currentSlide]: (prev[currentSlide] || 0) - 1
      }));
    } else {
      // At first tab of current slide -> go back to previous slide at its last tab immediately
      const prevSlide = Math.max(currentSlide - 1, 1);
      if (prevSlide !== currentSlide) {
        setSlideDirection(-1);
        const prevMaxTabs = SLIDE_TAB_COUNTS[prevSlide] || 1;
        setSlideTabPositions((prev) => ({
          ...prev,
          [prevSlide]: prevMaxTabs - 1 // Start previous slide at its last tab
        }));
        setCurrentSlide(prevSlide);
      }
    }
  }, [currentSlide, slideTabPositions]);

  const handleJumpToSlide = useCallback((slideNum: number) => {
    if (slideNum >= 1 && slideNum <= TOTAL_SLIDES) {
      setSlideDirection(slideNum >= currentSlide ? 1 : -1);
      setSlideTabPositions((prev) => ({
        ...prev,
        [slideNum]: 0
      }));
      setCurrentSlide(slideNum);
    }
  }, [currentSlide]);

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    // If text is currently highlighted / selected, allow native browser context menu (Copy / Salin)
    const activeSelection = window.getSelection()?.toString().trim();
    if (activeSelection && activeSelection.length > 0) {
      return;
    }
    e.preventDefault();
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      isOpen: true
    });
  }, []);

  // Keyboard navigation listener - always responsive without blocking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if an input is focused (none in this deck, but good practice)
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }

      if (e.key === 'Enter') {
        if (currentSlide === 1) {
          e.preventDefault();
          handleNext();
        }
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentSlide !== 1) {
          e.preventDefault();
          handleNext();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === ' ' && !isDataModalOpen && !isDrawerOpen) {
        if (currentSlide !== 1) {
          e.preventDefault();
          handleNext();
        }
      } else if (e.key === 'Escape') {
        if (isDataModalOpen) setIsDataModalOpen(false);
        else if (isDrawerOpen) setIsDrawerOpen(false);
      } else if (e.key === 'Home') {
        e.preventDefault();
        handleJumpToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        handleJumpToSlide(TOTAL_SLIDES);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, handleNext, handlePrev, handleJumpToSlide, isDataModalOpen, isDrawerOpen]);

  // Render active slide component
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return <Slide01Opening onNext={handleNext} isLocked={false} />;
      case 2:
        return (
          <Slide02MarketIntelligence 
            activeTrendIndex={slideTabPositions[2] || 0}
            onTrendIndexChange={(idx) => setTabPositionForSlide(2, idx)}
            onOpenGlossaryModal={() => setIsGlossaryModalOpen(true)}
          />
        );
      case 3:
        return (
          <Slide03TargetMarketMap 
            activeSectorIndex={slideTabPositions[3] || 0}
            onSectorIndexChange={(idx) => setTabPositionForSlide(3, idx)}
          />
        );
      case 4:
        return (
          <Slide04GoToMarket 
            activeTabPosition={slideTabPositions[4] || 0}
            onTabPositionChange={(idx) => setTabPositionForSlide(4, idx)}
          />
        );
      case 5:
        return (
          <Slide05AccountPipeline 
            activeViewIndex={slideTabPositions[5] || 0}
            onViewIndexChange={(idx) => setTabPositionForSlide(5, idx)}
          />
        );
      case 6:
        return (
          <Slide06SalesMotion 
            activeTabPosition={slideTabPositions[6] || 0}
            onTabPositionChange={(idx) => setTabPositionForSlide(6, idx)}
          />
        );
      case 7:
        return (
          <Slide07Commercialization 
            activeTabPosition={slideTabPositions[7] || 0}
            onTabPositionChange={(idx) => setTabPositionForSlide(7, idx)}
          />
        );
      case 8:
        return (
          <Slide08Partnerships 
            activeTabPosition={slideTabPositions[8] || 0}
            onTabPositionChange={(idx) => setTabPositionForSlide(8, idx)}
          />
        );
      case 9:
        return (
          <Slide09NinetyDayExecution 
            activeTabPosition={slideTabPositions[9] || 0}
            onTabPositionChange={(idx) => setTabPositionForSlide(9, idx)}
          />
        );
      case 10:
        return (
          <Slide10KPIControlTower 
            activeTabPosition={slideTabPositions[10] || 0}
            onTabPositionChange={(idx) => setTabPositionForSlide(10, idx)}
          />
        );
      case 11:
        return <Slide11Closing onRestart={() => handleJumpToSlide(1)} isLocked={false} />;
      default:
        return <Slide01Opening onNext={handleNext} isLocked={false} />;
    }
  };

  return (
    <div 
      onContextMenu={handleContextMenu}
      className={`h-screen min-h-[100dvh] max-h-[100dvh] w-screen flex flex-col font-sans overflow-hidden antialiased relative transition-colors duration-200 ${
        theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-[#050608] text-neutral-100'
      }`}
    >
      {/* Fixed Top Header Bar */}
      <HeaderBar
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        slideTitle={activeSlideMeta.title[language]}
        chapterName={activeSlideMeta.chapter[language]}
        onOpenDataModal={() => setIsDataModalOpen(true)}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenGlossaryModal={() => setIsGlossaryModalOpen(true)}
        onOpenShareModal={() => setIsShareModalOpen(true)}
      />

      {/* Main Slide Canvas - Soft Appear & Disappear Transition on Presentation Area Only */}
      <main className="flex-1 min-h-0 w-full overflow-hidden flex flex-col relative">
        <AdaptiveViewportCanvas>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ 
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex-1 min-h-0 h-full w-full flex flex-col"
            >
              {renderSlideContent()}
            </motion.div>
          </AnimatePresence>
        </AdaptiveViewportCanvas>
      </main>

      {/* Bottom Navigation Controls - Hidden on Slide 1 */}
      {currentSlide > 1 && (
        <NavigationControls
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
          onPrev={handlePrev}
          onNext={handleNext}
          onJumpToSlide={handleJumpToSlide}
        />
      )}

      {/* Modals & Overlays */}
      <DataTransparencyModal
        isOpen={isDataModalOpen}
        onClose={() => setIsDataModalOpen(false)}
        activeSlideId={currentSlide}
      />

      <GlossaryModal
        isOpen={isGlossaryModalOpen}
        onClose={() => setIsGlossaryModalOpen(false)}
      />

      <SharePresentationModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* Hidden 1080p Slide Capturing Surface for High-Resolution PDF & PPTX Generation */}
      <SlideExportRenderer />

      <SlideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={handleJumpToSlide}
      />

      <ContextMenu
        x={contextMenu.x}
        y={contextMenu.y}
        isOpen={contextMenu.isOpen}
        onClose={() => setContextMenu((prev) => ({ ...prev, isOpen: false }))}
        onOpenDataModal={() => setIsDataModalOpen(true)}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenGlossaryModal={() => setIsGlossaryModalOpen(true)}
        currentSlide={currentSlide}
        slideTitle={activeSlideMeta.title[language]}
        chapterName={activeSlideMeta.chapter[language]}
      />
    </div>
  );
}
