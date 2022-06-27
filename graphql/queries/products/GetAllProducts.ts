import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductDetailsFragmentDoc } from '../../fragments/ProductDetailsFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetAllProductsQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']>;
  after?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type GetAllProductsQuery = {
  __typename?: 'Query';
  allProducts?: {
    __typename?: 'AllProductsConnection';
    nodes?: Array<{
      __typename?: 'Product';
      productId?: number | null;
      productCategoryId: number;
      name: string;
      price: number;
      description: string;
      category?: {
        __typename?: 'ProductCategory';
        productCategoryId?: number | null;
        name: string;
        description: string;
      } | null;
      variants?: Array<{
        __typename?: 'ProductVariant';
        productVariantId?: number | null;
        productId: number;
        sku: string;
        name: string;
        description: string;
        price: number;
        variantValues?: Array<{
          __typename?: 'ProductVariantValue';
          variantId: number;
          variantValueId: number;
          variant?: {
            __typename?: 'Variant';
            name: string;
            type: string;
          } | null;
          variantValue?: { __typename?: 'VariantValue'; value: string } | null;
        }> | null;
        media?: Array<{
          __typename?: 'ProductVariantMedium';
          productVariantMediaId?: number | null;
          mediaType: string;
          quality: string;
          url?: string | null;
          name: string;
          description?: string | null;
        }> | null;
      }> | null;
    }> | null;
    pageInfo: {
      __typename?: 'PageInfo';
      hasNextPage: boolean;
      endCursor?: string | null;
      hasPreviousPage: boolean;
      startCursor?: string | null;
    };
  } | null;
};

export const GetAllProductsDocument = gql`
  query GetAllProducts($first: Int = 5, $after: String) {
    allProducts(first: $first, after: $after, order: [{ price: ASC }]) {
      nodes {
        ...ProductDetails
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }
  ${ProductDetailsFragmentDoc}
`;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetAllProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllProductsQuery,
    GetAllProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(
    GetAllProductsDocument,
    options
  );
}
export function useGetAllProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllProductsQuery,
    GetAllProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(
    GetAllProductsDocument,
    options
  );
}
export type GetAllProductsQueryHookResult = ReturnType<
  typeof useGetAllProductsQuery
>;
export type GetAllProductsLazyQueryHookResult = ReturnType<
  typeof useGetAllProductsLazyQuery
>;
export type GetAllProductsQueryResult = Apollo.QueryResult<
  GetAllProductsQuery,
  GetAllProductsQueryVariables
>;
