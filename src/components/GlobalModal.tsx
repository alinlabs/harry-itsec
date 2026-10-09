import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

interface GlobalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  maxWidthClass?: string;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
}

export const GlobalModal: React.FC<GlobalModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  icon,
  maxWidthClass = 'max-w-4xl',
  children,
  footerContent
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm sm:backdrop-blur-md p-3 sm:p-4"
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`relative w-full ${maxWidthClass} max-h-[88vh] rounded-xl flex flex-col shadow-2xl overflow-hidden font-sans border transition-colors ${
              isLight 
                ? 'bg-white border-slate-200 text-slate-800' 
                : 'bg-[#0c0d14] border-neutral-800/90 text-neutral-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`flex items-center justify-between px-5 sm:px-6 py-4 border-b ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#08090d] border-neutral-800/80'
            }`}>
              <div className="flex items-center gap-3">
                {icon && (
                  <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 border ${
                    isLight 
                      ? 'bg-rose-50 border-rose-200 text-rose-600' 
                      : 'bg-rose-950/60 border-rose-700/50 text-rose-500'
                  }`}>
                    {icon}
                  </div>
                )}
                <div>
                  <div className={`text-base font-bold tracking-wide flex items-center gap-2 ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}>
                    {title}
                  </div>
                  {subtitle && (
                    <div className={`text-xs mt-0.5 ${
                      isLight ? 'text-slate-500' : 'text-neutral-400'
                    }`}>
                      {subtitle}
                    </div>
                  )}
                </div>
              </div>

              {/* Close button X icon in top right ONLY */}
              <button
                onClick={onClose}
                className={`p-1.5 rounded-lg transition-all shrink-0 cursor-pointer btn-interactive ${
                  isLight 
                    ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-200' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
              {children}
            </div>

            {/* Footer (Info only, NO close button) */}
            {footerContent && (
              <div className={`px-5 sm:px-6 py-3 border-t text-xs flex items-center justify-between ${
                isLight 
                  ? 'bg-slate-50 border-slate-200 text-slate-500' 
                  : 'bg-[#08090d] border-neutral-800/80 text-neutral-400'
              }`}>
                {footerContent}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

