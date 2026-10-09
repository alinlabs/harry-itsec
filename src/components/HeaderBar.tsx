import React from 'react';
import { 
  Sun,
  Moon,
  Share2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { UI_TRANSLATIONS } from '../data/translations';
import { ViewportControls } from './ViewportControls';

// Crisp inline SVG flag icons for Indonesia and UK
const FlagID: React.FC<{ className?: string }> = ({ className = 'w-4 h-3' }) => (
  <svg 
    className={`${className} rounded-[2px] overflow-hidden shadow-xs border border-white/20 shrink-0 inline-block align-middle`} 
    viewBox="0 0 600 400" 
    aria-hidden="true"
  >
    <rect width="600" height="200" fill="#E70011" />
    <rect y="200" width="600" height="200" fill="#FFFFFF" />
  </svg>
);

const FlagEN: React.FC<{ className?: string }> = ({ className = 'w-4 h-3' }) => (
  <svg 
    className={`${className} rounded-[2px] overflow-hidden shadow-xs border border-white/20 shrink-0 inline-block align-middle`} 
    viewBox="0 0 60 30" 
    aria-hidden="true"
  >
    <clipPath id="uk-flag-s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
    <clipPath id="uk-flag-t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
    <g clipPath="url(#uk-flag-s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-flag-t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

interface HeaderBarProps {
  currentSlide: number;
  totalSlides: number;
  slideTitle: string;
  chapterName: string;
  onOpenDataModal: () => void;
  onOpenDrawer: () => void;
  onOpenGlossaryModal?: () => void;
  onOpenShareModal?: () => void;
}

// Convert uppercase/shouting text into proper title case
const toProperCase = (text: string): string => {
  if (!text) return '';
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (!word) return '';
      if (word.includes('-')) {
        return word
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join('-');
      }
      if (['kpi', 'arr', 'bumn', 'poc', 'gtm'].includes(word)) {
        return word.toUpperCase();
      }
      if (['dan', 'and'].includes(word)) {
        return word;
      }
      if (word === '&') return '&';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export const HeaderBar: React.FC<HeaderBarProps> = ({
  currentSlide,
  slideTitle: _slideTitle,
  chapterName,
  onOpenDataModal,
  onOpenDrawer,
  onOpenGlossaryModal,
  onOpenShareModal
}) => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07080c]/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Left: Brand / Title */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-neutral-950 border border-neutral-700/80 flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
            <img 
              src="/logo.ico" 
              alt="Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs sm:text-sm font-extrabold tracking-tight font-mono uppercase header-title-shimmer">
              INDONESIA'S CYBERSECURITY MARKET LEADER
            </span>
            <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
              <span>By Harry Gultom</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-300 font-medium">
                {language === 'id' ? `Bab ${currentSlide}: ${toProperCase(chapterName)}` : `Chapter ${currentSlide}: ${toProperCase(chapterName)}`}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Controls without icons, only Glosarium, Sumber, and Daftar Isi separated with bullets, theme to the left of language, language, and share icon at far right */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs">
          {/* Group 1: Navigation links separated only by bullets */}
          <div className="flex items-center gap-2 text-xs">
            {/* 1. Glosarium */}
            {onOpenGlossaryModal && (
              <>
                <button
                  onClick={onOpenGlossaryModal}
                  className="text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer py-1 font-medium"
                  title={language === 'id' ? 'Buka Glosarium Istilah' : 'Open Terms Glossary'}
                >
                  <span>{language === 'id' ? 'Glosarium' : 'Glossary'}</span>
                </button>
                <span className="text-neutral-500 select-none text-[10px] leading-none" aria-hidden="true">•</span>
              </>
            )}

            {/* 2. Sumber */}
            <button
              onClick={onOpenDataModal}
              className="text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer py-1 font-medium"
              title={language === 'id' ? 'Lihat Sumber & Metodologi Resmi' : 'Inspect Sources & Methodology'}
            >
              <span>{UI_TRANSLATIONS.header.dataSources[language]}</span>
            </button>
            <span className="text-neutral-500 select-none text-[10px] leading-none" aria-hidden="true">•</span>

            {/* 3. Daftar Isi */}
            <button
              onClick={onOpenDrawer}
              className="text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer py-1 font-medium"
              title={language === 'id' ? 'Buka Daftar Isi Slide' : 'Open Slide Table of Contents'}
            >
              <span>{UI_TRANSLATIONS.header.slides[language]}</span>
            </button>
          </div>

          {/* Group 2: Utilities (Penyesuaian Adaptif, Tema, Bahasa & Share) */}
          <div className="flex items-center gap-2">
            {/* Viewport & Precision Layout Control */}
            <ViewportControls />

            {/* 4. Tema (Di kiri Bahasa) */}
            <button
              onClick={toggleTheme}
              className="group flex items-center justify-center p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title={
                theme === 'dark'
                  ? (language === 'id' ? 'Beralih ke Mode Terang' : 'Switch to Light Mode')
                  : (language === 'id' ? 'Beralih ke Mode Gelap' : 'Switch to Dark Mode')
              }
              aria-label="Toggle dark/light theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-400 transition-colors shrink-0" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-indigo-400 transition-colors shrink-0" />
              )}
            </button>

            {/* 5. Bahasa */}
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="group flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer py-1 font-medium"
              title={language === 'id' ? 'Ganti ke English (EN)' : 'Ganti ke Bahasa Indonesia (ID)'}
              aria-label={language === 'id' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia'}
            >
              {language === 'id' ? (
                <FlagID className="w-4 h-3" />
              ) : (
                <FlagEN className="w-4 h-3" />
              )}
              <span className="font-mono text-[11px] text-neutral-400 group-hover:text-white uppercase transition-colors">
                {language}
              </span>
            </button>

            {/* 6. Share (Di Paling Kanan, samping kanannya Bahasa, icon saja tanpa dibungkus card) */}
            {onOpenShareModal && (
              <button
                onClick={onOpenShareModal}
                className="group flex items-center justify-center p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                title={language === 'id' ? 'Bagikan Presentasi & Kode QR' : 'Share Presentation & QR Code'}
                aria-label={language === 'id' ? 'Bagikan Presentasi' : 'Share Presentation'}
              >
                <Share2 className="w-3.5 h-3.5 text-neutral-400 group-hover:text-rose-400 transition-colors shrink-0" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
