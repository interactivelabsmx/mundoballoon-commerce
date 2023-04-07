import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';

const defaultOptions = {} as const;
export type AddItemToCartMutationVariables = Types.Exact<{
  sku: Types.Scalars['String'];
}>;

export type AddItemToCartMutation = {
  __typename?: 'Mutation';
  addItemToCart?: { __typename?: 'UserCartProduct'; sku: string } | null;
};

export const AddItemToCartDocument = gql`
  mutation AddItemToCart($sku: String!) {
    addItemToCart(sku: $sku) {
      sku
    }
  }
`;
export type AddItemToCartMutationFn = Apollo.MutationFunction<
  AddItemToCartMutation,
  AddItemToCartMutationVariables
>;

/**
 * __useAddItemToCartMutation__
 *
 * To run a mutation, you first call `useAddItemToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemToCartMutation, { data, loading, error }] = useAddItemToCartMutation({
 *   variables: {
 *      sku: // value for 'sku'
 *   },
 * });
 */
export function useAddItemToCartMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddItemToCartMutation,
    AddItemToCartMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddItemToCartMutation,
    AddItemToCartMutationVariables
  >(AddItemToCartDocument, options);
}
export type AddItemToCartMutationHookResult = ReturnType<
  typeof useAddItemToCartMutation
>;
export type AddItemToCartMutationResult =
  Apollo.MutationResult<AddItemToCartMutation>;
export type AddItemToCartMutationOptions = Apollo.BaseMutationOptions<
  AddItemToCartMutation,
  AddItemToCartMutationVariables
>;
