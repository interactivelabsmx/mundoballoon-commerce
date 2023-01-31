import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';

const defaultOptions = {} as const;
export type GetUserCartQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetUserCartQuery = {
  __typename?: 'Query';
  userCarts: Array<{
    __typename?: 'UserCart';
    productVariantId: number;
    quantity: number;
    price: number;
    variant?: {
      __typename?: 'ProductVariant';
      productId: number;
      sku: string;
      name: string;
      description: string;
      media?: Array<{
        __typename?: 'ProductVariantMedium';
        url?: string | null;
        description: string;
      }> | null;
    } | null;
  }>;
};

export const GetUserCartDocument = gql`
  query GetUserCart {
    userCarts {
      productVariantId
      quantity
      price
      variant {
        productId
        sku
        name
        description
        media {
          url
          description
        }
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
 *   },
 * });
 */
export function useGetUserCartQuery(
  baseOptions?: Apollo.QueryHookOptions<
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
