import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetUserEventByUserIdQueryVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;

export type GetUserEventByUserIdQuery = {
  __typename?: 'Query';
  userEventById?: {
    __typename?: 'Product';
    userId?: string | null;
    userEventId: number;
    name: string;
    date: string;
    details: string;
    price: number;
  } | null;
};

export const GetUserEventByUserIdDocument = gql`
  query GetUserEventByUserId($userId: String!) {
    userEventByUserId(userId: $userId) {
      userEventId
      userId
      name
      date
      details
    }
  }
`;

/**
 * __useGetUserEventByUserIdQuery__
 *
 * To run a query within a React component, call `useGetUserEventByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserEventByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserEventByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserEventByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserEventByUserIdQuery,
    GetUserEventByUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserEventByUserIdQuery,
    GetUserEventByUserIdQueryVariables
  >(GetUserEventByUserIdDocument, options);
}
export function useGetUserEventByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserEventByUserIdQuery,
    GetUserEventByUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserEventByUserIdQuery,
    GetUserEventByUserIdQueryVariables
  >(GetUserEventByUserIdDocument, options);
}
export type GetUserEventByUserIdQueryHookResult = ReturnType<
  typeof useGetUserEventByUserIdQuery
>;
export type GetUserEventByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetUserEventByUserIdLazyQuery
>;
export type GetUserEventByUserIdQueryResult = Apollo.QueryResult<
  GetUserEventByUserIdQuery,
  GetUserEventByUserIdQueryVariables
>;
