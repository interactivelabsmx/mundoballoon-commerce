import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../../../graphql/graphql';

const defaultOptions = {} as const;
export type AddProductVariantReviewMutationVariables = Types.Exact<{
  productVariantId: Types.Scalars['Int'] | undefined;
  rating: Types.Scalars['Int'];
  comments: Types.Scalars['String'];
}>;

export type AddProductVariantReviewMutation = {
  __typename?: 'Mutation';
  addProductVariantReview: {
    __typename?: 'ProductVariantReview';
    productVariantId: number;
    productVariantReviewId: number;
    rating: number;
    comments?: string | null;
  };
};

export const AddProductVariantReviewDocument = gql`
  mutation AddProductVariantReview(
    $productVariantId: Int!
    $rating: Int!
    $comments: String!
  ) {
    addProductVariantReview(
      productVariantId: $productVariantId
      rating: $rating
      comments: $comments
    ) {
      productVariantId
      productVariantReviewId
      rating
      comments
    }
  }
`;
export type AddProductVariantReviewMutationFn = Apollo.MutationFunction<
  AddProductVariantReviewMutation,
  AddProductVariantReviewMutationVariables
>;

/**
 * __useAddProductVariantReviewMutation__
 *
 * To run a mutation, you first call `useAddProductVariantReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductVariantReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductVariantReviewMutation, { data, loading, error }] = useAddProductVariantReviewMutation({
 *   variables: {
 *      productVariantId: // value for 'productVariantId'
 *      rating: // value for 'rating'
 *      comments: // value for 'comments'
 *   },
 * });
 */
export function useAddProductVariantReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddProductVariantReviewMutation,
    AddProductVariantReviewMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddProductVariantReviewMutation,
    AddProductVariantReviewMutationVariables
  >(AddProductVariantReviewDocument, options);
}
export type AddProductVariantReviewMutationHookResult = ReturnType<
  typeof useAddProductVariantReviewMutation
>;
export type AddProductVariantReviewMutationResult =
  Apollo.MutationResult<AddProductVariantReviewMutation>;
export type AddProductVariantReviewMutationOptions = Apollo.BaseMutationOptions<
  AddProductVariantReviewMutation,
  AddProductVariantReviewMutationVariables
>;
