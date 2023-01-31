import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../../../graphql/graphql';

const defaultOptions = {} as const;
export type GetProductVariantReviewsQueryVariables = Types.Exact<{
  productId: Types.Scalars['Int'];
}>;

export type GetProductVariantReviewsQuery = {
  __typename?: 'Query';
  productVariantReviews: Array<{
    __typename?: 'ProductVariantReview';
    productVariantReviewId: number;
    userId: string;
    rating: number;
    comments?: string | null;
    createdAt?: any | null;
    productVariant?: {
      __typename?: 'ProductVariant';
      name: string;
      description: string;
      sku: string;
      productVariantId?: number | null;
    } | null;
  }>;
};

export const GetProductVariantReviewsDocument = gql`
  query getProductVariantReviews($productId: Int!) {
    productVariantReviews(productId: $productId) {
      productVariantReviewId
      userId
      rating
      comments
      createdAt
      productVariant {
        name
        description
        sku
        productVariantId
      }
    }
  }
`;

/**
 * __useGetProductVariantReviewsQuery__
 *
 * To run a query within a React component, call `useGetProductVariantReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductVariantReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductVariantReviewsQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductVariantReviewsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductVariantReviewsQuery,
    GetProductVariantReviewsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductVariantReviewsQuery,
    GetProductVariantReviewsQueryVariables
  >(GetProductVariantReviewsDocument, options);
}
export function useGetProductVariantReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductVariantReviewsQuery,
    GetProductVariantReviewsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductVariantReviewsQuery,
    GetProductVariantReviewsQueryVariables
  >(GetProductVariantReviewsDocument, options);
}
export type GetProductVariantReviewsQueryHookResult = ReturnType<
  typeof useGetProductVariantReviewsQuery
>;
export type GetProductVariantReviewsLazyQueryHookResult = ReturnType<
  typeof useGetProductVariantReviewsLazyQuery
>;
export type GetProductVariantReviewsQueryResult = Apollo.QueryResult<
  GetProductVariantReviewsQuery,
  GetProductVariantReviewsQueryVariables
>;
