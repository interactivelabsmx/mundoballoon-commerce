import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetUserCartQueryVariables = Types.Exact<{
  userId: Types.Scalars['String'] | undefined;
}>;

export type GetUserCartQuery = {
  __typename?: 'Query';
  userCart?: {
    __typename?: 'UserCart';
    userId: string;
    sku: string;
    quantity: number;
    productVariantId: number;
    price: number;
    variant?: {
      __typename?: 'ProductVariant';
      description: string;
      name: string;
      price: number;
      productId: number;
      productVariantId?: number | null;
      sku: string;
    } | null;
  } | null;
};

export const GetUserCartDocument = gql`
  query GetUserCart($userId: String!) {
    userCart(userId: $userId) {
      userId
      sku
      quantity
      productVariantId
      price
      variant {
        description
        name
        price
        productId
        productVariantId
        sku
      }
    }
  }
`;

/**
 * __useGetUserCartQuery__
 *
 * To run a query within a React component, call `useGetUserCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCartQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserCartQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserCartQuery,
    GetUserCartQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserCartQuery, GetUserCartQueryVariables>(
    GetUserCartDocument,
    options
  );
}
export function useGetUserCartLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserCartQuery,
    GetUserCartQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserCartQuery, GetUserCartQueryVariables>(
    GetUserCartDocument,
    options
  );
}
export type GetUserCartQueryHookResult = ReturnType<typeof useGetUserCartQuery>;
export type GetUserCartLazyQueryHookResult = ReturnType<
  typeof useGetUserCartLazyQuery
>;
export type GetUserCartQueryResult = Apollo.QueryResult<
  GetUserCartQuery,
  GetUserCartQueryVariables
>;
