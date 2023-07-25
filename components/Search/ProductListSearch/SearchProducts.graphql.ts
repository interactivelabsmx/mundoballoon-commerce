import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../../graphql/graphql';
import { ProductSimpleCardFragmentDoc } from '../../../graphql/queries/products/ProductSimpleCardFragment.graphql';

const defaultOptions = {} as const;
export type SearchProductsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProductFilterInput>;
  order?: Types.InputMaybe<
    Array<Types.ProductSortInput> | Types.ProductSortInput
  >;
}>;

export type SearchProductsQuery = {
  __typename?: 'Query';
  searchProducts?: {
    __typename?: 'SearchProductsConnection';
    pageInfo: { __typename?: 'PageInfo'; hasNextPage: boolean };
    nodes?: Array<{
      __typename?: 'Product';
      productId?: number | null;
      name: string;
      price: number;
      category?: { __typename?: 'ProductCategory'; name: string } | null;
      variants?: Array<{
        __typename?: 'ProductVariant';
        media?: Array<{
          __typename?: 'ProductVariantMedium';
          url?: string | null;
          mediaType: string;
          description: string;
        }> | null;
      }> | null;
    }> | null;
  } | null;
};

export const SearchProductsDocument = gql`
  query SearchProducts(
    $where: ProductFilterInput
    $order: [ProductSortInput!]
  ) {
    searchProducts(where: $where, order: $order) {
      pageInfo {
        hasNextPage
      }
      nodes {
        ...ProductSimpleCard
      }
    }
  }
  ${ProductSimpleCardFragmentDoc}
`;

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a React component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useSearchProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(
    SearchProductsDocument,
    options,
  );
}
export function useSearchProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(
    SearchProductsDocument,
    options,
  );
}
export type SearchProductsQueryHookResult = ReturnType<
  typeof useSearchProductsQuery
>;
export type SearchProductsLazyQueryHookResult = ReturnType<
  typeof useSearchProductsLazyQuery
>;
export type SearchProductsQueryResult = Apollo.QueryResult<
  SearchProductsQuery,
  SearchProductsQueryVariables
>;
