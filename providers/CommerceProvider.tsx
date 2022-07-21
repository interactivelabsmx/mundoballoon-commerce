import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
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
