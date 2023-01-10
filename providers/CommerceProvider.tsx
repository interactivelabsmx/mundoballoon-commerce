import setLanguage from 'next-translate/setLanguage';
import { setCookie } from 'nookies';
import type { ReactNode } from 'react';
import { createContext, useCallback, useContext } from 'react';
import type { ICommerceProvider } from './ICommerceProvider';
import { useAddToCartMutation } from './graphql/AddToCart.graphql';
import { useAddToEventCartMutation } from './graphql/AddToEventCart.graphql';
import { useGetUserCartQuery } from './graphql/GetUserCart.graphql';

export const CartContext = {
  useCart: useGetUserCartQuery,
  useAddItem: useAddToCartMutation,
  useAddEventItem: useAddToEventCartMutation,
};

export const Commerce = createContext<ICommerceProvider>({
  setLocale: () => undefined,
  cart: CartContext,
});

interface ICommerce {
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

export function CommerceProvider({ children }: ICommerce) {
  const setLanguageCookie = useCallback(async (locale: string) => {
    setCookie({}, UL, locale, UL_COOKIE_OPTIONS);
  }, []);

  const setLocale = (locale: string) => {
    setLanguage(locale);
    setLanguageCookie(locale);
  };

  const value = {
    setLocale,
    cart: CartContext,
  };

  return <Commerce.Provider value={value}>{children}</Commerce.Provider>;
}

export function useCommerce() {
  return useContext(Commerce);
}
