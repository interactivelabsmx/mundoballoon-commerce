import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../../../graphql/graphql';
import { UserEventSelectFragmentDoc } from './UserEventSelectFragment.graphql';

const defaultOptions = {} as const;
export type GetUserEventsSelectQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetUserEventsSelectQuery = {
  __typename?: 'Query';
  userEvents: Array<{
    __typename?: 'UserEvent';
    userEventId: number;
    name: string;
    details: string;
  }>;
};

export const GetUserEventsSelectDocument = gql`
  query GetUserEventsSelect {
    userEvents {
      ...UserEventSelect
    }
  }
  ${UserEventSelectFragmentDoc}
`;

/**
 * __useGetUserEventsSelectQuery__
 *
 * To run a query within a React component, call `useGetUserEventsSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserEventsSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserEventsSelectQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserEventsSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserEventsSelectQuery,
    GetUserEventsSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserEventsSelectQuery,
    GetUserEventsSelectQueryVariables
  >(GetUserEventsSelectDocument, options);
}
export function useGetUserEventsSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserEventsSelectQuery,
    GetUserEventsSelectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserEventsSelectQuery,
    GetUserEventsSelectQueryVariables
  >(GetUserEventsSelectDocument, options);
}
export type GetUserEventsSelectQueryHookResult = ReturnType<
  typeof useGetUserEventsSelectQuery
>;
export type GetUserEventsSelectLazyQueryHookResult = ReturnType<
  typeof useGetUserEventsSelectLazyQuery
>;
export type GetUserEventsSelectQueryResult = Apollo.QueryResult<
  GetUserEventsSelectQuery,
  GetUserEventsSelectQueryVariables
>;
