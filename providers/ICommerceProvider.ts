import type { MutationHookOptions, QueryHookOptions } from '@apollo/client';
import type {
  AddToCartMutation,
  AddToCartMutationVariables,
  AddToCartMutationHookResult,
} from './graphql/AddToCart.graphql';
import type {
  AddToEventCartMutation,
  AddToEventCartMutationVariables,
  AddToEventCartMutationHookResult,
} from './graphql/AddToEventCart.graphql';
import type {
  GetUserCartQuery,
  GetUserCartQueryVariables,
  GetUserCartQueryHookResult,
} from './graphql/GetUserCart.graphql';

export interface ICommerceProvider {
  setLocale: (newLang: string) => void;
  cart: {
    useCart: (
      baseOptions?: QueryHookOptions<
        GetUserCartQuery,
        GetUserCartQueryVariables
      >
    ) => GetUserCartQueryHookResult;
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
  };
}
