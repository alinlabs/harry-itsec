import { MarketTrendPoint, MarketMetric } from '../data/marketData';
import { formatCurrency } from '../utils/formatters';
import { ChartCoordinates, LocalizedSignal } from './types';

/**
 * Calculates SVG plot coordinates for the market growth curve.
 */
export function calculateMarketChartCoordinates(
  trendPoints: MarketTrendPoint[],
  chartBaseline = 264,
  chartTop = 24,
  minVal = 1.5,
  maxVal = 3.5,
  startX = 58,
  stepX = 116
): ChartCoordinates[] {
  const chartRange = chartBaseline - chartTop; // 240px vertical span
  const valSpan = maxVal - minVal;

  return trendPoints.map((point, index) => {
    const x = startX + index * stepX;
    const y = chartBaseline - ((point.marketSizeUsdBillions - minVal) / valSpan) * chartRange;
    return {
      ...point,
      x,
      y
    };
  });
}

/**
 * Generates SVG polyline coordinate string
 */
export function generatePolylinePoints(coords: ChartCoordinates[]): string {
  return coords.map(p => `${p.x},${p.y.toFixed(2)}`).join(' ');
}

/**
 * Generates SVG closed area path for gradient fill under the line
 */
export function generateAreaPath(coords: ChartCoordinates[], chartBaseline = 264): string {
  if (!coords.length) return '';
  return (
    `M ${coords[0].x},${coords[0].y.toFixed(2)} ` +
    coords.slice(1).map(p => `L ${p.x},${p.y.toFixed(2)}`).join(' ') +
    ` L ${coords[coords.length - 1].x},${chartBaseline} L ${coords[0].x},${chartBaseline} Z`
  );
}

/**
 * Transforms key market signal to localized view model
 */
export function getLocalizedSignal(sig: MarketMetric, index: number, isId: boolean): LocalizedSignal {
  let labelText = sig.label;
  let changeText = sig.change;
  let valText = formatCurrency(sig.value, isId);

  if (isId) {
    if (index === 0) {
      labelText = 'Pasar Cyber Indonesia (2025)';
      changeText = 'Tumbuh ke $3,92 M (2029)';
      valText = '$2,71 M';
    } else if (index === 1) {
      labelText = 'Pertumbuhan YoY Software Cyber';
      changeText = 'Segmen IT enterprise tercepat';
    } else if (index === 2) {
      labelText = 'Pendapatan FY2024 ITSEC Asia (CYBR)';
      changeText = '+55.5% YoY (vs Rp 209 M FY23)';
      valText = 'Rp 325 M';
    } else if (index === 3) {
      labelText = 'Anomali Lalu Lintas Siber Nasional';
      changeText = 'Tercatat tahunan di sektor kritis';
      valText = '400 Jt+';
    } else if (index === 4) {
      labelText = 'Denda Pelanggaran UU PDP';
      changeText = 'Hingga 2% total pendapatan tahunan';
    }
  }

  return {
    labelText,
    changeText,
    valText,
    isAccent: index === 2,
    dataTypeBadge: sig.dataType === 'ACTUAL' ? 'ACTUAL' : 'PUBLIC'
  };
}
