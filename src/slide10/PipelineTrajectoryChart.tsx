import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import {
  SLIDE_10_COPY,
  SVG_CHART_CONFIG,
  TRAJECTORY_WEEK_POINTS,
  TRAJECTORY_LABEL_INDICES,
  HORIZON_QUARTER_INDICATORS,
  TRAJECTORY_METRIC_STRIP,
} from './data';
import { computeChartGeometry, getHorizonIndicatorLabel } from './utils';

interface PipelineTrajectoryChartProps {
  isId: boolean;
}

export const PipelineTrajectoryChart: React.FC<PipelineTrajectoryChartProps> = ({ isId }) => {
  const { svgWidth, svgHeight, paddingX } = SVG_CHART_CONFIG;
  const { getX, getY, linePoints, areaPoints } = computeChartGeometry(
    TRAJECTORY_WEEK_POINTS,
    SVG_CHART_CONFIG
  );

  return (
    <div className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 rounded-lg flex flex-col justify-start space-y-1.5 shadow-xl">
      <div>
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1 mb-1.5 font-mono text-xs">
          <span className="text-white font-bold">
            {isId ? SLIDE_10_COPY.trajectoryHeader.id : SLIDE_10_COPY.trajectoryHeader.en}
          </span>
          <span className="text-emerald-400 font-bold text-[11px]">
            {SLIDE_10_COPY.targetBuffer}
          </span>
        </div>

        {/* Chart SVG */}
        <div className="w-full h-[105px] bg-neutral-950/90 rounded border border-neutral-900 p-1 relative flex items-center justify-center">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pipelineGradUnified" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e11d48" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#e11d48" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            <line
              x1={paddingX}
              y1={getY(10)}
              x2={svgWidth - paddingX}
              y2={getY(10)}
              stroke="#27272a"
              strokeDasharray="3 3"
            />
            <line
              x1={paddingX}
              y1={getY(20)}
              x2={svgWidth - paddingX}
              y2={getY(20)}
              stroke="#27272a"
              strokeDasharray="3 3"
            />

            <motion.polygon
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5, ease: 'easeOut' }}
              points={areaPoints}
              fill="url(#pipelineGradUnified)"
            />
            <motion.polyline
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
              points={linePoints}
              fill="none"
              stroke="#e11d48"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {TRAJECTORY_LABEL_INDICES.map((idx) => (
              <g key={idx}>
                <circle
                  cx={getX(idx)}
                  cy={getY(TRAJECTORY_WEEK_POINTS[idx].val)}
                  r="3.5"
                  fill="#ffffff"
                  stroke="#e11d48"
                  strokeWidth="2"
                />
                <text
                  x={getX(idx)}
                  y={getY(TRAJECTORY_WEEK_POINTS[idx].val) - 6}
                  fill="#ffffff"
                  fontSize="8.5"
                  fontFamily="Inter, sans-serif"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  Rp {TRAJECTORY_WEEK_POINTS[idx].val}M
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* 3-Month Q4 Horizon Indicator */}
        <div className="grid grid-cols-3 gap-1 pt-1 text-center font-mono text-[9px] text-neutral-400">
          {HORIZON_QUARTER_INDICATORS.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-950/70 rounded py-0.5 border border-neutral-900"
            >
              <span className={`${item.colorClass} font-bold block`}>{item.weeks}</span>
              <span className="text-[8px] text-neutral-300">
                {getHorizonIndicatorLabel(item, isId)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* W12 Metric Strip */}
      <div className="grid grid-cols-3 gap-1.5 pt-1.5 border-t border-neutral-900 text-center font-mono text-xs">
        {TRAJECTORY_METRIC_STRIP.map((metric, idx) => (
          <div key={idx} className="p-1.5 bg-neutral-950 rounded border border-neutral-800">
            <span className="text-[8.5px] text-neutral-400 block uppercase">
              {metric.label}
            </span>
            <span className={`text-xs lg:text-sm font-extrabold ${metric.valueColorClass}`}>
              <AnimatedCounter value={metric.value} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
