import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../../../graphql/graphql';

const defaultOptions = {} as const;
export type GetUserCartByProductIdQueryVariables = Types.Exact<{
  productId: Types.Scalars['Int'];
}>;

export type GetUserCartByProductIdQuery = {
  __typename?: 'Query';
  userCartsByProductId: Array<{
    __typename?: 'UserCart';
    productVariantId: number;
    sku: string;
    quantity: number;
    price: number;
    variant?: {
      __typename?: 'ProductVariant';
      description: string;
      name: string;
      productId: number;
    } | null;
  }>;
};

export const GetUserCartByProductIdDocument = gql`
  query getUserCartByProductId($productId: Int!) {
    userCartsByProductId(productId: $productId) {
      productVariantId
      sku
      quantity
      price
      variant {
        description
        name
        productId
      }
    }
  }
`;

/**
 * __useGetUserCartByProductIdQuery__
 *
 * To run a query within a React component, call `useGetUserCartByProductIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCartByProductIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCartByProductIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetUserCartByProductIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserCartByProductIdQuery,
    GetUserCartByProductIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserCartByProductIdQuery,
    GetUserCartByProductIdQueryVariables
  >(GetUserCartByProductIdDocument, options);
}
export function useGetUserCartByProductIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserCartByProductIdQuery,
    GetUserCartByProductIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserCartByProductIdQuery,
    GetUserCartByProductIdQueryVariables
  >(GetUserCartByProductIdDocument, options);
}
export type GetUserCartByProductIdQueryHookResult = ReturnType<
  typeof useGetUserCartByProductIdQuery
>;
export type GetUserCartByProductIdLazyQueryHookResult = ReturnType<
  typeof useGetUserCartByProductIdLazyQuery
>;
export type GetUserCartByProductIdQueryResult = Apollo.QueryResult<
  GetUserCartByProductIdQuery,
  GetUserCartByProductIdQueryVariables
>;
