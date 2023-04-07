import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';

const defaultOptions = {} as const;
export type SubtractItemToCartMutationVariables = Types.Exact<{
  sku: Types.Scalars['String'];
}>;

export type SubtractItemToCartMutation = {
  __typename?: 'Mutation';
  subtractItemToCart?: { __typename?: 'UserCartProduct'; sku: string } | null;
};

export const SubtractItemToCartDocument = gql`
  mutation SubtractItemToCart($sku: String!) {
    subtractItemToCart(sku: $sku) {
      sku
    }
  }
`;
export type SubtractItemToCartMutationFn = Apollo.MutationFunction<
  SubtractItemToCartMutation,
  SubtractItemToCartMutationVariables
>;

/**
 * __useSubtractItemToCartMutation__
 *
 * To run a mutation, you first call `useSubtractItemToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubtractItemToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subtractItemToCartMutation, { data, loading, error }] = useSubtractItemToCartMutation({
 *   variables: {
 *      sku: // value for 'sku'
 *   },
 * });
 */
export function useSubtractItemToCartMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubtractItemToCartMutation,
    SubtractItemToCartMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SubtractItemToCartMutation,
    SubtractItemToCartMutationVariables
  >(SubtractItemToCartDocument, options);
}
export type SubtractItemToCartMutationHookResult = ReturnType<
  typeof useSubtractItemToCartMutation
>;
export type SubtractItemToCartMutationResult =
  Apollo.MutationResult<SubtractItemToCartMutation>;
export type SubtractItemToCartMutationOptions = Apollo.BaseMutationOptions<
  SubtractItemToCartMutation,
  SubtractItemToCartMutationVariables
>;
