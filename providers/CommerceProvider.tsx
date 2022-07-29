import setLanguage from 'next-translate/setLanguage';
import { setCookie } from 'nookies';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import {
  FII,
  FII_COOKIE_OPTIONS,
  ckeckForExpiredCookieLanguage,
} from '@lib/firebaseAuth/utils';

export interface ICommerceProvider {
  locale: string;
  setLocale: (newLang: string) => void;
  LocaleCookie: () => void;
}

const defaultLocale = 'ES-MX';
const Commerce = createContext<ICommerceProvider>({
  locale: defaultLocale,
  setLocale: () => undefined,
  LocaleCookie: () => undefined,
});

interface ICommerce {
  children: ReactNode;
  lang: string;
}

export function CommerceProvider({ children, lang }: ICommerce) {
  const LocaleCookie = useCallback(async () => {
    setCookie({}, FII, '', FII_COOKIE_OPTIONS);
  }, [lang]);
  const refreshLanguage = useCallback(async () => {
    setCookie({}, FII, '', FII_COOKIE_OPTIONS);
  }, [lang]);
  useEffect(
    () => ckeckForExpiredCookieLanguage(refreshLanguage),
    [refreshLanguage]
  );
  const locale = lang;
  const setLocale = (newlang: string) => {
    setLanguage(newlang);
  };
  const value = {
    locale: locale,
    setLocale,
    LocaleCookie,
  };
  return <Commerce.Provider value={value}>{children}</Commerce.Provider>;
}
export interface ICommerceProvider {
  locale: string;
  setLocale: (newLang: string) => void;
}

export function useCommerce() {
  return useContext(Commerce);
}
