import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';

const defaultOptions = {} as const;
export type DeleteUserCartProductMutationVariables = Types.Exact<{
  sku: Types.Scalars['String'];
}>;

export type DeleteUserCartProductMutation = {
  __typename?: 'Mutation';
  deleteUserCartProduct: boolean;
};

export const DeleteUserCartProductDocument = gql`
  mutation DeleteUserCartProduct($sku: String!) {
    deleteUserCartProduct(sku: $sku)
  }
`;
export type DeleteUserCartProductMutationFn = Apollo.MutationFunction<
  DeleteUserCartProductMutation,
  DeleteUserCartProductMutationVariables
>;

/**
 * __useDeleteUserCartProductMutation__
 *
 * To run a mutation, you first call `useDeleteUserCartProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserCartProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserCartProductMutation, { data, loading, error }] = useDeleteUserCartProductMutation({
 *   variables: {
 *      sku: // value for 'sku'
 *   },
 * });
 */
export function useDeleteUserCartProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserCartProductMutation,
    DeleteUserCartProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteUserCartProductMutation,
    DeleteUserCartProductMutationVariables
  >(DeleteUserCartProductDocument, options);
}
export type DeleteUserCartProductMutationHookResult = ReturnType<
  typeof useDeleteUserCartProductMutation
>;
export type DeleteUserCartProductMutationResult =
  Apollo.MutationResult<DeleteUserCartProductMutation>;
export type DeleteUserCartProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserCartProductMutation,
  DeleteUserCartProductMutationVariables
>;
