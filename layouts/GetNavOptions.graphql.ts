import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../graphql/graphql';
import { NavItemFragmentDoc } from './NavItemFragment.graphql';

const defaultOptions = {} as const;
export type GetNavOptionsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetNavOptionsQuery = {
  __typename?: 'Query';
  navOptions: Array<{
    __typename?: 'NavOption';
    order: number;
    name: string;
    href?: string | null;
    options?: Array<{
      __typename?: 'NavCategory';
      order: number;
      name: string;
      href: string;
      imageSrc: string;
      imageAlt: string;
    }> | null;
  }>;
};

export const GetNavOptionsDocument = gql`
  query GetNavOptions {
    navOptions {
      ...NavItem
    }
  }
  ${NavItemFragmentDoc}
`;

/**
 * __useGetNavOptionsQuery__
 *
 * To run a query within a React component, call `useGetNavOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNavOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNavOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNavOptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNavOptionsQuery,
    GetNavOptionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNavOptionsQuery, GetNavOptionsQueryVariables>(
    GetNavOptionsDocument,
    options
  );
}
export function useGetNavOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNavOptionsQuery,
    GetNavOptionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNavOptionsQuery, GetNavOptionsQueryVariables>(
    GetNavOptionsDocument,
    options
  );
}
export type GetNavOptionsQueryHookResult = ReturnType<
  typeof useGetNavOptionsQuery
>;
export type GetNavOptionsLazyQueryHookResult = ReturnType<
  typeof useGetNavOptionsLazyQuery
>;
export type GetNavOptionsQueryResult = Apollo.QueryResult<
  GetNavOptionsQuery,
  GetNavOptionsQueryVariables
>;
