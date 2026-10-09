import React, { useState, useMemo } from 'react';
import { GlobalModal } from './GlobalModal';
import { 
  GLOSSARY_TERMS, 
  GLOSSARY_CATEGORIES, 
  GlossaryCategory, 
  GlossaryTerm 
} from '../data/glossaryData';
import { BookMarked, Search, X, Check, Copy, Tag, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: GlossaryCategory;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'ALL'
}) => {
  const { language } = useLanguage();
  const isId = language === 'id';

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory>(initialCategory);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((t) => {
      // Category match
      if (activeCategory !== 'ALL' && t.category !== activeCategory) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTerm = t.term.toLowerCase().includes(q);
        const matchAcronym = t.acronym ? t.acronym.toLowerCase().includes(q) : false;
        const matchFullName = t.fullNameId.toLowerCase().includes(q) || t.fullNameEn.toLowerCase().includes(q);
        const matchDef = t.definitionId.toLowerCase().includes(q) || t.definitionEn.toLowerCase().includes(q);
        const matchTag = t.tag.toLowerCase().includes(q);
        return matchTerm || matchAcronym || matchFullName || matchDef || matchTag;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const handleCopyDefinition = (term: GlossaryTerm) => {
    const textToCopy = `${term.term} (${isId ? term.fullNameId : term.fullNameEn}):\n${isId ? term.definitionId : term.definitionEn}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(term.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: GLOSSARY_TERMS.length };
    GLOSSARY_CATEGORIES.forEach((cat) => {
      if (cat.id !== 'ALL') {
        counts[cat.id] = GLOSSARY_TERMS.filter((t) => t.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  return (
    <GlobalModal
      isOpen={isOpen}
      onClose={onClose}
      maxWidthClass="max-w-4xl"
      icon={<BookMarked className="w-5 h-5 text-rose-500" />}
      title={
        <div className="flex items-center gap-2">
          <span className="text-white font-extrabold tracking-tight">
            {isId ? 'Glosarium Istilah Siber & Penjualan Enterprise' : 'Cybersecurity & Enterprise Sales Glossary'}
          </span>
          <span className="px-2 py-0.5 text-[10px] font-mono bg-rose-950/70 border border-rose-800 text-rose-300 rounded font-semibold">
            {GLOSSARY_TERMS.length} {isId ? 'Istilah Terverifikasi' : 'Terms Defined'}
          </span>
        </div>
      }
      subtitle={
        <span className="text-xs text-neutral-400 font-sans">
          {isId 
            ? 'Kamus referensi komprehensif seluruh akronim, konsep teknis siber, metrik komersial, dan regulasi yang digunakan dalam strategi 90 hari Bronyx × ITSEC Asia.'
            : 'Comprehensive reference dictionary of all cybersecurity concepts, commercial metrics, and Indonesian regulatory frameworks in this 90-day strategy.'}
        </span>
      }
      footerContent={
        <div className="flex items-center justify-between text-xs text-neutral-400 font-mono w-full">
          <span>
            {isId 
              ? `Menampilkan ${filteredTerms.length} dari ${GLOSSARY_TERMS.length} istilah` 
              : `Showing ${filteredTerms.length} of ${GLOSSARY_TERMS.length} terms`}
          </span>
          <span className="text-rose-400 font-medium">
            PT ITSEC Asia Tbk (IDX: CYBR) × Bronyx AI
          </span>
        </div>
      }
    >
      <div className="space-y-4">
        {/* Search & Category Filter Header */}
        <div className="space-y-2.5">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isId 
                  ? 'Cari istilah, akronim, atau regulasi (cth: UU PDP, POJK, Zero Blast Radius, TAM, MEDDPICC)...' 
                  : 'Search terms, acronyms, or regulations (e.g. UU PDP, POJK, Zero Blast Radius, TAM, MEDDPICC)...'
              }
              className="w-full bg-neutral-950/90 border border-neutral-800 focus:border-rose-500 rounded-lg pl-9 pr-8 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills (No icons, no numbers, red card with pure white text when active) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin text-xs">
            {GLOSSARY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  data-active-tab={isActive ? 'true' : 'false'}
                  className={`px-3 py-1.5 rounded border transition-all whitespace-nowrap cursor-pointer flex items-center font-mono text-[11px] ${
                    isActive
                      ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold border-rose-600 shadow-xs'
                      : 'bg-slate-200/80 dark:bg-neutral-900/90 text-slate-700 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-neutral-700'
                  }`}
                >
                  <span className={isActive ? 'text-white !text-white font-bold' : ''}>
                    {isId ? cat.labelId : cat.labelEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Terms List Grid */}
        <div className="space-y-2.5 max-h-[58vh] overflow-y-auto pr-1 scrollbar-thin">
          {filteredTerms.length === 0 ? (
            <div className="p-8 text-center bg-neutral-950/60 border border-neutral-900 rounded-lg space-y-2">
              <Search className="w-8 h-8 text-neutral-600 mx-auto" />
              <p className="text-xs text-neutral-400 font-mono">
                {isId ? 'Tidak ada istilah yang cocok dengan pencarian Anda' : 'No glossary terms match your search'}
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('ALL'); }}
                className="text-xs text-rose-400 hover:underline font-mono"
              >
                {isId ? 'Reset Pencarian' : 'Reset Search'}
              </button>
            </div>
          ) : (
            filteredTerms.map((term) => {
              const isCopied = copiedId === term.id;
              let categoryLabel = isId ? 'Teknis' : 'Technical';
              let badgeColor = 'bg-rose-950/60 border-rose-800/70 text-rose-300';

              if (term.category === 'REGULATION_GOV') {
                categoryLabel = isId ? 'Regulasi' : 'Regulation';
                badgeColor = 'bg-amber-950/60 border-amber-800/70 text-amber-300';
              } else if (term.category === 'COMMERCIAL_SALES') {
                categoryLabel = isId ? 'Komersial' : 'Commercial';
                badgeColor = 'bg-emerald-950/60 border-emerald-800/70 text-emerald-300';
              } else if (term.category === 'FINANCIAL_MARKET') {
                categoryLabel = isId ? 'Finansial' : 'Financial';
                badgeColor = 'bg-sky-950/60 border-sky-800/70 text-sky-300';
              }

              return (
                <div
                  key={term.id}
                  className="p-3.5 bg-neutral-950/80 hover:bg-neutral-900/90 border border-neutral-900 hover:border-neutral-800 rounded-lg transition-all space-y-2 group"
                >
                  {/* Top Row: Term Header & Badges */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-sm font-black text-white font-mono tracking-tight group-hover:text-rose-300 transition-colors">
                          {term.term}
                        </h4>
                        {term.acronym && term.acronym !== term.term && (
                          <span className="text-[10px] font-mono text-neutral-500 bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800">
                            {term.acronym}
                          </span>
                        )}
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${badgeColor}`}>
                          {categoryLabel}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900/80 px-2 py-0.5 rounded border border-neutral-800/80 flex items-center gap-1">
                          <Tag className="w-2.5 h-2.5 text-neutral-500" />
                          {term.tag}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-300 font-semibold font-sans">
                        {isId ? term.fullNameId : term.fullNameEn}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyDefinition(term)}
                      className="p-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors flex items-center gap-1 text-[10px] font-mono shrink-0 cursor-pointer"
                      title={isId ? 'Salin definisi ke clipboard' : 'Copy definition'}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">{isId ? 'Tersalin' : 'Copied'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-neutral-400" />
                          <span>{isId ? 'Salin' : 'Copy'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Definition Body */}
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                    {isId ? term.definitionId : term.definitionEn}
                  </p>

                  {/* Context Usage in Strategy */}
                  <div className="pt-2 border-t border-neutral-900 flex items-start gap-2 text-[11px] font-sans">
                    <span className="text-rose-400 font-mono font-semibold shrink-0 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-rose-500" />
                      {isId ? 'Relevansi Strategi:' : 'Strategic Context:'}
                    </span>
                    <span className="text-neutral-400 leading-relaxed">
                      {isId ? term.contextUsageId : term.contextUsageEn}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </GlobalModal>
  );
};
