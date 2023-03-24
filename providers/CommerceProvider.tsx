import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import setLanguage from 'next-translate/setLanguage';
import { setCookie } from 'nookies';
import type { ReactNode } from 'react';
import { createContext, useCallback, useContext } from 'react';
import type { ICartContext } from './CommerceContext/CartContext';
import { CartContext, useCartContext } from './CommerceContext/CartContext';
import type { IPaymentsContext } from './CommerceContext/PaymentsContext';
import {
  usePaymentsContext,
  PaymentsContext,
} from './CommerceContext/PaymentsContext';
import type { ICommerceProvider } from './ICommerceProvider';

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
  const cart: ICartContext = useCartContext(client);

  const value = {
    setLocale,
    cart,
    payments,
  };

  return <Commerce.Provider value={value}>{children}</Commerce.Provider>;
}

export function useCommerce() {
  return useContext(Commerce);
}
