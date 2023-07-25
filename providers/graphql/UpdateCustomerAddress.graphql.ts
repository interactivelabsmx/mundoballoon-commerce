import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';
import { CustomerFragmentFragmentDoc } from './CustomerFragment.graphql';

const defaultOptions = {} as const;
export type UpdateCustomerAddressMutationVariables = Types.Exact<{
  customerId: Types.Scalars['String'];
  name: Types.Scalars['String'];
  address: Types.AddressInput;
}>;

export type UpdateCustomerAddressMutation = {
  __typename?: 'Mutation';
  updateCustomerAddress?: {
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

export const UpdateCustomerAddressDocument = gql`
  mutation UpdateCustomerAddress(
    $customerId: String!
    $name: String!
    $address: AddressInput!
  ) {
    updateCustomerAddress(
      customerId: $customerId
      name: $name
      address: $address
    ) {
      ...CustomerFragment
    }
  }
  ${CustomerFragmentFragmentDoc}
`;
export type UpdateCustomerAddressMutationFn = Apollo.MutationFunction<
  UpdateCustomerAddressMutation,
  UpdateCustomerAddressMutationVariables
>;

/**
 * __useUpdateCustomerAddressMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerAddressMutation, { data, loading, error }] = useUpdateCustomerAddressMutation({
 *   variables: {
 *      customerId: // value for 'customerId'
 *      name: // value for 'name'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useUpdateCustomerAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCustomerAddressMutation,
    UpdateCustomerAddressMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCustomerAddressMutation,
    UpdateCustomerAddressMutationVariables
  >(UpdateCustomerAddressDocument, options);
}
export type UpdateCustomerAddressMutationHookResult = ReturnType<
  typeof useUpdateCustomerAddressMutation
>;
export type UpdateCustomerAddressMutationResult =
  Apollo.MutationResult<UpdateCustomerAddressMutation>;
export type UpdateCustomerAddressMutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomerAddressMutation,
  UpdateCustomerAddressMutationVariables
>;
