import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Lang } from './i18n';

type AnyTranslation = typeof translations.en | typeof translations.zh;

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: AnyTranslation;
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en as AnyTranslation,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang] as AnyTranslation;
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
