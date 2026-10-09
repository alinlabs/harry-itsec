import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TargetAccount, TargetFocusLevel } from './types';
import { CENTER_LABEL_MAP, SLIDE_03_COPY } from './data';
import { getShortName, getLevelBadge, calculateNodePos } from './utils';

interface MindMapCanvasProps {
  selectedFilter: string;
  activeSectorIndex: number;
  displayedAccounts: TargetAccount[];
  focusAccounts: TargetAccount[];
  strategicAccounts: TargetAccount[];
  prospectAccounts: TargetAccount[];
  levelFilter: 'ALL' | TargetFocusLevel;
  hoveredNodeId: string | null;
  expandedCompanyId: string | null;
  onCanvasClick: () => void;
  onSelectCompany: (account: TargetAccount) => void;
  onHoverNode: (id: string | null) => void;
  isId: boolean;
  language: 'id' | 'en';
}

export const MindMapCanvas: React.FC<MindMapCanvasProps> = ({
  selectedFilter,
  activeSectorIndex,
  displayedAccounts,
  focusAccounts,
  strategicAccounts,
  prospectAccounts,
  levelFilter,
  hoveredNodeId,
  expandedCompanyId,
  onCanvasClick,
  onSelectCompany,
  onHoverNode,
  isId,
  language
}) => {
  // Radial Mind Map Positioning Geometry
  const centerCX = 430;
  const centerCY = 325;
  const nodeCount = displayedAccounts.length;
  const sectorAngleOffset = activeSectorIndex * (Math.PI / 4.5);

  const centerLabelObj = CENTER_LABEL_MAP[selectedFilter] || CENTER_LABEL_MAP['Banking'];
  const centerLabelText = centerLabelObj[language] || centerLabelObj.id;
  const centerWords = centerLabelText.split(' ');
  const centerHasTwoLines = centerWords.length > 1;

  const getNodePos = (account: TargetAccount, globalIdx: number) => {
    return calculateNodePos(
      account,
      globalIdx,
      centerCX,
      centerCY,
      nodeCount,
      sectorAngleOffset,
      focusAccounts,
      strategicAccounts,
      prospectAccounts
    );
  };

  return (
    <div className="lg:col-span-7 flex flex-col justify-between relative overflow-hidden h-full">
      {/* Radial Mind Map SVG Render (Clean, contained responsive canvas) */}
      <div className="relative w-full flex-1 min-h-[280px] flex items-center justify-center py-0.5">
        <svg
          viewBox="0 0 860 650"
          className="w-full h-full max-h-[460px] xl:max-h-[500px] select-none"
          preserveAspectRatio="xMidYMid meet"
          onClick={onCanvasClick}
        >
          {/* Invisible Backdrop Rect to detect clicks outside circles */}
          <rect width="860" height="650" fill="transparent" className="cursor-default" />

          <defs>
            <filter id="centerGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.8" />
            </filter>
            <filter id="focusedGlowRed" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#e11d48" floodOpacity="0.85" />
            </filter>
            <filter id="focusedGlowAmber" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.85" />
            </filter>
            <filter id="focusedGlowGray" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#a1a1aa" floodOpacity="0.75" />
            </filter>
          </defs>

          {/* 3 Concentric Orbit Reference Circles with Gentle Morphing Swirl */}
          <motion.circle
            cx={centerCX}
            cy={centerCY}
            r="118"
            fill="none"
            stroke="#e11d48"
            strokeWidth={levelFilter === 'FOCUS_PRIMARY' ? 1.8 : 1}
            strokeOpacity={levelFilter === 'FOCUS_PRIMARY' ? 0.7 : 0.25}
            strokeDasharray="4 4"
            animate={{ rotate: activeSectorIndex * 30 }}
            style={{ transformOrigin: `${centerCX}px ${centerCY}px` }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.circle
            cx={centerCX}
            cy={centerCY}
            r="198"
            fill="none"
            stroke="#f59e0b"
            strokeWidth={levelFilter === 'MEDIUM_PRIORITY' ? 1.8 : 1}
            strokeOpacity={levelFilter === 'MEDIUM_PRIORITY' ? 0.7 : 0.2}
            strokeDasharray="4 4"
            animate={{ rotate: -activeSectorIndex * 22 }}
            style={{ transformOrigin: `${centerCX}px ${centerCY}px` }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.circle
            cx={centerCX}
            cy={centerCY}
            r="270"
            fill="none"
            stroke="#71717a"
            strokeWidth={levelFilter === 'LEVEL_3_PROSPECT' ? 1.8 : 1}
            strokeOpacity={levelFilter === 'LEVEL_3_PROSPECT' ? 0.7 : 0.15}
            strokeDasharray="4 4"
            animate={{ rotate: activeSectorIndex * 15 }}
            style={{ transformOrigin: `${centerCX}px ${centerCY}px` }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Connecting Spoke Lines with Smooth Morphing Trajectories */}
          {displayedAccounts.map((account, index) => {
            const { nodeX, nodeY } = getNodePos(account, index);
            const isHovered = account.id === hoveredNodeId;
            const levelInfo = getLevelBadge(account.targetLevel);

            const isAnyFilterActive = levelFilter !== 'ALL' || hoveredNodeId !== null || expandedCompanyId !== null;
            const isFocused = account.id === expandedCompanyId || (isAnyFilterActive && (
              (levelFilter !== 'ALL' && account.targetLevel === levelFilter) ||
              (hoveredNodeId !== null && account.id === hoveredNodeId)
            ));
            const isDimmed = isAnyFilterActive && !isFocused;

            let strokeColor = levelInfo.colorHex;
            let strokeWidth = account.targetLevel === 'FOCUS_PRIMARY' ? 2.0 : 1.2;
            let strokeOpacity = 0.5;

            if (isFocused) {
              strokeColor = account.targetLevel === 'FOCUS_PRIMARY'
                ? '#f43f5e'
                : account.targetLevel === 'MEDIUM_PRIORITY'
                ? '#f59e0b'
                : '#a1a1aa';
              strokeWidth = 2.8;
              strokeOpacity = 0.95;
            } else if (isDimmed) {
              strokeColor = '#27272a';
              strokeWidth = 0.8;
              strokeOpacity = 0.12;
            } else if (isHovered) {
              strokeColor = levelInfo.colorHex;
              strokeWidth = 2.5;
              strokeOpacity = 1.0;
            }

            return (
              <motion.line
                key={`spoke-slot-${index}`}
                x1={centerCX}
                y1={centerCY}
                animate={{
                  x2: nodeX,
                  y2: nodeY,
                  stroke: strokeColor,
                  strokeWidth: strokeWidth,
                  opacity: strokeOpacity
                }}
                transition={{
                  x2: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                  y2: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                  stroke: { duration: 0.3 },
                  strokeWidth: { duration: 0.3 },
                  opacity: { duration: 0.3 }
                }}
                strokeDasharray={account.targetLevel === 'LEVEL_3_PROSPECT' && !isFocused ? '3 3' : 'none'}
              />
            );
          })}

          {/* Center Target Hub Circle (Pure Red Fill, Zero Stroke) with Soft Morph Pulse */}
          <motion.g
            key={`center-hub-${selectedFilter}`}
            initial={{ scale: 0.92, opacity: 0.85 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.04 }}
            className="cursor-pointer"
            onClick={(e) => { e.stopPropagation(); onCanvasClick(); }}
            style={{ transformOrigin: `${centerCX}px ${centerCY}px` }}
          >
            <circle
              cx={centerCX}
              cy={centerCY}
              r="48"
              fill="#e11d48"
              filter="url(#centerGlow)"
              className="transition-transform duration-300"
            />
            <circle
              cx={centerCX}
              cy={centerCY}
              r="44"
              fill="#f43f5e"
              stroke="none"
              strokeWidth="0"
            />
            {centerHasTwoLines ? (
              <text
                x={centerCX}
                y={centerCY}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#ffffff"
                fontFamily="Inter, sans-serif"
                className="font-extrabold select-none pointer-events-none"
              >
                <tspan x={centerCX} dy="-6" fontSize="13" fontWeight="900">{centerWords[0]}</tspan>
                <tspan x={centerCX} dy="15" fontSize="13" fontWeight="900">{centerWords.slice(1).join(' ')}</tspan>
              </text>
            ) : (
              <text
                x={centerCX}
                y={centerCY}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#ffffff"
                fontWeight="900"
                fontSize="14"
                fontFamily="Inter, sans-serif"
                className="select-none pointer-events-none"
              >
                {centerLabelText}
              </text>
            )}
          </motion.g>

          {/* Satellite Company Nodes with Morphing Coordinates & Smooth Hover */}
          <AnimatePresence>
            {displayedAccounts.map((account, index) => {
              const { nodeX, nodeY } = getNodePos(account, index);
              const isHovered = account.id === hoveredNodeId;
              const isExpanded = account.id === expandedCompanyId;
              const levelInfo = getLevelBadge(account.targetLevel);

              const shortName = getShortName(account.name);
              const words = shortName.split(' ');
              const hasTwoLines = words.length > 1;

              // Interactive Focus & Spotlight State
              const isAnyFilterActive = levelFilter !== 'ALL' || hoveredNodeId !== null || expandedCompanyId !== null;

              const isFocused = isExpanded || (isAnyFilterActive && (
                (levelFilter !== 'ALL' && account.targetLevel === levelFilter) ||
                (hoveredNodeId !== null && account.id === hoveredNodeId)
              ));

              const isDimmed = isAnyFilterActive && !isFocused;

              let radius = 29;
              let circleFill = "#ffffff";
              let circleStroke = levelInfo.colorHex;
              let circleStrokeWidth = account.targetLevel === 'FOCUS_PRIMARY' ? 2.5 : 1.8;
              let textColor = "#000000";
              let groupOpacity = 1.0;
              let filterGlow = "url(#nodeShadow)";

              if (isFocused) {
                radius = 34;
                if (account.targetLevel === 'FOCUS_PRIMARY') {
                  circleFill = "#e11d48";
                  circleStroke = "#e11d48";
                  textColor = "#ffffff";
                  filterGlow = "url(#focusedGlowRed)";
                } else if (account.targetLevel === 'MEDIUM_PRIORITY') {
                  circleFill = "#f59e0b";
                  circleStroke = "#f59e0b";
                  textColor = "#ffffff";
                  filterGlow = "url(#focusedGlowAmber)";
                } else {
                  circleFill = "#e4e4e7";
                  circleStroke = "#a1a1aa";
                  textColor = "#000000";
                  filterGlow = "url(#focusedGlowGray)";
                }
                circleStrokeWidth = 0;
                groupOpacity = 1.0;
              } else if (isDimmed) {
                radius = 23;
                circleFill = "#18181b";
                circleStroke = "#3f3f46";
                circleStrokeWidth = 1.2;
                textColor = "#a1a1aa";
                groupOpacity = 0.25;
                filterGlow = "none";
              } else if (isHovered) {
                radius = 33;
                circleStroke = levelInfo.colorHex;
                circleStrokeWidth = 2.8;
              }

              return (
                <motion.g
                  key={`satellite-slot-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.3,
                    x: centerCX,
                    y: centerCY
                  }}
                  animate={{
                    opacity: groupOpacity,
                    scale: 1,
                    x: nodeX,
                    y: nodeY
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.3,
                    x: centerCX,
                    y: centerCY,
                    transition: { duration: 0.35, ease: 'easeIn' }
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{
                    x: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                    y: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                    scale: { duration: 0.3, ease: 'easeOut' },
                    opacity: { duration: 0.3 }
                  }}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCompany(account);
                  }}
                  onMouseEnter={() => onHoverNode(account.id)}
                  onMouseLeave={() => onHoverNode(null)}
                  style={{ transformOrigin: '0px 0px' }}
                >
                  {/* Focused Ring Pulsing Glow */}
                  {isFocused && (
                    <circle
                      cx={0}
                      cy={0}
                      r="40"
                      fill="none"
                      stroke={
                        account.targetLevel === 'FOCUS_PRIMARY'
                          ? '#f43f5e'
                          : account.targetLevel === 'MEDIUM_PRIORITY'
                          ? '#f59e0b'
                          : '#a1a1aa'
                      }
                      strokeWidth="2"
                      strokeOpacity="0.8"
                      className="animate-pulse"
                    />
                  )}

                  {/* Satellite Circle (Clean, smooth hover & fill transitions) */}
                  <motion.circle
                    cx={0}
                    cy={0}
                    r={radius}
                    fill={circleFill}
                    stroke={circleStroke}
                    strokeWidth={circleStrokeWidth}
                    filter={filterGlow}
                    animate={{
                      r: radius,
                      fill: circleFill,
                      stroke: circleStroke,
                      strokeWidth: circleStrokeWidth
                    }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                  />

                  {/* Company Name Inside Circle with Smooth Morph / Fade */}
                  <motion.g
                    key={account.id}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {hasTwoLines ? (
                      <text
                        x={0}
                        y={0}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill={textColor}
                        fontFamily="Inter, sans-serif"
                        className="select-none pointer-events-none"
                      >
                        <tspan x={0} dy={isFocused ? "-5" : "-4"} fontSize={isFocused ? "10.5" : isDimmed ? "8.5" : "9.5"} fontWeight="900">
                          {words[0]}
                        </tspan>
                        <tspan x={0} dy={isFocused ? "13" : "11"} fontSize={isFocused ? "10.5" : isDimmed ? "8.5" : "9.5"} fontWeight="900">
                          {words.slice(1).join(' ')}
                        </tspan>
                      </text>
                    ) : (
                      <text
                        x={0}
                        y={0}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill={textColor}
                        fontSize={isFocused ? "11.5" : isDimmed ? "9" : "10.5"}
                        fontWeight="900"
                        fontFamily="Inter, sans-serif"
                        className="select-none pointer-events-none"
                      >
                        {shortName}
                      </text>
                    )}
                  </motion.g>
                </motion.g>
              );
            })}
          </AnimatePresence>
        </svg>
      </div>

      {/* Sales Lead Conclusion Text (Sits at bottom of left column, flush & level with bottom of company card panel, without divider or extra title) */}
      <div className="text-xs text-neutral-400 font-sans leading-relaxed shrink-0 pt-2 pb-0.5">
        <p>
          {isId 
            ? SLIDE_03_COPY.salesLeadConclusion.id
            : SLIDE_03_COPY.salesLeadConclusion.en}
        </p>
      </div>
    </div>
  );
};
