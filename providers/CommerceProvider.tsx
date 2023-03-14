import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import setLanguage from 'next-translate/setLanguage';
import { setCookie } from 'nookies';
import type { ReactNode } from 'react';
import { createContext, useCallback, useContext } from 'react';
import { CartContext } from './CartContext';
import type { ICommerceProvider } from './ICommerceProvider';
import type { IPaymentsContext } from './PaymentsContext';
import { usePaymentsContext, PaymentsContext } from './PaymentsContext';

export const Commerce = createContext<ICommerceProvider>({
  setLocale: () => undefined,
  cart: CartContext,
  payments: PaymentsContext,
});

interface ICommerce {
  client: ApolloClient<NormalizedCacheObject>;
  children: ReactNode;
}

export const UL = 'NEXT_LOCALE';
export const UL_TTL = 600 * 6000;

export const UL_COOKIE_OPTIONS = {
  path: '/',
  maxAge: UL_TTL,
  sameSite: true,
  secure: true,
};

export function CommerceProvider({ children, client }: ICommerce) {
  const setLanguageCookie = useCallback(async (locale: string) => {
    setCookie({}, UL, locale, UL_COOKIE_OPTIONS);
  }, []);

  const setLocale = (locale: string) => {
    setLanguage(locale);
    setLanguageCookie(locale);
  };

  const payments: IPaymentsContext = usePaymentsContext(client);

  const value = {
    setLocale,
    cart: CartContext,
    payments,
  };

  return <Commerce.Provider value={value}>{children}</Commerce.Provider>;
}

export function useCommerce() {
  return useContext(Commerce);
}
