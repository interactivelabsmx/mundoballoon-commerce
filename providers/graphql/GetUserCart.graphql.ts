import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';

const defaultOptions = {} as const;
export type UserCartProductFragment = {
  __typename?: 'UserCartProduct';
  quantity: number;
  price: number;
  productVariantId: number;
  variant?: {
    __typename?: 'ProductVariant';
    sku: string;
    name: string;
    description: string;
    media?: Array<{
      __typename?: 'ProductVariantMedium';
      url?: string | null;
      description: string;
    }> | null;
  } | null;
};

export type GetUserCartQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetUserCartQuery = {
  __typename?: 'Query';
  userCart: {
    __typename?: 'UserCart';
    subtotal: number;
    tax: number;
    total: number;
    products?: Array<{
      __typename?: 'UserCartProduct';
      quantity: number;
      price: number;
      productVariantId: number;
      variant?: {
        __typename?: 'ProductVariant';
        sku: string;
        name: string;
        description: string;
        media?: Array<{
          __typename?: 'ProductVariantMedium';
          url?: string | null;
          description: string;
        }> | null;
      } | null;
    }> | null;
  };
};

export const UserCartProductFragmentDoc = gql`
  fragment UserCartProduct on UserCartProduct {
    quantity
    price
    productVariantId
    variant {
      sku
      name
      description
      media {
        url
        description
      }
    }
  }
`;
export const GetUserCartDocument = gql`
  query GetUserCart {
    userCart {
      subtotal
      tax
      total
      products {
        ...UserCartProduct
      }
    }
  }
  ${UserCartProductFragmentDoc}
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
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserCartQuery, GetUserCartQueryVariables>(
    GetUserCartDocument,
    options,
  );
}
export function useGetUserCartLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserCartQuery,
    GetUserCartQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserCartQuery, GetUserCartQueryVariables>(
    GetUserCartDocument,
    options,
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
