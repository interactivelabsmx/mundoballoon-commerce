import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type AddToEventCartMutationVariables = Types.Exact<{
  productVariantId: Types.Scalars['Int'];
  userEventId: Types.Scalars['Int'];
  quantity: Types.Scalars['Float'];
}>;

export type AddToEventCartMutation = {
  __typename?: 'Mutation';
  AddToEventCart: {
    __typename?: 'EventCartDetail';
    productVariantId: number;
    userEventId?: number | null;
    quantity: number;
  };
};

export const AddToEventCartDocument = gql`
  mutation AddToEventCart(
    $productVariantId: Int!
    $userEventId: Int!
    $quantity: Float!
  ) {
    AddToEventCart(
      productVariantId: $productVariantId
      userEventId: $userEventId
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
 * const [AddToEventCartMutation, { data, loading, error }] = useAddToEventCartMutation({
 *   variables: {
 *      productVariantId: // value for 'productVariantId'
 *      userEventId: // value for 'userEventId'
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
