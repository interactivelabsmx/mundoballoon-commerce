import setLanguage from 'next-translate/setLanguage';
import { setCookie } from 'nookies';
import { createContext, ReactNode, useCallback, useContext } from 'react';

export interface ICommerceProvider {
  setLocale: (newLang: string) => void;
}

const Commerce = createContext<ICommerceProvider>({
  setLocale: () => undefined,
});

interface ICommerce {
  children: ReactNode;
  lang: string;
}

export const UL = 'NEXT_LOCALE';
export const UL_TTL = 600 * 6000;

export const UL_COOKIE_OPTIONS = {
  path: '/',
  maxAge: UL_TTL,
  sameSite: true,
  secure: true,
};

export function CommerceProvider({ children, lang }: ICommerce) {
  const setLanguageCookie = useCallback(
    async (locale: string) => {
      setCookie({}, UL, locale, UL_COOKIE_OPTIONS);
    },
    [lang]
  );
  const setLocale = (locale: string) => {
    setLanguage(locale);
    setLanguageCookie(locale);
  };
  const value = {
    setLocale,
  };
  return <Commerce.Provider value={value}>{children}</Commerce.Provider>;
}

export function useCommerce() {
  return useContext(Commerce);
}
