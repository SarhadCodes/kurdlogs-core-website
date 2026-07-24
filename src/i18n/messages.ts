import { en } from './en';
import { ckb } from './ckb';
import type { Messages } from './en';

export type { Messages };
export { en, ckb };

export const messages: Record<'en' | 'ckb', Messages> = { en, ckb };
