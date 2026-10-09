import React from 'react';
import { ChevronRight, Grid } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SLIDE_INDEX_LIST_BILINGUAL } from '../data/translations';
import { GlobalModal } from './GlobalModal';

// Keep export for backward compatibility
export const SLIDE_INDEX_LIST = SLIDE_INDEX_LIST_BILINGUAL.map(s => ({
  id: s.id,
  chapter: s.chapter.en,
  title: s.title.en,
  subtitle: s.subtitle.en,
  keyQuestion: s.keyQuestion.en
}));

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideId: number) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide
}) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <GlobalModal
      isOpen={isOpen}
      onClose={onClose}
      icon={<Grid className="w-5 h-5" />}
      title={
        language === 'id' 
          ? 'Indeks Presentasi Master · 11 Slide Strategis' 
          : 'Presentation Master Index · 11 Strategic Slides'
      }
      subtitle={
        language === 'id'
          ? 'Pilih slide untuk melompat langsung ke bab tersebut.'
          : 'Select any slide to jump directly to that chapter.'
      }
      maxWidthClass="max-w-5xl"
      footerContent={
        <>
          <span>PT ITSEC Asia Tbk · Sales Lead Assessment</span>
          <span>{language === 'id' ? 'Klik kartu untuk navigasi cepat' : 'Click any card to navigate immediately'}</span>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {SLIDE_INDEX_LIST_BILINGUAL.map((slide) => {
          const isCurrent = slide.id === currentSlide;
          const chapterText = slide.chapter[language];
          const titleText = slide.title[language];
          const subtitleText = slide.subtitle[language];
          const keyQuestionText = slide.keyQuestion[language];

          return (
            <button
              key={slide.id}
              onClick={() => {
                onSelectSlide(slide.id);
                onClose();
              }}
              className={`text-left p-4 rounded border transition-all flex flex-col justify-between group card-interactive-shimmer cursor-pointer ${
                isCurrent
                  ? 'bg-rose-950/40 border-rose-600/80 shadow-[0_0_15px_rgba(225,29,72,0.15)]'
                  : 'bg-neutral-900/50 hover:bg-neutral-900 border-neutral-800 hover:border-neutral-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-wider text-rose-400 uppercase font-semibold">
                    {chapterText}
                  </span>
                  <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-rose-400' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                    Slide {String(slide.id).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-rose-200 transition-colors mb-1 line-clamp-1">
                  {titleText}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">
                  {subtitleText}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="italic line-clamp-1">"{keyQuestionText}"</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
              </div>
            </button>
          );
        })}
      </div>
    </GlobalModal>
  );
};
