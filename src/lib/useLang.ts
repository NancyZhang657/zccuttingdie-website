import { useContext } from 'react';
import { LangContext } from './langContextValue';

export function useLang() {
  return useContext(LangContext);
}
