import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';

const defaultOptions = {} as const;
export type AddToEventCartMutationVariables = Types.Exact<{
  userEventId: Types.Scalars['Int'];
  productVariantId: Types.Scalars['Int'];
  quantity: Types.Scalars['Float'];
}>;

export type AddToEventCartMutation = {
  __typename?: 'Mutation';
  addToEventCart: {
    __typename?: 'EventCartDetail';
    productVariantId: number;
    userEventId?: number | null;
    quantity: number;
  };
};

export const AddToEventCartDocument = gql`
  mutation AddToEventCart(
    $userEventId: Int!
    $productVariantId: Int!
    $quantity: Float!
  ) {
    addToEventCart(
      userEventId: $userEventId
      productVariantId: $productVariantId
      quantity: $quantity
    ) {
      productVariantId
      userEventId
      quantity
    }
  }
`;
export type AddToEventCartMutationFn = Apollo.MutationFunction<
  AddToEventCartMutation,
  AddToEventCartMutationVariables
>;

/**
 * __useAddToEventCartMutation__
 *
 * To run a mutation, you first call `useAddToEventCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToEventCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToEventCartMutation, { data, loading, error }] = useAddToEventCartMutation({
 *   variables: {
 *      userEventId: // value for 'userEventId'
 *      productVariantId: // value for 'productVariantId'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useAddToEventCartMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddToEventCartMutation,
    AddToEventCartMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddToEventCartMutation,
    AddToEventCartMutationVariables
  >(AddToEventCartDocument, options);
}
export type AddToEventCartMutationHookResult = ReturnType<
  typeof useAddToEventCartMutation
>;
export type AddToEventCartMutationResult =
  Apollo.MutationResult<AddToEventCartMutation>;
export type AddToEventCartMutationOptions = Apollo.BaseMutationOptions<
  AddToEventCartMutation,
  AddToEventCartMutationVariables
>;
