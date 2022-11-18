import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../../../graphql/graphql';

const defaultOptions = {} as const;
export type GetProductDetailsQueryVariables = Types.Exact<{
  productId: Types.Scalars['Int'];
}>;

export type GetProductDetailsQuery = {
  __typename?: 'Query';
  productById?: {
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
      media?: Array<{
        __typename?: 'ProductVariantMedium';
        url?: string | null;
        quality: string;
        name: string;
        description: string;
      }> | null;
      variantValues?: Array<{
        __typename?: 'ProductVariantValue';
        variant?: {
          __typename?: 'Variant';
          name: string;
          uiRegistry?: {
            __typename?: 'UiRegistry';
            componentId?: string | null;
          } | null;
        } | null;
        variantValue?: { __typename?: 'VariantValue'; value: string } | null;
      }> | null;
      reviews?: Array<{
        __typename?: 'ProductVariantReview';
        rating: any;
        comments?: string | null;
      }> | null;
    }> | null;
  } | null;
};

export const GetProductDetailsDocument = gql`
  query GetProductDetails($productId: Int!) {
    productById(productId: $productId) {
      productId
      name
      description
      price
      category {
        name
      }
      variants {
        productVariantId
        sku
        price
        media {
          url
          quality
          name
          description
        }
        variantValues {
          variant {
            name
            uiRegistry {
              componentId
            }
          }
          variantValue {
            value
          }
        }
        reviews {
          rating
          comments
        }
      }
    }
  }
`;

/**
 * __useGetProductDetailsQuery__
 *
 * To run a query within a React component, call `useGetProductDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductDetailsQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductDetailsQuery,
    GetProductDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductDetailsQuery,
    GetProductDetailsQueryVariables
  >(GetProductDetailsDocument, options);
}
export function useGetProductDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductDetailsQuery,
    GetProductDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductDetailsQuery,
    GetProductDetailsQueryVariables
  >(GetProductDetailsDocument, options);
}
export type GetProductDetailsQueryHookResult = ReturnType<
  typeof useGetProductDetailsQuery
>;
export type GetProductDetailsLazyQueryHookResult = ReturnType<
  typeof useGetProductDetailsLazyQuery
>;
export type GetProductDetailsQueryResult = Apollo.QueryResult<
  GetProductDetailsQuery,
  GetProductDetailsQueryVariables
>;
