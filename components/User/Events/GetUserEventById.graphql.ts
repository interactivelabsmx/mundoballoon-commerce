import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../../graphql/graphql';

const defaultOptions = {} as const;
export type GetUserEventByIdQueryVariables = Types.Exact<{
  userEventId: Types.Scalars['Int'];
}>;

export type GetUserEventByIdQuery = {
  __typename?: 'Query';
  userEventById?: {
    __typename?: 'UserEvent';
    userEventId: number;
    userId: string;
    name: string;
    date?: any | null;
    details: string;
    carts?: Array<{
      __typename?: 'EventCartDetail';
      eventCartId: number;
      sku: string;
      productVariantId: number;
      userEventId?: number | null;
      quantity: number;
      price: number;
      label: string;
    }> | null;
  } | null;
};

export const GetUserEventByIdDocument = gql`
  query GetUserEventById($userEventId: Int!) {
    userEventById(userEventid: $userEventId) {
      userEventId
      userId
      name
      date
      details
      carts {
        eventCartId
        sku
        productVariantId
        userEventId
        quantity
        price
        label
      }
    }
  }
`;

/**
 * __useGetUserEventByIdQuery__
 *
 * To run a query within a React component, call `useGetUserEventByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserEventByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserEventByIdQuery({
 *   variables: {
 *      userEventId: // value for 'userEventId'
 *   },
 * });
 */
export function useGetUserEventByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserEventByIdQuery,
    GetUserEventByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserEventByIdQuery, GetUserEventByIdQueryVariables>(
    GetUserEventByIdDocument,
    options
  );
}
export function useGetUserEventByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserEventByIdQuery,
    GetUserEventByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserEventByIdQuery,
    GetUserEventByIdQueryVariables
  >(GetUserEventByIdDocument, options);
}
export type GetUserEventByIdQueryHookResult = ReturnType<
  typeof useGetUserEventByIdQuery
>;
export type GetUserEventByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserEventByIdLazyQuery
>;
export type GetUserEventByIdQueryResult = Apollo.QueryResult<
  GetUserEventByIdQuery,
  GetUserEventByIdQueryVariables
>;
