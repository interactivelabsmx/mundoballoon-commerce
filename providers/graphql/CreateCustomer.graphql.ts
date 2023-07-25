import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';
import { CustomerFragmentFragmentDoc } from './CustomerFragment.graphql';

const defaultOptions = {} as const;
export type CreateCustomerMutationVariables = Types.Exact<{
  [key: string]: never;
}>;

export type CreateCustomerMutation = {
  __typename?: 'Mutation';
  createCustomer?: {
    __typename?: 'Customer';
    id: string;
    name?: string | null;
    address?: {
      __typename?: 'Address';
      city?: string | null;
      country?: string | null;
      line1?: string | null;
      line2?: string | null;
      postalCode?: string | null;
      state?: string | null;
    } | null;
  } | null;
};

export const CreateCustomerDocument = gql`
  mutation CreateCustomer {
    createCustomer {
      ...CustomerFragment
    }
  }
  ${CustomerFragmentFragmentDoc}
`;
export type CreateCustomerMutationFn = Apollo.MutationFunction<
  CreateCustomerMutation,
  CreateCustomerMutationVariables
>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCustomerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCustomerMutation,
    CreateCustomerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCustomerMutation,
    CreateCustomerMutationVariables
  >(CreateCustomerDocument, options);
}
export type CreateCustomerMutationHookResult = ReturnType<
  typeof useCreateCustomerMutation
>;
export type CreateCustomerMutationResult =
  Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<
  CreateCustomerMutation,
  CreateCustomerMutationVariables
>;
