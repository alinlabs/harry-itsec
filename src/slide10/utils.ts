import { WeekTrajectoryPoint, HorizonQuarterIndicator } from './types';
import { SVG_CHART_CONFIG } from './data';

export interface ChartGeometry {
  getX: (index: number) => number;
  getY: (val: number) => number;
  linePoints: string;
  areaPoints: string;
}

export const computeChartGeometry = (
  points: WeekTrajectoryPoint[],
  config = SVG_CHART_CONFIG
): ChartGeometry => {
  const { svgWidth, svgHeight, paddingX, paddingY, maxVal } = config;

  const getX = (i: number): number =>
    paddingX + (i * (svgWidth - 2 * paddingX)) / (points.length - 1);

  const getY = (val: number): number =>
    svgHeight - paddingY - (val / maxVal) * (svgHeight - 2 * paddingY);

  const linePoints = points.map((pt, i) => `${getX(i)},${getY(pt.val)}`).join(' ');
  const areaPoints =
    `${getX(0)},${svgHeight - paddingY} ` +
    linePoints +
    ` ${getX(points.length - 1)},${svgHeight - paddingY}`;

  return { getX, getY, linePoints, areaPoints };
};

export const getHorizonIndicatorLabel = (
  indicator: HorizonQuarterIndicator,
  isId: boolean
): string => {
  return isId ? indicator.labelId : indicator.labelEn;
};
