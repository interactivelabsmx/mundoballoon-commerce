import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type DeleteUserCartMutationVariables = Types.Exact<{
  sku: Types.Scalars['String'];
}>;

export type DeleteUserCartMutation = {
  __typename?: 'Mutation';
  deleteUserCartProduct: boolean;
};

export const DeleteUserCartDocument = gql`
  mutation DeleteUserCart($sku: String!) {
    deleteUserCartProduct(sku: $sku)
  }
`;
export type DeleteUserCartMutationFn = Apollo.MutationFunction<
  DeleteUserCartMutation,
  DeleteUserCartMutationVariables
>;

/**
 * __useDeleteUserCartMutation__
 *
 * To run a mutation, you first call `useDeleteUserCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserCartMutation, { data, loading, error }] = useDeleteUserCartMutation({
 *   variables: {
 *      sku: // value for 'sku'
 *   },
 * });
 */
export function useDeleteUserCartMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserCartMutation,
    DeleteUserCartMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteUserCartMutation,
    DeleteUserCartMutationVariables
  >(DeleteUserCartDocument, options);
}
export type DeleteUserCartMutationHookResult = ReturnType<
  typeof useDeleteUserCartMutation
>;
export type DeleteUserCartMutationResult =
  Apollo.MutationResult<DeleteUserCartMutation>;
export type DeleteUserCartMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserCartMutation,
  DeleteUserCartMutationVariables
>;
