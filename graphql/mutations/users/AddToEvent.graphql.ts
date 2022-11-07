import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type AddToEventMutationVariables = Types.Exact<{
  productVariantId: Types.Scalars['Int'];
  userEventId: Types.Scalars['Int'];
  quantity: Types.Scalars['Float'];
}>;

export type AddToEventMutation = {
  __typename?: 'Mutation';
  addToEvent: {
    __typename?: 'EventCartDetail';
    productVariantId: number;
    userEventId?: number | null;
    quantity: number;
  };
};

export const AddToEventDocument = gql`
  mutation AddToEvent(
    $productVariantId: Int!
    $userEventId: Int!
    $quantity: Float!
  ) {
    addToEvent(
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
export type AddToEventMutationFn = Apollo.MutationFunction<
  AddToEventMutation,
  AddToEventMutationVariables
>;

/**
 * __useAddToEventMutation__
 *
 * To run a mutation, you first call `useAddToEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToEventMutation, { data, loading, error }] = useAddToEventMutation({
 *   variables: {
 *      productVariantId: // value for 'productVariantId'
 *      userEventId: // value for 'userEventId'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useAddToEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddToEventMutation,
    AddToEventMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddToEventMutation, AddToEventMutationVariables>(
    AddToEventDocument,
    options
  );
}
export type AddToEventMutationHookResult = ReturnType<
  typeof useAddToEventMutation
>;
export type AddToEventMutationResult =
  Apollo.MutationResult<AddToEventMutation>;
export type AddToEventMutationOptions = Apollo.BaseMutationOptions<
  AddToEventMutation,
  AddToEventMutationVariables
>;
