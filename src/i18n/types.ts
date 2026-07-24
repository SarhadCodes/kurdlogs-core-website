export type Locale = 'en' | 'ckb';

/** Flip to true to show the Kurdish (Sorani) language switcher again. */
export const CKB_ENABLED = false;

export const LOCALES: {
  id: Locale;
  label: string;
  nativeLabel: string;
  enabled: boolean;
}[] = [
  { id: 'en', label: 'English', nativeLabel: 'English', enabled: true },
  { id: 'ckb', label: 'Kurdish (Sorani)', nativeLabel: 'کوردی', enabled: CKB_ENABLED },
];

export const AVAILABLE_LOCALES = LOCALES.filter((locale) => locale.enabled);

export const LOCALE_STORAGE_KEY = 'kurdlogs-locale';
