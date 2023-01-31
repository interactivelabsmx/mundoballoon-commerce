import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';

const defaultOptions = {} as const;
export type GetUserCartCountQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetUserCartCountQuery = {
  __typename?: 'Query';
  userCartCount: number;
};

export const GetUserCartCountDocument = gql`
  query GetUserCartCount {
    userCartCount
  }
`;

/**
 * __useGetUserCartCountQuery__
 *
 * To run a query within a React component, call `useGetUserCartCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCartCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCartCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserCartCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserCartCountQuery,
    GetUserCartCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserCartCountQuery, GetUserCartCountQueryVariables>(
    GetUserCartCountDocument,
    options
  );
}
export function useGetUserCartCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserCartCountQuery,
    GetUserCartCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserCartCountQuery,
    GetUserCartCountQueryVariables
  >(GetUserCartCountDocument, options);
}
export type GetUserCartCountQueryHookResult = ReturnType<
  typeof useGetUserCartCountQuery
>;
export type GetUserCartCountLazyQueryHookResult = ReturnType<
  typeof useGetUserCartCountLazyQuery
>;
export type GetUserCartCountQueryResult = Apollo.QueryResult<
  GetUserCartCountQuery,
  GetUserCartCountQueryVariables
>;
