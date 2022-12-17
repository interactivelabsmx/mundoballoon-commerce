import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../../graphql/graphql';

const defaultOptions = {} as const;
export type DeleteUSerEventMutationVariables = Types.Exact<{
  userEventId: Types.Scalars['Int'];
}>;

export type DeleteUSerEventMutation = {
  __typename?: 'Mutation';
  deleteUserEvent: boolean;
};

export const DeleteUSerEventDocument = gql`
  mutation DeleteUSerEvent($userEventId: Int!) {
    deleteUserEvent(userEventId: $userEventId)
  }
`;
export type DeleteUSerEventMutationFn = Apollo.MutationFunction<
  DeleteUSerEventMutation,
  DeleteUSerEventMutationVariables
>;

/**
 * __useDeleteUSerEventMutation__
 *
 * To run a mutation, you first call `useDeleteUSerEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUSerEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUSerEventMutation, { data, loading, error }] = useDeleteUSerEventMutation({
 *   variables: {
 *      userEventId: // value for 'userEventId'
 *   },
 * });
 */
export function useDeleteUSerEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUSerEventMutation,
    DeleteUSerEventMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteUSerEventMutation,
    DeleteUSerEventMutationVariables
  >(DeleteUSerEventDocument, options);
}
export type DeleteUSerEventMutationHookResult = ReturnType<
  typeof useDeleteUSerEventMutation
>;
export type DeleteUSerEventMutationResult =
  Apollo.MutationResult<DeleteUSerEventMutation>;
export type DeleteUSerEventMutationOptions = Apollo.BaseMutationOptions<
  DeleteUSerEventMutation,
  DeleteUSerEventMutationVariables
>;
