import React from 'react';
import { motion } from 'motion/react';
import { SegmentPlot } from './types';
import { TARGET_SEGMENTATION_PLOTS, PRIORITY_SECTOR_CARDS, SLIDE_04_COPY } from './data';
import { 
  calculatePlotCoordinates, 
  getPlotDisplayName, 
  getTierColor, 
  getLabelYOffset 
} from './utils';
import { AnimatedCounter } from '../components/AnimatedCounter';

interface QuadrantMatrixViewProps {
  selectedSegmentId: string | null;
  hoveredSegmentId: string | null;
  onSelectSegment: (id: string | null) => void;
  onHoverSegment: (id: string | null) => void;
  isId: boolean;
  isDark: boolean;
}

export const QuadrantMatrixView: React.FC<QuadrantMatrixViewProps> = ({
  selectedSegmentId,
  hoveredSegmentId,
  onSelectSegment,
  onHoverSegment,
  isId,
  isDark
}) => {
  const focusedSegmentId = selectedSegmentId || hoveredSegmentId;
  const focusedSegment: SegmentPlot | null = focusedSegmentId
    ? (TARGET_SEGMENTATION_PLOTS.find(s => s.id === focusedSegmentId) || null)
    : null;

  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
      {/* Left 7 Cols: Quadrant Canvas with Projection Lines - Dibungkus Card Putih */}
      <div className="lg:col-span-7 bg-white dark:bg-[#0b0c12]/95 border border-slate-200 dark:border-neutral-800 p-3.5 sm:p-4 rounded-lg flex flex-col shadow-sm dark:shadow-xl h-full overflow-hidden">
        <div className="flex items-center justify-between mb-1 shrink-0">
          <span className="text-xs font-mono text-neutral-800 dark:text-neutral-300 font-bold uppercase tracking-wider">
            {SLIDE_04_COPY.quadrant.title}
          </span>
        </div>

        {/* Fixed-height Quadrant Visual Container: Prevents any vertical floating or size shifting */}
        <div 
          className="relative w-full h-[300px] sm:h-[315px] lg:h-[325px] shrink-0 bg-transparent flex items-center justify-center cursor-default select-none"
          onClick={() => onSelectSegment(null)}
        >
          <svg 
            className="w-full h-full overflow-visible select-none" 
            viewBox="0 0 720 300"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Invisible Backdrop to Deselect */}
            <rect width="720" height="300" fill="transparent" onClick={() => onSelectSegment(null)} />

            {/* Quadrant Divider Center Lines (75% Maturity, 80% Complexity) - Setebal dan sejelas garis L siku siku */}
            <line x1="365" y1="25" x2="365" y2="265" stroke={isDark ? "#71717a" : "#94a3b8"} strokeWidth="1.6" strokeDasharray="4 3" strokeOpacity={0.9} />
            <line x1="60" y1="145" x2="670" y2="145" stroke={isDark ? "#71717a" : "#94a3b8"} strokeWidth="1.6" strokeDasharray="4 3" strokeOpacity={0.9} />

            {/* Outer Axis Reference Lines */}
            <line x1="60" y1="25" x2="60" y2="265" stroke={isDark ? "#52525b" : "#94a3b8"} strokeWidth="1.6" />
            <line x1="60" y1="265" x2="670" y2="265" stroke={isDark ? "#52525b" : "#94a3b8"} strokeWidth="1.6" />

            {/* Axis Labels (Minimalis tanpa persen statis di awal) */}
            <text x="670" y="278" textAnchor="end" fill={isDark ? "#a1a1aa" : "#64748b"} fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">
              {SLIDE_04_COPY.quadrant.axisX}
            </text>
            <text x="60" y="16" textAnchor="start" fill={isDark ? "#a1a1aa" : "#64748b"} fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">
              {SLIDE_04_COPY.quadrant.axisY}
            </text>

            {/* Target Plots: Every dot sits precisely at the vertex/corner of its own projection lines */}
            {TARGET_SEGMENTATION_PLOTS.map((plot) => {
              const { px, py } = calculatePlotCoordinates(plot.xMaturity, plot.yComplexity);

              const isSelected = plot.id === selectedSegmentId;
              const isHovered = plot.id === hoveredSegmentId;
              const hasActiveFocus = focusedSegmentId !== null;
              const isCurrentFocus = plot.id === focusedSegmentId;
              const isFocused = isSelected || isHovered;

              const color = getTierColor(plot.tier);
              const displayName = getPlotDisplayName(plot, isId);

              // Posisi label di sebelah kanan dari titik (anchor start)
              const labelX = px + 9;
              const labelY = getLabelYOffset(plot.id, py);

              return (
                <g
                  key={plot.id}
                  className="cursor-pointer group"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSegment(selectedSegmentId === plot.id ? null : plot.id);
                  }}
                  onMouseEnter={() => onHoverSegment(plot.id)}
                  onMouseLeave={() => onHoverSegment(null)}
                >
                  {/* 1. Garis Abu Tipis ke Sumbu X dan Y yang sudah terlihat di awal untuk setiap titik */}
                  <g className="pointer-events-none">
                    <line
                      x1={60}
                      y1={py}
                      x2={px}
                      y2={py}
                      stroke={isDark ? "#52525b" : "#94a3b8"}
                      strokeWidth={1}
                      strokeDasharray="2.5 2.5"
                      opacity={hasActiveFocus && !isCurrentFocus ? 0.12 : (isFocused ? 0 : 0.65)}
                      className="transition-opacity duration-200"
                    />
                    <line
                      x1={px}
                      y1={py}
                      x2={px}
                      y2={265}
                      stroke={isDark ? "#52525b" : "#94a3b8"}
                      strokeWidth={1}
                      strokeDasharray="2.5 2.5"
                      opacity={hasActiveFocus && !isCurrentFocus ? 0.12 : (isFocused ? 0 : 0.65)}
                      className="transition-opacity duration-200"
                    />
                  </g>

                  {/* 2. L-Line Siku-Siku Aktif: Berwarna cerah & tebal, muncul saat titik diklik / diarahkan kursor beserta badge persentase */}
                  {isFocused && (
                    <g className="pointer-events-none">
                      {/* Horizontal Guideline dari sumbu Y ke titik */}
                      <line
                        x1={60}
                        y1={py}
                        x2={px}
                        y2={py}
                        stroke={color}
                        strokeWidth={1.8}
                        strokeDasharray="3 3"
                        strokeOpacity={1}
                      />

                      {/* Vertical Guideline dari titik ke sumbu X */}
                      <line
                        x1={px}
                        y1={py}
                        x2={px}
                        y2={265}
                        stroke={color}
                        strokeWidth={1.8}
                        strokeDasharray="3 3"
                        strokeOpacity={1}
                      />

                      {/* Teks Persentase Y di pertemuan garis siku-siku dengan sumbu Y (Normal teks saja tanpa outline/box) */}
                      <text
                        x={52}
                        y={py + 3.5}
                        textAnchor="end"
                        fill={isDark ? "#f4f4f5" : "#09090b"}
                        fontSize="10"
                        fontWeight="600"
                        fontFamily="Inter, sans-serif"
                      >
                        {plot.yComplexity}%
                      </text>

                      {/* Teks Persentase X di pertemuan garis siku-siku dengan sumbu X (Normal teks saja tanpa outline/box) */}
                      <text
                        x={px}
                        y={278}
                        textAnchor="middle"
                        fill={isDark ? "#f4f4f5" : "#09090b"}
                        fontSize="10"
                        fontWeight="600"
                        fontFamily="Inter, sans-serif"
                      >
                        {plot.xMaturity}%
                      </text>
                    </g>
                  )}

                  {/* 2. Target Vertex Point - Stable Anchor at (px, py) with no transform shifts */}
                  {/* Generous invisible hover buffer centered exactly on (px, py) */}
                  <circle
                    cx={px}
                    cy={py}
                    r={16}
                    fill="transparent"
                  />

                  {/* Core Anchor Dot: Normal saja, tidak ada outline bullets, tidak membesar, opacity rendah jika item lain dipilih */}
                  <circle
                    cx={px}
                    cy={py}
                    r={4.5}
                    fill={color}
                    opacity={hasActiveFocus && !isCurrentFocus ? 0.08 : 1}
                    className="pointer-events-none transition-opacity duration-200"
                  />

                  {/* 3. Clean Title Label: Berada di kanan dari point. Tidak jadi tebal saat diklik, hanya mengubah elemen lain jadi opacity sangat rendah (0.08) */}
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="start"
                    fill={isDark ? '#e4e4e7' : '#1e293b'}
                    fontSize="10"
                    fontWeight="500"
                    fontFamily="Inter, sans-serif"
                    className="select-none pointer-events-none transition-opacity duration-200"
                    opacity={hasActiveFocus && !isCurrentFocus ? 0.08 : 1}
                  >
                    {displayName}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Detail Inspector Bar - Fixed height container (h-[96px]) mt-auto so quadrant never shifts or glitches */}
        <div className="mt-auto shrink-0 h-[96px] max-h-[96px] overflow-hidden flex flex-col justify-center">
          {focusedSegment ? (
            <div className="space-y-1 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <span 
                    className="w-2.5 h-2.5 rounded-full shrink-0" 
                    style={{ 
                      backgroundColor: focusedSegment.tier === 'Tier 1 Prime Target' ? '#e11d48' :
                                       focusedSegment.tier === 'Tier 2 High Growth' ? '#0ea5e9' : '#a1a1aa' 
                    }} 
                  />
                  <span className="font-bold text-neutral-900 dark:text-white truncate max-w-[200px]">{focusedSegment.name}</span>
                  {focusedSegment.tier === 'Tier 1 Prime Target' ? (
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/10 dark:bg-rose-950/70 border border-rose-300 dark:border-rose-800/60 text-rose-600 dark:text-rose-300 font-medium shrink-0">
                      {focusedSegment.tier}
                    </span>
                  ) : (
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-500/10 dark:bg-sky-950/70 border border-sky-300 dark:border-sky-800/60 text-sky-600 dark:text-sky-300 font-medium shrink-0">
                      {focusedSegment.tier}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 flex items-center gap-2 font-mono shrink-0">
                  {focusedSegment.tier === 'Tier 1 Prime Target' ? (
                    <>
                      <span>Maturitas (X): <strong className="text-rose-600 dark:text-rose-400 font-bold">{focusedSegment.xMaturity}%</strong></span>
                      <span>·</span>
                      <span>Kompleksitas (Y): <strong className="text-rose-600 dark:text-rose-400 font-bold">{focusedSegment.yComplexity}%</strong></span>
                    </>
                  ) : (
                    <>
                      <span>Maturitas (X): <strong className="text-sky-600 dark:text-sky-400 font-bold">{focusedSegment.xMaturity}%</strong></span>
                      <span>·</span>
                      <span>Kompleksitas (Y): <strong className="text-sky-600 dark:text-sky-400 font-bold">{focusedSegment.yComplexity}%</strong></span>
                    </>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-neutral-700 dark:text-neutral-300 pt-0.5">
                <div className="overflow-hidden">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono text-[10px] block">
                    {isId ? 'Regulasi & Mandat Audit:' : 'Regulatory Triggers:'}
                  </span>
                  <div className="flex flex-nowrap overflow-x-hidden gap-1 mt-1">
                    {focusedSegment.keyDrivers.map((t, i) => (
                      <span 
                        key={i} 
                        className={`text-[9px] font-mono px-1.5 py-0.2 rounded whitespace-nowrap transition-colors ${
                          focusedSegment.tier === 'Tier 1 Prime Target'
                            ? 'bg-rose-500/10 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-900/60 text-rose-600 dark:text-rose-400'
                            : 'bg-sky-500/10 dark:bg-sky-950/40 border border-sky-300 dark:border-sky-900/60 text-sky-600 dark:text-sky-400'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono text-[10px] block">
                    {isId ? 'Rasional & Peluang Bronyx:' : 'Rationale & Value Prop:'}
                  </span>
                  <p className="line-clamp-2 mt-1 leading-snug text-neutral-800 dark:text-neutral-200 text-[10.5px]">
                    {focusedSegment.rationale}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center gap-1.5 py-1">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48] shrink-0" />
                <span className="font-bold text-rose-600 dark:text-rose-400 text-xs shrink-0">
                  {isId ? 'Tier 1 (Sasaran Utama):' : 'Tier 1 (Prime Target):'}
                </span>
                <span className="text-neutral-700 dark:text-neutral-300 truncate text-[11px] sm:text-xs">
                  {isId 
                    ? 'Perbankan Tier-1, Fintech & Bank Digital, BUMN Kritis, Telekomunikasi' 
                    : 'Tier-1 Banks, Fintech & Digital Banks, Critical BUMN, Telecom'}
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9] shrink-0" />
                <span className="font-bold text-sky-600 dark:text-sky-400 text-xs shrink-0">
                  {isId ? 'Tier 2 (Pertumbuhan Tinggi):' : 'Tier 2 (High Growth):'}
                </span>
                <span className="text-neutral-700 dark:text-neutral-300 truncate text-[11px] sm:text-xs">
                  {isId 
                    ? 'Konglomerasi Manufaktur, Tech & E-Commerce, Kesehatan & RS' 
                    : 'Manufacturing Conglomerates, Tech & E-Commerce, Digital Healthcare'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right 5 Cols: 3 Sektor Prioritas Tier-1 Langsung Terbaca (Zero Clicks) */}
      <div className="lg:col-span-5 bg-white dark:bg-[#0b0c12]/95 border border-slate-200 dark:border-neutral-800 p-3.5 sm:p-4 rounded-lg flex flex-col justify-between shadow-sm dark:shadow-xl space-y-2.5 h-full">
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-mono text-neutral-800 dark:text-neutral-300 font-bold uppercase tracking-wider">
              {isId ? SLIDE_04_COPY.quadrant.top3TitleId : SLIDE_04_COPY.quadrant.top3TitleEn}
            </span>
            <span className="text-[10px] font-mono text-rose-500 dark:text-rose-400 font-semibold">
              {SLIDE_04_COPY.quadrant.top3Badge}
            </span>
          </div>

          <div className="space-y-2">
            {PRIORITY_SECTOR_CARDS.map((card) => {
              const shimmerClass = card.colorTheme === 'rose' 
                ? 'card-interactive-shimmer' 
                : card.colorTheme === 'sky' 
                ? 'card-interactive-blue' 
                : 'card-interactive-emerald';
              const textPercentClass = card.colorTheme === 'rose'
                ? 'text-rose-400'
                : card.colorTheme === 'sky'
                ? 'text-sky-400'
                : 'text-emerald-400';
              const gradientBar = card.colorTheme === 'rose'
                ? 'from-rose-600 to-rose-400'
                : card.colorTheme === 'sky'
                ? 'from-sky-600 to-sky-400'
                : 'from-emerald-600 to-emerald-400';
              const chipBadgeClass = card.colorTheme === 'rose'
                ? 'sector-badge sector-badge-red'
                : card.colorTheme === 'sky'
                ? 'sector-badge sector-badge-blue'
                : 'sector-badge sector-badge-emerald';

              return (
                <div 
                  key={card.id}
                  className={`p-2.5 sm:p-3 bg-neutral-950/90 border border-neutral-900 rounded space-y-1.5 transition-colors ${shimmerClass} cursor-pointer`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">
                      {isId ? card.titleId : card.titleEn}
                    </span>
                    <span className={`text-xs font-mono font-bold ${textPercentClass}`}>
                      <AnimatedCounter value={card.percentage} duration={2200} />
                    </span>
                  </div>
                  <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: '0%', filter: 'brightness(3)' }}
                      animate={{ width: `${card.percentageNumber}%`, filter: 'brightness(1)' }}
                      transition={{ 
                        width: { duration: 2.2, ease: [0.16, 1, 0.3, 1] },
                        filter: { duration: 1.6, ease: 'easeOut' }
                      }}
                      className={`bg-gradient-to-r ${gradientBar} h-full rounded-full`} 
                    />
                  </div>
                  {/* Visual Regulatory Chips */}
                  <div className="flex flex-wrap gap-1">
                    {card.chips.map((chip, idx) => (
                      <span key={idx} className={`${chipBadgeClass} text-[9px] font-mono px-1.5 py-0.5 bg-neutral-900 text-neutral-300 rounded border border-neutral-800 cursor-pointer`}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 flex items-center justify-between pt-1 border-t border-neutral-900">
                    <span>{isId ? card.focusId : card.focusEn}</span>
                    <span className="text-white font-semibold">{card.roles}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deployment Flexibility Note (Sederhana & Ringkas) */}
        <div className="p-2.5 bg-rose-950/20 border border-rose-900/40 rounded text-[11px] text-rose-200 font-mono flex items-center justify-between card-interactive-shimmer">
          <span>
            {isId ? SLIDE_04_COPY.quadrant.deploymentNoteId : SLIDE_04_COPY.quadrant.deploymentNoteEn}
          </span>
        </div>
      </div>
    </div>
  );
};
