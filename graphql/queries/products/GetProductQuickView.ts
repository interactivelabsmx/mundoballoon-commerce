import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';
import { ProductQuickViewFragmentDoc } from './ProductQuickViewFragment';

const defaultOptions = {} as const;
export type GetProductQuickViewQueryVariables = Types.Exact<{
  productId: Types.Scalars['Int'];
}>;

export type GetProductQuickViewQuery = {
  __typename?: 'Query';
  productQuickView: {
    __typename?: 'ProductQuickView';
    product: {
      __typename?: 'Product';
      productId?: number | null;
      name: string;
      description: string;
      price: number;
      variants?: Array<{
        __typename?: 'ProductVariant';
        media?: Array<{
          __typename?: 'ProductVariantMedium';
          url: string;
          mediaType: string;
        }> | null;
      }> | null;
    };
    variantValues: Array<{
      __typename?: 'VariantValue';
      value: string;
      productVariantValues?: Array<{
        __typename?: 'ProductVariantValue';
        variant?: { __typename?: 'Variant'; type: string; name: string } | null;
      }> | null;
    }>;
  };
};

export const GetProductQuickViewDocument = gql`
  query GetProductQuickView($productId: Int!) {
    productQuickView(productId: $productId) {
      product {
        ...ProductQuickView
      }
      variantValues {
        value
        productVariantValues {
          variant {
            type
            name
          }
        }
      }
    }
  }
  ${ProductQuickViewFragmentDoc}
`;

/**
 * __useGetProductQuickViewQuery__
 *
 * To run a query within a React component, call `useGetProductQuickViewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuickViewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuickViewQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductQuickViewQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductQuickViewQuery,
    GetProductQuickViewQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductQuickViewQuery,
    GetProductQuickViewQueryVariables
  >(GetProductQuickViewDocument, options);
}
export function useGetProductQuickViewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductQuickViewQuery,
    GetProductQuickViewQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductQuickViewQuery,
    GetProductQuickViewQueryVariables
  >(GetProductQuickViewDocument, options);
}
export type GetProductQuickViewQueryHookResult = ReturnType<
  typeof useGetProductQuickViewQuery
>;
export type GetProductQuickViewLazyQueryHookResult = ReturnType<
  typeof useGetProductQuickViewLazyQuery
>;
export type GetProductQuickViewQueryResult = Apollo.QueryResult<
  GetProductQuickViewQuery,
  GetProductQuickViewQueryVariables
>;
