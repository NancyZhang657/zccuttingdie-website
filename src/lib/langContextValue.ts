import { createContext } from 'react';
import { translations, type Lang } from './i18n';

type AnyTranslation = typeof translations.en | typeof translations.zh;

export interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: AnyTranslation;
}

export const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en as AnyTranslation,
});
