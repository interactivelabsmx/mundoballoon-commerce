import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import {
  VariantDisplayFragmentDoc,
  VariantValueDisplayFragmentDoc,
} from '../../../../graphql/fragments/ProductVariantsFragments.graphql';
import * as Types from '../../../../graphql/graphql';
import { ProductQuickViewFragmentDoc } from './ProductQuickViewFragment.graphql';

const defaultOptions = {} as const;
export type GetProductQuickViewQueryVariables = Types.Exact<{
  productId: Types.Scalars['Int'];
}>;

export type GetProductQuickViewQuery = {
  __typename?: 'Query';
  productQuickView: {
    __typename?: 'Product';
    productId?: number | null;
    name: string;
    description: string;
    price: any;
    category?: { __typename?: 'ProductCategory'; name: string } | null;
    variants?: Array<{
      __typename?: 'ProductVariant';
      productVariantId?: number | null;
      sku: string;
      price: any;
      name: string;
      description: string;
      media?: Array<{
        __typename?: 'ProductVariantMedium';
        url?: string | null;
        mediaType: string;
        description: string;
      }> | null;
    }> | null;
  };
  productVariants: {
    __typename?: 'ProductVariants';
    variants?: Array<{
      __typename?: 'Variant';
      variantId?: number | null;
      name: string;
      uiRegistry?: {
        __typename?: 'UiRegistry';
        componentId?: string | null;
      } | null;
    }> | null;
    variantValues?: Array<{
      __typename?: 'VariantValue';
      variantValueId?: number | null;
      variantId: number;
      value: string;
    }> | null;
  };
};

export const GetProductQuickViewDocument = gql`
  query GetProductQuickView($productId: Int!) {
    productQuickView(productId: $productId) {
      ...ProductQuickView
    }
    productVariants(productId: $productId) {
      variants {
        ...VariantDisplay
      }
      variantValues {
        ...VariantValueDisplay
      }
    }
  }
  ${ProductQuickViewFragmentDoc}
  ${VariantDisplayFragmentDoc}
  ${VariantValueDisplayFragmentDoc}
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
