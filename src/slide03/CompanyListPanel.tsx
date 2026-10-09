import React from 'react';
import { motion } from 'motion/react';
import { TargetAccount, TargetFocusLevel } from './types';
import { SLIDE_03_COPY } from './data';
import { getLevelBadge } from './utils';
import { 
  ShieldAlert, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Eye 
} from 'lucide-react';

interface CompanyListPanelProps {
  listAccounts: TargetAccount[];
  levelFilter: 'ALL' | TargetFocusLevel;
  onToggleLevelFilter: (level: TargetFocusLevel) => void;
  hoveredNodeId: string | null;
  expandedCompanyId: string | null;
  onSelectCompany: (account: TargetAccount) => void;
  onHoverNode: (id: string | null) => void;
  onOpenModal: (account: TargetAccount) => void;
  isId: boolean;
}

export const CompanyListPanel: React.FC<CompanyListPanelProps> = ({
  listAccounts,
  levelFilter,
  onToggleLevelFilter,
  hoveredNodeId,
  expandedCompanyId,
  onSelectCompany,
  onHoverNode,
  onOpenModal,
  isId
}) => {
  return (
    <div className="lg:col-span-5 bg-white dark:bg-[#0e0f17] border border-slate-200 dark:border-neutral-900 p-3 sm:p-3.5 rounded-lg flex flex-col justify-between shadow-none h-full min-h-0">
      <div className="space-y-2 flex-1 min-h-0 flex flex-col">
        {/* List Header: Title on Left, Direct Filter Tabs on Right */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-neutral-900 pb-2 shrink-0">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
            {isId ? SLIDE_03_COPY.listTitle.id : SLIDE_03_COPY.listTitle.en}
          </h3>

          {/* Direct Level Filter Tabs: Fokus, Strategis, Prospek (Click to toggle/switch filter) */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none text-[10px] font-mono p-0.5 bg-slate-200/70 dark:bg-neutral-900 border border-slate-300 dark:border-neutral-800 rounded-md">
            <button
              type="button"
              onClick={() => onToggleLevelFilter('FOCUS_PRIMARY')}
              data-active-tab={levelFilter === 'FOCUS_PRIMARY' ? 'true' : 'false'}
              className={`px-2.5 py-0.5 rounded transition-all whitespace-nowrap cursor-pointer shadow-none ${
                levelFilter === 'FOCUS_PRIMARY'
                  ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={isId ? 'Klik untuk aktifkan/lepas filter Fokus' : 'Click to toggle Focus filter'}
            >
              <span className={levelFilter === 'FOCUS_PRIMARY' ? 'text-white !text-white font-bold' : ''}>
                {isId ? 'Fokus' : 'Focus'}
              </span>
            </button>
            <button
              type="button"
              onClick={() => onToggleLevelFilter('MEDIUM_PRIORITY')}
              data-active-tab={levelFilter === 'MEDIUM_PRIORITY' ? 'true' : 'false'}
              className={`px-2.5 py-0.5 rounded transition-all whitespace-nowrap cursor-pointer shadow-none ${
                levelFilter === 'MEDIUM_PRIORITY'
                  ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={isId ? 'Klik untuk aktifkan/lepas filter Strategis' : 'Click to toggle Strategic filter'}
            >
              <span className={levelFilter === 'MEDIUM_PRIORITY' ? 'text-white !text-white font-bold' : ''}>
                {isId ? 'Strategis' : 'Strategic'}
              </span>
            </button>
            <button
              type="button"
              onClick={() => onToggleLevelFilter('LEVEL_3_PROSPECT')}
              data-active-tab={levelFilter === 'LEVEL_3_PROSPECT' ? 'true' : 'false'}
              className={`px-2.5 py-0.5 rounded transition-all whitespace-nowrap cursor-pointer shadow-none ${
                levelFilter === 'LEVEL_3_PROSPECT'
                  ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={isId ? 'Klik untuk aktifkan/lepas filter Prospek' : 'Click to toggle Prospect filter'}
            >
              <span className={levelFilter === 'LEVEL_3_PROSPECT' ? 'text-white !text-white font-bold' : ''}>
                {isId ? 'Prospek' : 'Prospect'}
              </span>
            </button>
          </div>
        </div>

        {/* Scrollable Company List with Dual-Layer Slot Morphing & Dropdown Details */}
        <div className="space-y-1.5 flex-1 min-h-[160px] overflow-y-auto pr-1 scrollbar-thin">
          {listAccounts.length === 0 ? (
            <div className="p-4 text-center text-xs text-neutral-500 font-mono">
              {isId ? SLIDE_03_COPY.emptyList.id : SLIDE_03_COPY.emptyList.en}
            </div>
          ) : (
            listAccounts.map((acc, index) => {
              const levelBadge = getLevelBadge(acc.targetLevel);
              const isHovered = acc.id === hoveredNodeId;
              const isExpanded = acc.id === expandedCompanyId;

              const isFokus = acc.targetLevel === 'FOCUS_PRIMARY';
              const isStrategis = acc.targetLevel === 'MEDIUM_PRIORITY';
              const isProspek = acc.targetLevel === 'LEVEL_3_PROSPECT';

              let cardThemeClass = '';
              if (isStrategis) {
                // Gradasi kuning di tema terang
                cardThemeClass = 'company-card-strategis bg-gradient-to-r from-amber-50/90 via-amber-100/65 to-amber-50/85 border-amber-300/80 hover:border-amber-400 dark:from-amber-950/20 dark:via-neutral-950 dark:to-neutral-950 dark:border-amber-900/60 dark:hover:border-amber-700/80';
                if (isExpanded || isHovered) {
                  cardThemeClass += ' border-amber-500! dark:border-amber-500/90!';
                }
              } else if (isProspek) {
                // Gradasi abu tipis di tema terang
                cardThemeClass = 'company-card-prospek bg-gradient-to-r from-slate-50 via-slate-100/70 to-slate-50/80 border-slate-200/90 hover:border-slate-300 dark:from-neutral-950 dark:via-neutral-900/40 dark:to-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-700';
                if (isExpanded || isHovered) {
                  cardThemeClass += ' border-slate-400! dark:border-neutral-400/80!';
                }
              } else {
                // Fokus: Permukaan bersih dengan aksen rose
                cardThemeClass = 'company-card-fokus bg-white border-slate-200/90 hover:border-rose-300 dark:bg-neutral-950/80 dark:border-neutral-900 dark:hover:border-neutral-800';
                if (isExpanded || isHovered) {
                  cardThemeClass += ' border-rose-500! dark:border-rose-500/90!';
                }
              }

              const scoreTextColor = isStrategis 
                ? 'text-amber-700 dark:text-amber-400' 
                : isProspek 
                ? 'text-slate-700 dark:text-neutral-300' 
                : 'text-rose-600 dark:text-rose-400';

              const barGradient = isStrategis 
                ? 'from-amber-600 to-amber-400' 
                : isProspek 
                ? 'from-slate-600 to-slate-400' 
                : 'from-rose-600 to-rose-400';

              const actionBoxClass = isStrategis
                ? 'bg-amber-50/90 border-amber-300/80 text-amber-950 dark:bg-amber-950/40 dark:border-amber-900/60 dark:text-amber-100'
                : isProspek
                ? 'bg-slate-100/90 border-slate-200 text-slate-800 dark:bg-neutral-900/90 dark:border-neutral-700 dark:text-neutral-200'
                : 'bg-rose-50/90 border-rose-200/90 text-rose-950 dark:bg-rose-950/40 dark:border-rose-900/60 dark:text-rose-100';

              const actionTitleClass = isStrategis 
                ? 'text-amber-800 dark:text-amber-300' 
                : isProspek 
                ? 'text-slate-700 dark:text-neutral-300' 
                : 'text-rose-700 dark:text-rose-300';

              const modalBtnClass = isStrategis 
                ? 'text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300' 
                : isProspek 
                ? 'text-slate-700 hover:text-slate-900 dark:text-neutral-300 dark:hover:text-white' 
                : 'text-rose-700 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300';

              return (
                // LAYER 1 (WADAH / SLOT STABIL): Key berbasis index slot agar DOM tidak dihancurkan saat berganti tab sektor
                <motion.div
                  id={`company-card-${acc.id}`}
                  key={`company-slot-${index}`}
                  layout
                  transition={{
                    layout: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
                  }}
                  onClick={() => onSelectCompany(acc)}
                  onMouseEnter={() => onHoverNode(acc.id)}
                  onMouseLeave={() => onHoverNode(null)}
                  className={`company-account-card rounded border transition-all duration-200 cursor-pointer overflow-hidden company-card-no-shadow shadow-none ${cardThemeClass}`}
                >
                  {/* LAYER 2 (KONTEN DINAMIS): Key berbasis ID akun unik untuk soft crossfade + scale morph */}
                  <motion.div
                    key={acc.id}
                    initial={{ opacity: 0, scale: 0.96, y: 4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.32, ease: 'easeOut' }}
                    className="p-2.5 flex items-center justify-between gap-2"
                  >
                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate font-sans">{acc.name}</h4>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 dark:text-neutral-400">
                        <span>{acc.city}</span>
                        <span className="text-slate-400 dark:text-neutral-600">·</span>
                        <span>{acc.stockTicker || acc.listingStatus}</span>
                      </div>
                    </div>

                    <div className="text-right shrink-0 flex items-center gap-2">
                      <div className="flex items-center gap-1.5 font-mono">
                        <span className={`inline-block px-1.5 py-0.5 text-[9px] rounded border ${levelBadge.badgeClass}`}>
                          {isId ? levelBadge.labelId : levelBadge.labelEn}
                        </span>
                        <span className="text-slate-400 dark:text-neutral-600 text-xs font-normal">|</span>
                        <span className={`text-xs font-black ${scoreTextColor}`}>
                          {acc.opportunityScore}<span className="text-[9px] text-slate-500 dark:text-neutral-500 font-normal">/100</span>
                        </span>
                      </div>
                      <div className="text-slate-500 hover:text-slate-800 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer shrink-0">
                        {isExpanded ? (
                          <ChevronUp className={`w-4 h-4 ${scoreTextColor}`} />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 dark:text-neutral-500" />
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Dropdown Details Panel Directly Underneath Card */}
                  {isExpanded && (
                    <div className="company-detail-panel border-t border-slate-200 dark:border-neutral-800/80 bg-slate-50/80 dark:bg-[#050608] p-3 space-y-3 font-sans text-xs">
                      {/* 5-Dimensional Score Breakdown */}
                      <div className="bg-white dark:bg-neutral-900/90 p-2.5 rounded border border-slate-200 dark:border-neutral-800 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 dark:text-neutral-400 uppercase font-semibold">
                          <span>{isId ? 'Model Pembobotan Komposit (5-Dimensi)' : '5-Dimensional Composite Model'}</span>
                          <span className={`font-bold ${scoreTextColor}`}>{acc.opportunityScore}/100</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-0.5">
                          {[
                            { label: isId ? 'Kompleksitas Digital' : 'Digital Complexity', val: acc.digitalComplexity },
                            { label: isId ? 'Paparan Risiko' : 'Security Exposure', val: acc.securityExposure },
                            { label: isId ? 'Tekanan Regulasi' : 'Regulatory Pressure', val: acc.regulatoryPressure },
                            { label: isId ? 'Skala Bisnis' : 'Business Scale', val: acc.businessScale },
                            { label: isId ? 'Kesesuaian Produk' : 'Potential Fit', val: acc.potentialFit }
                          ].map(d => (
                            <div key={d.label} className="p-1.5 bg-slate-50 dark:bg-neutral-950/80 rounded border border-slate-200 dark:border-neutral-800/80 space-y-1">
                              <div className="flex items-center justify-between text-[10px] font-mono">
                                <span className="text-slate-700 dark:text-neutral-300 truncate">{d.label}</span>
                                <span className="text-slate-900 dark:text-white font-bold">{d.val}/20</span>
                              </div>
                              <div className="h-1.5 w-full bg-slate-200 dark:bg-neutral-900 rounded overflow-hidden">
                                <div 
                                  className={`h-full bg-gradient-to-r ${barGradient} rounded`}
                                  style={{ width: `${(d.val / 20) * 100}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Decision Center & Relevance */}
                      <div className="space-y-2">
                        <div className="p-2.5 bg-white dark:bg-neutral-900/90 border border-slate-200 dark:border-neutral-800 rounded space-y-0.5">
                          <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase block font-semibold">
                            {isId ? 'Pusat Target Pembuat Keputusan:' : 'Target Decision Center:'}
                          </span>
                          <span className="text-slate-900 dark:text-white font-mono text-xs font-semibold block">{acc.potentialBuyer}</span>
                        </div>

                        <div className="p-2.5 bg-white dark:bg-neutral-900/90 border border-slate-200 dark:border-neutral-800 rounded space-y-1">
                          <span className={`text-[10px] font-mono uppercase font-semibold flex items-center gap-1 ${actionTitleClass}`}>
                            <ShieldAlert className="w-3.5 h-3.5" />
                            {isId ? 'Alasan Relevansi Strategis Bronyx AI:' : 'Bronyx AI Strategic Relevance:'}
                          </span>
                          <p className="text-slate-700 dark:text-neutral-200 text-xs leading-relaxed">
                            {acc.whyRelevant}
                          </p>
                        </div>

                        <div className={`p-2.5 rounded border space-y-1 ${actionBoxClass}`}>
                          <span className={`text-[10px] font-mono uppercase font-semibold flex items-center gap-1 ${actionTitleClass}`}>
                            <ArrowRight className="w-3.5 h-3.5" />
                            {isId ? 'Aksi Taktis Penjualan (Sales Action):' : 'Next Tactical Sales Action:'}
                          </span>
                          <p className="text-xs font-sans leading-relaxed">
                            {acc.nextSalesAction}
                          </p>
                        </div>
                      </div>

                      {/* Footer Action to open full Modal if needed */}
                      <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-neutral-400 border-t border-slate-200 dark:border-neutral-800/60">
                        <span>{acc.companySize} · {acc.subSector}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenModal(acc);
                          }}
                          className={`font-bold underline cursor-pointer flex items-center gap-1 ${modalBtnClass}`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          {isId ? 'Buka Dossier Modal' : 'Open Full Dossier'}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
