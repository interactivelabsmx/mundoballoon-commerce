import { createContext, ReactNode, useContext, useMemo } from 'react';
import {
  useGetAllProductsQuery,
  GetAllProductsQueryHookResult,
} from '@graphql/queries/products/GetAllProducts';

export interface ICommerceConfig {
  locale: string;
}

export type Provider = ICommerceConfig & {
  // cart?: {
  //   useCart?: SWRHook<Cart.GetCartHook>
  //   useAddItem?: MutationHook<Cart.AddItemHook>
  //   useUpdateItem?: MutationHook<Cart.UpdateItemHook>
  //   useRemoveItem?: MutationHook<Cart.RemoveItemHook>
  // }
  // checkout?: {
  //   useCheckout?: SWRHook<Checkout.GetCheckoutHook>
  //   useSubmitCheckout?: MutationHook<Checkout.SubmitCheckoutHook>
  // }
  // wishlist?: {
  //   useWishlist?: SWRHook<Wishlist.GetWishlistHook>
  //   useAddItem?: MutationHook<Wishlist.AddItemHook>
  //   useRemoveItem?: MutationHook<Wishlist.RemoveItemHook>
  // }
  // customer?: {
  //   useCustomer?: SWRHook<Customer.CustomerHook>
  //   card?: {
  //     useCards?: SWRHook<Customer.Card.GetCardsHook>
  //     useAddItem?: MutationHook<Customer.Card.AddItemHook>
  //     useUpdateItem?: MutationHook<Customer.Card.UpdateItemHook>
  //     useRemoveItem?: MutationHook<Customer.Card.RemoveItemHook>
  //   }
  //   address?: {
  //     useAddresses?: SWRHook<Customer.Address.GetAddressesHook>
  //     useAddItem?: MutationHook<Customer.Address.AddItemHook>
  //     useUpdateItem?: MutationHook<Customer.Address.UpdateItemHook>
  //     useRemoveItem?: MutationHook<Customer.Address.RemoveItemHook>
  //   }
  // }
  products?: {
    useGetAllProducts?: GetAllProductsQueryHookResult;
  };
  // auth?: {
  //   useSignup?: MutationHook<Signup.SignupHook>
  //   useLogin?: MutationHook<Login.LoginHook>
  //   useLogout?: MutationHook<Logout.LogoutHook>
  // }
};

const CommerceConfig = {
  locale: 'en-US',
};

const Commerce = createContext<Provider>({
  ...CommerceConfig,
});

interface ICommerce {
  children: ReactNode;
  options?: Partial<ICommerceConfig>;
}

export function CommerceProvider({ children, options }: ICommerce) {
  const value = useMemo(
    () => ({ ...CommerceConfig, options, useGetAllProductsQuery }),
    [options]
  );

  return <Commerce.Provider value={value}>{children}</Commerce.Provider>;
}

export function useCommerce() {
  return useContext(Commerce);
}
