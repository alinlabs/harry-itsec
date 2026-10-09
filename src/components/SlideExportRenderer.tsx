import React from 'react';
import { Slide01Opening } from '../slide01';
import { Slide02MarketIntelligence } from '../slide02';
import { Slide03TargetMarketMap } from '../slide03';
import { Slide04GoToMarket } from '../slide04';
import { Slide05AccountPipeline } from '../slide05';
import { Slide06SalesMotion } from '../slide06';
import { Slide07Commercialization } from '../slide07';
import { Slide08Partnerships } from '../slide08';
import { Slide09NinetyDayExecution } from '../slide09';
import { Slide10KPIControlTower } from '../slide10';
import { Slide11Closing } from '../slide11';
import { useTheme } from '../context/ThemeContext';

/**
 * Hidden render container used exclusively for capturing 1080p slide frames for PDF/PPTX generation.
 * Rendered off-screen with standard 1920x1080 slide dimensions.
 */
export const SlideExportRenderer: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const baseStyle: React.CSSProperties = {
    width: '1920px',
    height: '1080px',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: isLight ? '#f8fafc' : '#050608',
    color: isLight ? '#0f172a' : '#f3f4f6',
    boxSizing: 'border-box'
  };

  return (
    <div
      id="slide-export-hidden-container"
      style={{
        position: 'fixed',
        left: '-99999px',
        top: '-99999px',
        width: '1920px',
        opacity: 0,
        pointerEvents: 'none',
        zIndex: -9999
      }}
      aria-hidden="true"
    >
      <div data-export-slide="1" style={baseStyle}>
        <Slide01Opening onNext={() => {}} isLocked={false} />
      </div>

      <div data-export-slide="2" style={baseStyle}>
        <Slide02MarketIntelligence activeTrendIndex={3} />
      </div>

      <div data-export-slide="3" style={baseStyle}>
        <Slide03TargetMarketMap activeSectorIndex={0} />
      </div>

      <div data-export-slide="4" style={baseStyle}>
        <Slide04GoToMarket activeTabPosition={0} />
      </div>

      <div data-export-slide="5" style={baseStyle}>
        <Slide05AccountPipeline activeViewIndex={0} />
      </div>

      <div data-export-slide="6" style={baseStyle}>
        <Slide06SalesMotion />
      </div>

      <div data-export-slide="7" style={baseStyle}>
        <Slide07Commercialization />
      </div>

      <div data-export-slide="8" style={baseStyle}>
        <Slide08Partnerships />
      </div>

      <div data-export-slide="9" style={baseStyle}>
        <Slide09NinetyDayExecution />
      </div>

      <div data-export-slide="10" style={baseStyle}>
        <Slide10KPIControlTower />
      </div>

      <div data-export-slide="11" style={baseStyle}>
        <Slide11Closing onRestart={() => {}} isLocked={false} />
      </div>
    </div>
  );
};
