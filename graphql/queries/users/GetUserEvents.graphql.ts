import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetUserEventsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetUserEventsQuery = {
  __typename?: 'Query';
  userEvents: Array<{
    __typename?: 'UserEvent';
    userEventId: number;
    userId: string;
    name: string;
    date: any;
    details: string;
  }>;
};

export const GetUserEventsDocument = gql`
  query GetUserEvents {
    userEvents {
      userEventId
      userId
      name
      date
      details
    }
  }
`;

/**
 * __useGetUserEventsQuery__
 *
 * To run a query within a React component, call `useGetUserEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserEventsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserEventsQuery,
    GetUserEventsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserEventsQuery, GetUserEventsQueryVariables>(
    GetUserEventsDocument,
    options
  );
}
export function useGetUserEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserEventsQuery,
    GetUserEventsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserEventsQuery, GetUserEventsQueryVariables>(
    GetUserEventsDocument,
    options
  );
}
export type GetUserEventsQueryHookResult = ReturnType<
  typeof useGetUserEventsQuery
>;
export type GetUserEventsLazyQueryHookResult = ReturnType<
  typeof useGetUserEventsLazyQuery
>;
export type GetUserEventsQueryResult = Apollo.QueryResult<
  GetUserEventsQuery,
  GetUserEventsQueryVariables
>;
