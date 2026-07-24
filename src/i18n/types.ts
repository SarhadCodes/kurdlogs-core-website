export type Locale = 'en' | 'ckb';

export const LOCALES: { id: Locale; label: string; nativeLabel: string }[] = [
  { id: 'en', label: 'English', nativeLabel: 'English' },
  { id: 'ckb', label: 'Kurdish (Sorani)', nativeLabel: 'کوردی' },
];

export const LOCALE_STORAGE_KEY = 'kurdlogs-locale';
