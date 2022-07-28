import setLanguage from 'next-translate/setLanguage';
import { createContext, ReactNode, useContext } from 'react';

export interface ICommerceProvider {
  locale: string;
  setLocale: (newLang: string) => void;
}

const defaultLocale = 'ES-MX';
const Commerce = createContext<ICommerceProvider>({
  locale: defaultLocale,
  setLocale: () => undefined,
});

interface ICommerce {
  children: ReactNode;
  lang: string;
}

export function CommerceProvider({ children, lang }: ICommerce) {
  const locale = lang;
  const setLocale = (newlang: string) => {
    setLanguage(newlang);
  };
  const value = {
    locale: locale,
    setLocale,
  };
  return <Commerce.Provider value={value}>{children}</Commerce.Provider>;
}

export function useCommerce() {
  return useContext(Commerce);
}
