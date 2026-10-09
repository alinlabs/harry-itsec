import React from 'react';
import { motion } from 'motion/react';
import { INDONESIA_MARKET_TREND } from './data';
import { calculateMarketChartCoordinates, generatePolylinePoints, generateAreaPath } from './utils';
import { SLIDE_02_COPY } from './data';
import { MarketTrendPoint } from './types';
import { AnimatedCounter } from '../components/AnimatedCounter';

interface MarketGrowthCurveProps {
  isId: boolean;
  isLight: boolean;
  activeTrendPoint: MarketTrendPoint;
  onTrendIndexChange?: (index: number) => void;
}

export const MarketGrowthCurve: React.FC<MarketGrowthCurveProps> = ({
  isId,
  isLight,
  activeTrendPoint,
  onTrendIndexChange
}) => {
  const chartBaseline = 264;
  const activeTrendYear = activeTrendPoint.year;

  const pointsCoords = calculateMarketChartCoordinates(
    INDONESIA_MARKET_TREND,
    chartBaseline,
    24,
    1.5,
    3.5,
    58,
    116
  );

  const polylinePoints = generatePolylinePoints(pointsCoords);
  const areaPath = generateAreaPath(pointsCoords, chartBaseline);

  return (
    <div className="lg:col-span-7 !bg-transparent !border-0 !shadow-none p-1 sm:p-2 flex flex-col justify-between">
      <div className="pb-1 shrink-0 text-center">
        <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block text-center">
          {isId ? SLIDE_02_COPY.chartTitle.id : SLIDE_02_COPY.chartTitle.en}
        </span>
      </div>

      {/* SVG Visual Line Chart with tall vertical span, tightly packed without dead space */}
      <div className="relative flex-1 min-h-[260px] sm:min-h-[290px] lg:min-h-[320px] w-full my-auto flex items-center justify-center">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 675 296">
          {/* Horizontal Grid lines */}
          <line x1="34" y1="24" x2="655" y2="24" stroke={isLight ? '#e2e8f0' : '#27272a'} strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="34" y1="104" x2="655" y2="104" stroke={isLight ? '#e2e8f0' : '#27272a'} strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="34" y1="184" x2="655" y2="184" stroke={isLight ? '#e2e8f0' : '#27272a'} strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="34" y1={chartBaseline} x2="655" y2={chartBaseline} stroke={isLight ? '#cbd5e1' : '#3f3f46'} strokeWidth="1" />

          {/* Y-axis labels */}
          <text x="28" y="28" fill={isLight ? '#64748b' : '#a1a1aa'} fontSize="10" textAnchor="end" fontFamily="Inter, sans-serif">$3,5 M</text>
          <text x="28" y="108" fill={isLight ? '#64748b' : '#a1a1aa'} fontSize="10" textAnchor="end" fontFamily="Inter, sans-serif">$2,8 M</text>
          <text x="28" y="188" fill={isLight ? '#64748b' : '#a1a1aa'} fontSize="10" textAnchor="end" fontFamily="Inter, sans-serif">$2,1 M</text>
          <text x="28" y={chartBaseline + 4} fill={isLight ? '#64748b' : '#a1a1aa'} fontSize="10" textAnchor="end" fontFamily="Inter, sans-serif">$1,5 M</text>

          {/* SVG Area fill */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: isLight ? 0.15 : 0.25 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            d={areaPath}
            fill="url(#trendGrad)"
          />

          <defs>
            <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e11d48" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#e11d48" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Main Trend Line exactly passing through every point coordinate */}
          <motion.polyline
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            fill="none"
            stroke="#e11d48"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={polylinePoints}
          />

          {/* Interactive Points - Centered exactly on the line, numbers directly visible without card wrapper */}
          {pointsCoords.map((point, index) => {
            const isHovered = point.year === activeTrendYear;
            const valText = `$${point.marketSizeUsdBillions.toString().replace('.', ',')} M`;

            return (
              <g 
                key={point.year} 
                className="cursor-pointer group" 
                onClick={() => onTrendIndexChange && onTrendIndexChange(index)}
              >
                {/* Hover halo */}
                {isHovered && (
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="11"
                    fill="#e11d48"
                    fillOpacity="0.25"
                  />
                )}

                {/* Point vertex circle exactly in center of curve line */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={isHovered ? 6 : 4.5}
                  fill={isHovered ? '#ffffff' : '#e11d48'}
                  stroke={isHovered ? '#e11d48' : (isLight ? '#ffffff' : '#090a10')}
                  strokeWidth="2"
                  className="transition-all"
                />

                {/* Value Number without card wrapper: Red in Light Mode, White in Dark Mode */}
                <text
                  x={point.x}
                  y={point.y - 12}
                  textAnchor="middle"
                  fill={isLight ? (isHovered ? '#9f1239' : '#e11d48') : (isHovered ? '#fda4af' : '#ffffff')}
                  fontSize={isHovered ? '12' : '11'}
                  fontFamily="Inter, sans-serif"
                  fontWeight={isHovered ? '900' : 'bold'}
                  className="select-none pointer-events-none transition-all"
                >
                  {valText}
                </text>

                {/* Year label below baseline */}
                <text
                  x={point.x}
                  y={chartBaseline + 18}
                  fill={isHovered ? '#e11d48' : (isLight ? '#64748b' : '#a1a1aa')}
                  fontSize="10"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontWeight={isHovered ? 'bold' : 'normal'}
                  className="transition-colors select-none"
                >
                  {point.year}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Point Insights Strip - No dividing border line above */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1 text-xs font-mono shrink-0">
        <div className="p-2 bg-neutral-950/80 rounded border border-neutral-900 card-interactive-shimmer">
          <span className="text-[10px] text-neutral-400 block">{isId ? 'Tahun Horizon' : 'Selected Horizon'}</span>
          <span className="text-white font-bold">{activeTrendPoint.year}</span>
        </div>
        <div className="p-2 bg-neutral-950/80 rounded border border-neutral-900 card-interactive-shimmer">
          <span className="text-[10px] text-neutral-400 block">{isId ? 'Ukuran Total Pasar' : 'Total Market Size'}</span>
          <span className="text-rose-400 font-bold block">
            <AnimatedCounter
              value={
                isId 
                  ? `$${activeTrendPoint.marketSizeUsdBillions.toString().replace('.', ',')} M (~Rp ${activeTrendPoint.marketSizeIdrTrillions.toString().replace('.', ',')} T)` 
                  : `$${activeTrendPoint.marketSizeUsdBillions} Billion (~Rp ${activeTrendPoint.marketSizeIdrTrillions} T)`
              }
            />
          </span>
        </div>
        <div className="p-2 bg-neutral-950/80 rounded border border-neutral-900 card-interactive-shimmer">
          <span className="text-[10px] text-neutral-400 block">{isId ? 'Porsi Testing & Exposure' : 'Testing & Exposure Subset'}</span>
          <span className="text-white font-bold block">
            <AnimatedCounter
              value={isId ? `$${activeTrendPoint.testingSegmentUsdMillions} Jt` : `$${activeTrendPoint.testingSegmentUsdMillions} Million`}
            />
          </span>
        </div>
        <div className="p-2 bg-neutral-950/80 rounded border border-neutral-900 card-interactive-shimmer">
          <span className="text-[10px] text-neutral-400 block">{isId ? 'Pertumbuhan YoY' : 'YoY Growth'}</span>
          <span className="text-emerald-400 font-bold block">
            <AnimatedCounter value={activeTrendPoint.growthRateYoY} />
          </span>
        </div>
      </div>
    </div>
  );
};
