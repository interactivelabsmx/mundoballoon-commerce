import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';
import { ProductsDictionaryFragmentDoc } from './ProductsDictionaryFragment.graphql';

const defaultOptions = {} as const;
export type GetHomepageProductsQueryVariables = Types.Exact<{
  includeBestSelling?: Types.InputMaybe<Types.Scalars['Boolean']>;
  includeNewest?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;

export type GetHomepageProductsQuery = {
  __typename?: 'Query';
  homepageProducts: Array<{
    __typename?: 'KeyValuePairOfStringAndListOfProduct';
    key: string;
    value: Array<{
      __typename?: 'Product';
      productId?: number | null;
      name: string;
      price: any;
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
    }>;
  }>;
};

export const GetHomepageProductsDocument = gql`
  query GetHomepageProducts(
    $includeBestSelling: Boolean = false
    $includeNewest: Boolean = false
  ) {
    homepageProducts(
      includeBestSellingProducts: $includeBestSelling
      includeNewestProducts: $includeNewest
    ) {
      ...ProductsDictionary
    }
  }
  ${ProductsDictionaryFragmentDoc}
`;

/**
 * __useGetHomepageProductsQuery__
 *
 * To run a query within a React component, call `useGetHomepageProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomepageProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomepageProductsQuery({
 *   variables: {
 *      includeBestSelling: // value for 'includeBestSelling'
 *      includeNewest: // value for 'includeNewest'
 *   },
 * });
 */
export function useGetHomepageProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHomepageProductsQuery,
    GetHomepageProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetHomepageProductsQuery,
    GetHomepageProductsQueryVariables
  >(GetHomepageProductsDocument, options);
}
export function useGetHomepageProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHomepageProductsQuery,
    GetHomepageProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetHomepageProductsQuery,
    GetHomepageProductsQueryVariables
  >(GetHomepageProductsDocument, options);
}
export type GetHomepageProductsQueryHookResult = ReturnType<
  typeof useGetHomepageProductsQuery
>;
export type GetHomepageProductsLazyQueryHookResult = ReturnType<
  typeof useGetHomepageProductsLazyQuery
>;
export type GetHomepageProductsQueryResult = Apollo.QueryResult<
  GetHomepageProductsQuery,
  GetHomepageProductsQueryVariables
>;
