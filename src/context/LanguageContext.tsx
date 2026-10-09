import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, defaultText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const parseUrlLanguage = (): Language | null => {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const rawLang = params.get('lang')?.toLowerCase();
  if (rawLang === 'en') return 'en';
  if (rawLang === 'id' || rawLang === 'in') return 'id';
  return null;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const urlLang = parseUrlLanguage();
      if (urlLang) {
        localStorage.setItem('bronyx_lang', urlLang);
        return urlLang;
      }
      const saved = localStorage.getItem('bronyx_lang');
      return (saved === 'en' || saved === 'id') ? saved : 'id'; // default is 'id' (Bahasa Indonesia)
    } catch {
      return 'id';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('bronyx_lang', lang);
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        if (url.searchParams.has('lang')) {
          const currentParam = url.searchParams.get('lang')?.toLowerCase();
          // Preserve 'in' if user originally used 'in' when switching back to Indonesian
          const nextParamVal = lang === 'id' ? (currentParam === 'in' ? 'in' : 'id') : 'en';
          url.searchParams.set('lang', nextParamVal);
          window.history.replaceState({}, '', url.toString());
        }
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      try {
        const urlLang = parseUrlLanguage();
        if (urlLang) {
          setLanguageState(urlLang);
          localStorage.setItem('bronyx_lang', urlLang);
        }
      } catch {
        // ignore
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleLanguage = () => {
    const next = language === 'id' ? 'en' : 'id';
    setLanguage(next);
  };

  const t = (key: string, defaultText?: string): string => {
    // In our architecture, components can use language directly or use dictionary lookups
    return defaultText || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
