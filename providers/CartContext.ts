import type { MutationHookOptions, QueryHookOptions } from '@apollo/client';
import type {
  AddToCartMutation,
  AddToCartMutationVariables,
  AddToCartMutationHookResult,
} from './graphql/AddToCart.graphql';
import { useAddToCartMutation } from './graphql/AddToCart.graphql';
import type {
  AddToEventCartMutation,
  AddToEventCartMutationVariables,
  AddToEventCartMutationHookResult,
} from './graphql/AddToEventCart.graphql';
import { useAddToEventCartMutation } from './graphql/AddToEventCart.graphql';
import type {
  GetUserCartQuery,
  GetUserCartQueryVariables,
  GetUserCartQueryHookResult,
} from './graphql/GetUserCart.graphql';
import { useGetUserCartQuery } from './graphql/GetUserCart.graphql';
import type {
  GetUserCartCountQuery,
  GetUserCartCountQueryHookResult,
  GetUserCartCountQueryVariables,
} from './graphql/GetUserCartCount.graphql';
import { useGetUserCartCountQuery } from './graphql/GetUserCartCount.graphql';

export interface ICartContext {
  useCart: (
    baseOptions?: QueryHookOptions<GetUserCartQuery, GetUserCartQueryVariables>
  ) => GetUserCartQueryHookResult;
  useCartCount: (
    baseOptions?: QueryHookOptions<
      GetUserCartCountQuery,
      GetUserCartCountQueryVariables
    >
  ) => GetUserCartCountQueryHookResult;
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
}

export const CartContext: ICartContext = {
  useCart: useGetUserCartQuery,
  useCartCount: useGetUserCartCountQuery,
  useAddItem: useAddToCartMutation,
  useAddEventItem: useAddToEventCartMutation,
};
