import { useRouter } from 'next/router';
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ICommerceProvider {
  locale: string;
  setLocale: Dispatch<string>;
}

const defaultLocale = 'en-US';

const Commerce = createContext<ICommerceProvider>({
  locale: defaultLocale,
  setLocale: () => null,
});

interface ICommerce {
  children: ReactNode;
}

export function CommerceProvider({ children }: ICommerce) {
  const [locale, setLocale] = useState<string>(defaultLocale);
  const value = { locale, setLocale };
  return <Commerce.Provider value={value}>{children}</Commerce.Provider>;
}

export function useCommerce() {
  return useContext(Commerce);
}

export function usePersistLocaleCookie() {
  const { locale, defaultLocale } = useRouter();
  useEffect(persistLocaleCookie, [locale, defaultLocale]);
  function persistLocaleCookie() {
    if (locale !== defaultLocale) {
      const date = new Date();
      const expireMs = 100 * 24 * 60 * 60 * 100;
      date.setTime(date.getTime() + expireMs);
      document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;
    }
  }
}
