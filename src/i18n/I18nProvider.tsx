import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { messages, type Messages } from './messages';
import { LOCALE_STORAGE_KEY, CKB_ENABLED, type Locale } from './types';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dir: 'ltr' | 'rtl';
  t: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLocale(): Locale {
  if (!CKB_ENABLED) return 'en';
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === 'en' || stored === 'ckb') return stored;
  } catch {
    /* ignore */
  }
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === 'undefined' ? 'en' : readStoredLocale()
  );

  const setLocale = useCallback((next: Locale) => {
    if (!CKB_ENABLED && next === 'ckb') return;
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!CKB_ENABLED && locale !== 'en') {
      setLocaleState('en');
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, 'en');
      } catch {
        /* ignore */
      }
    }
  }, [locale]);

  const activeLocale: Locale = CKB_ENABLED ? locale : 'en';
  const dir: 'ltr' | 'rtl' = activeLocale === 'ckb' ? 'rtl' : 'ltr';
  const t = messages[activeLocale];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = activeLocale === 'ckb' ? 'ckb' : 'en';
    root.dir = dir;
    root.classList.toggle('locale-ckb', activeLocale === 'ckb');
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.meta.description);
  }, [activeLocale, dir, t.meta.title, t.meta.description]);

  const value = useMemo(
    () => ({ locale: activeLocale, setLocale, dir, t }),
    [activeLocale, setLocale, dir, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export function formatMessage(template: string, vars: Record<string, string | number>) {
  return Object.entries(vars).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, String(value)),
    template
  );
}
