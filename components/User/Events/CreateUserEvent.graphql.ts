import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../../graphql/graphql';

const defaultOptions = {} as const;
export type CreateUserEventMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  details: Types.Scalars['String'];
  date: Types.Scalars['DateTime'];
}>;

export type CreateUserEventMutation = {
  __typename?: 'Mutation';
  createUserEvent: {
    __typename?: 'UserEvent';
    userId: string;
    name: string;
    details: string;
    date?: any | null;
  };
};

export const CreateUserEventDocument = gql`
  mutation CreateUserEvent(
    $name: String!
    $details: String!
    $date: DateTime!
  ) {
    createUserEvent(name: $name, details: $details, date: $date) {
      userId
      name
      details
      date
    }
  }
`;
export type CreateUserEventMutationFn = Apollo.MutationFunction<
  CreateUserEventMutation,
  CreateUserEventMutationVariables
>;

/**
 * __useCreateUserEventMutation__
 *
 * To run a mutation, you first call `useCreateUserEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserEventMutation, { data, loading, error }] = useCreateUserEventMutation({
 *   variables: {
 *      name: // value for 'name'
 *      details: // value for 'details'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useCreateUserEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserEventMutation,
    CreateUserEventMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateUserEventMutation,
    CreateUserEventMutationVariables
  >(CreateUserEventDocument, options);
}
export type CreateUserEventMutationHookResult = ReturnType<
  typeof useCreateUserEventMutation
>;
export type CreateUserEventMutationResult =
  Apollo.MutationResult<CreateUserEventMutation>;
export type CreateUserEventMutationOptions = Apollo.BaseMutationOptions<
  CreateUserEventMutation,
  CreateUserEventMutationVariables
>;
