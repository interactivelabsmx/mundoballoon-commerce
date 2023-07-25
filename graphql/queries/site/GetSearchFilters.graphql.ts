import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetSearchFiltersQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetSearchFiltersQuery = {
  __typename?: 'Query';
  sortOptions: Array<string>;
  variants: Array<{
    __typename?: 'Variant';
    variantId?: number | null;
    name: string;
    variantValues?: Array<{
      __typename?: 'VariantValue';
      variantValueId?: number | null;
      value: string;
    }> | null;
  }>;
  productCategories: Array<{
    __typename?: 'ProductCategory';
    productCategoryId?: number | null;
    name: string;
  }>;
};

export const GetSearchFiltersDocument = gql`
  query GetSearchFilters {
    variants {
      variantId
      name
      variantValues {
        variantValueId
        value
      }
    }
    productCategories {
      productCategoryId
      name
    }
    sortOptions
  }
`;

/**
 * __useGetSearchFiltersQuery__
 *
 * To run a query within a React component, call `useGetSearchFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchFiltersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSearchFiltersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSearchFiltersQuery,
    GetSearchFiltersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSearchFiltersQuery, GetSearchFiltersQueryVariables>(
    GetSearchFiltersDocument,
    options,
  );
}
export function useGetSearchFiltersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSearchFiltersQuery,
    GetSearchFiltersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSearchFiltersQuery,
    GetSearchFiltersQueryVariables
  >(GetSearchFiltersDocument, options);
}
export type GetSearchFiltersQueryHookResult = ReturnType<
  typeof useGetSearchFiltersQuery
>;
export type GetSearchFiltersLazyQueryHookResult = ReturnType<
  typeof useGetSearchFiltersLazyQuery
>;
export type GetSearchFiltersQueryResult = Apollo.QueryResult<
  GetSearchFiltersQuery,
  GetSearchFiltersQueryVariables
>;
