import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';

const defaultOptions = {} as const;
export type GetUserAddressesQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetUserAddressesQuery = {
  __typename?: 'Query';
  userAddresses: Array<{
    __typename?: 'UserAddresses';
    userAddressesId: number;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
  }>;
};

export const GetUserAddressesDocument = gql`
  query getUserAddresses {
    userAddresses {
      userAddressesId
      address1
      address2
      city
      state
      country
      zipcode
    }
  }
`;

/**
 * __useGetUserAddressesQuery__
 *
 * To run a query within a React component, call `useGetUserAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAddressesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserAddressesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserAddressesQuery,
    GetUserAddressesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserAddressesQuery, GetUserAddressesQueryVariables>(
    GetUserAddressesDocument,
    options
  );
}
export function useGetUserAddressesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserAddressesQuery,
    GetUserAddressesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserAddressesQuery,
    GetUserAddressesQueryVariables
  >(GetUserAddressesDocument, options);
}
export type GetUserAddressesQueryHookResult = ReturnType<
  typeof useGetUserAddressesQuery
>;
export type GetUserAddressesLazyQueryHookResult = ReturnType<
  typeof useGetUserAddressesLazyQuery
>;
export type GetUserAddressesQueryResult = Apollo.QueryResult<
  GetUserAddressesQuery,
  GetUserAddressesQueryVariables
>;
