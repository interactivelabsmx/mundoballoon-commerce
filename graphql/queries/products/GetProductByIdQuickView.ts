import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetProductByIdQueryVariables = Types.Exact<{
  productId: Types.Scalars['Int'];
}>;

export type GetProductByIdQuery = {
  __typename?: 'Query';
  productById?: {
    __typename?: 'Product';
    productId?: number | null;
    name: string;
    description: string;
    price: number;
    variants?: Array<{
      __typename?: 'ProductVariant';
      media?: Array<{
        __typename?: 'ProductVariantMedium';
        url?: string | null;
        mediaType: string;
      }> | null;
      variantValues?: Array<{
        __typename?: 'ProductVariantValue';
        variant?: { __typename?: 'Variant'; name: string } | null;
        variantValue?: { __typename?: 'VariantValue'; value: string } | null;
      }> | null;
    }> | null;
  } | null;
};

export const GetProductByIdDocument = gql`
  query GetProductById($productId: Int!) {
    productById(productId: $productId) {
      productId
      name
      description
      price
      variants {
        media {
          url
          mediaType
        }
        variantValues {
          variant {
            name
          }
          variantValue {
            value
          }
        }
      }
    }
  }
`;

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductByIdQuery,
    GetProductByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(
    GetProductByIdDocument,
    options
  );
}
export function useGetProductByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductByIdQuery,
    GetProductByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(
    GetProductByIdDocument,
    options
  );
}
export type GetProductByIdQueryHookResult = ReturnType<
  typeof useGetProductByIdQuery
>;
export type GetProductByIdLazyQueryHookResult = ReturnType<
  typeof useGetProductByIdLazyQuery
>;
export type GetProductByIdQueryResult = Apollo.QueryResult<
  GetProductByIdQuery,
  GetProductByIdQueryVariables
>;
