import type {
  ApolloClient,
  MutationHookOptions,
  NormalizedCacheObject,
} from '@apollo/client';
import { useReducer } from 'react';
import type {
  AddToCartMutation,
  AddToCartMutationVariables,
  AddToCartMutationHookResult,
} from '../graphql/AddToCart.graphql';
import { useAddToCartMutation } from '../graphql/AddToCart.graphql';
import type {
  AddToEventCartMutation,
  AddToEventCartMutationVariables,
  AddToEventCartMutationHookResult,
} from '../graphql/AddToEventCart.graphql';
import { useAddToEventCartMutation } from '../graphql/AddToEventCart.graphql';
import { GetUserCartDocument } from '../graphql/GetUserCart.graphql';
import type { GetUserCartQuery } from '../graphql/GetUserCart.graphql';
import type { GetUserCartCountQuery } from '../graphql/GetUserCartCount.graphql';
import { GetUserCartCountDocument } from '../graphql/GetUserCartCount.graphql';

enum CartActions {
  SET_CART_RESPONSE,
  SET_CART_COUNT,
}

export interface ICartAction {
  type: CartActions;
  payload: any;
}

export interface ICartState {
  count?: number;
  subtotal?: number;
  tax?: number;
  total?: number;
  products?: GetUserCartQuery['userCart']['products'] | null;
}

function CartReducer(state: ICartState, action: ICartAction): ICartState {
  const { type, payload } = action;
  switch (type) {
    case CartActions.SET_CART_RESPONSE: {
      const { userCart } = payload as GetUserCartQuery;
      const { products, subtotal, tax, total } = userCart;
      return {
        ...state,
        tax,
        total,
        subtotal,
        products,
      };
    }
    case CartActions.SET_CART_COUNT: {
      1;
      const { userCartCount } = payload as GetUserCartCountQuery;
      return {
        ...state,
        count: userCartCount,
      };
    }
    default:
      return state;
  }
}

export type ICartContext = {
  useAddItem: (
    baseOptions?: MutationHookOptions<
      AddToCartMutation,
      AddToCartMutationVariables
    >
  ) => AddToCartMutationHookResult;
  useAddEventItem: (
    baseOptions?: MutationHookOptions<
      AddToEventCartMutation,
      AddToEventCartMutationVariables
    >
  ) => AddToEventCartMutationHookResult;
  getUserCart: () => Promise<void>;
  getUserCartCount: () => Promise<void>;
} & ICartState;

export const CartContext = {
  getUserCart: async () => undefined,
  getUserCartCount: async () => undefined,
  useAddItem: useAddToCartMutation,
  useAddEventItem: useAddToEventCartMutation,
};

export const useCartContext = (client: ApolloClient<NormalizedCacheObject>) => {
  const [state, reducer] = useReducer(CartReducer, {});

  const getUserCart = async () => {
    const { data, errors } = await client.query({ query: GetUserCartDocument });
    if (errors) throw new Error(errors.toString());
    reducer({ type: CartActions.SET_CART_RESPONSE, payload: data });
  };

  const getUserCartCount = async () => {
    const { data, errors } = await client.query({
      query: GetUserCartCountDocument,
    });
    if (errors) throw new Error(errors.toString());
    reducer({ type: CartActions.SET_CART_COUNT, payload: data });
  };

  return {
    ...state,
    getUserCart,
    getUserCartCount,
    useAddItem: useAddToCartMutation,
    useAddEventItem: useAddToEventCartMutation,
  } as ICartContext;
};
