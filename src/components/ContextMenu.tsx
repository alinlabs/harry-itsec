import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  LayoutGrid, 
  BookMarked,
  Copy, 
  ShieldAlert, 
  Check, 
  ExternalLink, 
  ChevronRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface ContextMenuProps {
  x: number;
  y: number;
  isOpen: boolean;
  onClose: () => void;
  onOpenDataModal: () => void;
  onOpenDrawer: () => void;
  onOpenGlossaryModal?: () => void;
  currentSlide: number;
  slideTitle: string;
  chapterName: string;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  isOpen,
  onClose,
  onOpenDataModal,
  onOpenDrawer,
  onOpenGlossaryModal,
  currentSlide,
  slideTitle,
  chapterName
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const isId = language === 'id';
  const menuRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = React.useState(false);

  // Close context menu on outside click or scroll or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleScroll = () => {
      if (isOpen) onClose();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('scroll', handleScroll, true);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll, true);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Adjust coordinates to ensure menu stays within viewport
  const adjustedX = Math.min(x, (typeof window !== 'undefined' ? window.innerWidth : 1200) - 280);
  const adjustedY = Math.min(y, (typeof window !== 'undefined' ? window.innerHeight : 800) - 320);

  const handleCopySummary = () => {
    const summaryText = `[PT ITSEC Asia Tbk - Bronyx Sales Lead Strategy]\nSlide ${String(currentSlide).padStart(2, '0')}: ${chapterName} - ${slideTitle}\nStatus: Confidential Enterprise Commercial Architecture`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95, y: -4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -4 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          style={{ top: `${adjustedY}px`, left: `${adjustedX}px` }}
          className={`fixed z-50 w-72 rounded-xl shadow-2xl backdrop-blur-md p-2 font-sans text-xs border ${
            isLight 
              ? 'bg-white/98 border-slate-200 text-slate-800' 
              : 'bg-[#0a0b12]/95 border-rose-900/60 text-neutral-200'
          }`}
          onClick={(e) => e.stopPropagation()}
        >

      {/* Context Header */}
      <div className={`px-3 py-2 border-b mb-1 flex items-center justify-between rounded-t-lg ${
        isLight ? 'border-slate-200 bg-rose-50/60' : 'border-neutral-800/80 bg-rose-950/20'
      }`}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-rose-400">
            {isId ? 'REFERENSI & NAVIGASI TAKTIS' : 'TACTICAL REFERENCES & NAV'}
          </span>
        </div>
        <span className="font-mono text-[10px] text-neutral-400">
          Slide {String(currentSlide).padStart(2, '0')}
        </span>
      </div>

      {/* Menu Actions */}
      <div className="space-y-0.5">
        {/* Action 1: Inspect Sources & References Modal */}
        <button
          onClick={() => {
            onOpenDataModal();
            onClose();
          }}
          className="w-full text-left px-3 py-2 rounded-lg hover:bg-rose-950/50 hover:text-white flex items-center justify-between text-neutral-200 transition-colors group"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded bg-rose-900/40 border border-rose-800/60 text-rose-400 group-hover:text-white transition-colors">
              <FileText className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-semibold block text-xs">
                {isId ? 'Lihat Sumber & Metodologi' : 'Inspect Sources & Methodology'}
              </span>
              <span className="text-[10px] text-neutral-400 block font-mono">
                {isId ? 'IDX (CYBR), Statista, OJK, BSSN' : 'IDX (CYBR), Statista, OJK, BSSN'}
              </span>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-rose-400 transition-colors" />
        </button>

        {/* Action 1.5: Glosarium Istilah Modal */}
        {onOpenGlossaryModal && (
          <button
            onClick={() => {
              onOpenGlossaryModal();
              onClose();
            }}
            className="w-full text-left px-3 py-2 rounded-lg hover:bg-rose-950/50 hover:text-white flex items-center justify-between text-neutral-200 transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1 rounded bg-rose-900/40 border border-rose-800/60 text-rose-400 group-hover:text-white transition-colors">
                <BookMarked className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-semibold block text-xs">
                  {isId ? 'Glosarium Istilah Lengkap' : 'Comprehensive Terms Glossary'}
                </span>
                <span className="text-[10px] text-neutral-400 block font-mono">
                  {isId ? 'Kamus konsep siber, sales & regulasi' : 'Cyber, sales & regulatory dictionary'}
                </span>
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-rose-400 transition-colors" />
          </button>
        )}

        {/* Action 2: Master Slide Index */}
        <button
          onClick={() => {
            onOpenDrawer();
            onClose();
          }}
          className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-800/80 hover:text-white flex items-center justify-between text-neutral-200 transition-colors group"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded bg-neutral-800 text-neutral-300 group-hover:text-white transition-colors">
              <LayoutGrid className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-medium block text-xs">
                {isId ? 'Indeks Slide Presentasi (11 Slide)' : 'Presentation Master Index (11)'}
              </span>
              <span className="text-[10px] text-neutral-400 block font-mono">
                {isId ? 'Lompat langsung ke bab' : 'Jump to chapter directly'}
              </span>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-rose-400 transition-colors" />
        </button>

        {/* Action 4: Copy Briefing */}
        <button
          onClick={handleCopySummary}
          className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-800/80 hover:text-white flex items-center justify-between text-neutral-200 transition-colors group"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded bg-neutral-800 text-neutral-300 group-hover:text-white transition-colors">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </div>
            <div>
              <span className="font-medium block text-xs">
                {copied 
                  ? (isId ? 'Tersalin ke Clipboard!' : 'Copied to Clipboard!') 
                  : (isId ? 'Salin Ringkasan Slide' : 'Copy Executive Briefing')}
              </span>
              <span className="text-[10px] text-neutral-400 block font-mono">
                {isId ? 'Ringkasan taktis slide aktif' : 'Active slide tactical summary'}
              </span>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-rose-400 transition-colors" />
        </button>
      </div>

      {/* Security Protection Footer */}
      <div className="mt-1.5 pt-2 border-t border-neutral-800/80 px-2 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span className="flex items-center gap-1 text-rose-400">
          <ShieldAlert className="w-3 h-3" />
          {isId ? 'Proteksi Dokumen Taktis' : 'Confidential Sales Strategy'}
        </span>
        <span>PT ITSEC Asia Tbk</span>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
