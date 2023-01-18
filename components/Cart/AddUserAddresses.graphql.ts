import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';

const defaultOptions = {} as const;
export type AddUserAddressMutationVariables = Types.Exact<{
  address1: Types.Scalars['String'];
  address2: Types.Scalars['String'];
  city: Types.Scalars['String'];
  state: Types.Scalars['String'];
  country: Types.Scalars['String'];
  zipCode: Types.Scalars['String'];
}>;

export type AddUserAddressMutation = {
  __typename?: 'Mutation';
  addUserAddresses: {
    __typename?: 'UserAddresses';
    userId: string;
    address1: string;
    address2: string;
    city: string;
    country: string;
    state: string;
    zipcode: string;
  };
};

export const AddUserAddressDocument = gql`
  mutation addUserAddress(
    $address1: String!
    $address2: String!
    $city: String!
    $state: String!
    $country: String!
    $zipCode: String!
  ) {
    addUserAddresses(
      address1: $address1
      address2: $address2
      city: $city
      state: $state
      country: $country
      zipCode: $zipCode
    ) {
      userId
      address1
      address2
      city
      country
      state
      zipcode
    }
  }
`;
export type AddUserAddressMutationFn = Apollo.MutationFunction<
  AddUserAddressMutation,
  AddUserAddressMutationVariables
>;

/**
 * __useAddUserAddressMutation__
 *
 * To run a mutation, you first call `useAddUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserAddressMutation, { data, loading, error }] = useAddUserAddressMutation({
 *   variables: {
 *      address1: // value for 'address1'
 *      address2: // value for 'address2'
 *      city: // value for 'city'
 *      state: // value for 'state'
 *      country: // value for 'country'
 *      zipCode: // value for 'zipCode'
 *   },
 * });
 */
export function useAddUserAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserAddressMutation,
    AddUserAddressMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddUserAddressMutation,
    AddUserAddressMutationVariables
  >(AddUserAddressDocument, options);
}
export type AddUserAddressMutationHookResult = ReturnType<
  typeof useAddUserAddressMutation
>;
export type AddUserAddressMutationResult =
  Apollo.MutationResult<AddUserAddressMutation>;
export type AddUserAddressMutationOptions = Apollo.BaseMutationOptions<
  AddUserAddressMutation,
  AddUserAddressMutationVariables
>;
