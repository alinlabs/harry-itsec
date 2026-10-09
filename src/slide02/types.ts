import { AddressableMarketLayer, MarketTrendPoint } from '../data/marketData';

export type { AddressableMarketLayer, MarketTrendPoint };

export interface Slide02MarketIntelligenceProps {
  activeTrendIndex?: number;
  onTrendIndexChange?: (index: number) => void;
  onOpenGlossaryModal?: () => void;
}

export interface MarketSignalItem {
  label: string;
  value: string;
  change: string;
  source: string;
  dataType: 'ACTUAL' | 'PUBLIC MARKET DATA' | 'DERIVED' | 'MODELLED';
}

export interface LocalizedSignal {
  labelText: string;
  changeText: string;
  valText: string;
  isAccent: boolean;
  dataTypeBadge: string;
}

export interface ChartCoordinates {
  x: number;
  y: number;
  year: string;
  marketSizeUsdBillions: number;
  marketSizeIdrTrillions: number;
  testingSegmentUsdMillions: number;
  growthRateYoY: string;
}
