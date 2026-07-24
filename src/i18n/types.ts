export type Locale = 'en' | 'ckb';

export const LOCALES: { id: Locale; label: string; nativeLabel: string }[] = [
  { id: 'en', label: 'English', nativeLabel: 'EN' },
  { id: 'ckb', label: 'Kurdish (Sorani)', nativeLabel: 'کوردی' },
];

export const LOCALE_STORAGE_KEY = 'kurdlogs-locale';
