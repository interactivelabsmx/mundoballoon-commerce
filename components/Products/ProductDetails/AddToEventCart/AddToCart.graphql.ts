import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../../../graphql/graphql';

const defaultOptions = {} as const;
export type AddToCartMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
  sku: Types.Scalars['String'];
  quantity: Types.Scalars['Decimal'];
  price: Types.Scalars['Decimal'];
  productVariantId: Types.Scalars['Int'];
}>;

export type AddToCartMutation = {
  __typename?: 'Mutation';
  addToCart: {
    __typename?: 'UserCart';
    userId: string;
    sku: string;
    quantity: any;
    price: any;
    productVariantId: number;
  };
};

export const AddToCartDocument = gql`
  mutation AddToCart(
    $userId: String!
    $sku: String!
    $quantity: Decimal!
    $price: Decimal!
    $productVariantId: Int!
  ) {
    addToCart(
      userId: $userId
      sku: $sku
      quantity: $quantity
      price: $price
      productVariantId: $productVariantId
    ) {
      userId
      sku
      quantity
      price
      productVariantId
    }
  }
`;
export type AddToCartMutationFn = Apollo.MutationFunction<
  AddToCartMutation,
  AddToCartMutationVariables
>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      sku: // value for 'sku'
 *      quantity: // value for 'quantity'
 *      price: // value for 'price'
 *      productVariantId: // value for 'productVariantId'
 *   },
 * });
 */
export function useAddToCartMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddToCartMutation,
    AddToCartMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(
    AddToCartDocument,
    options
  );
}
export type AddToCartMutationHookResult = ReturnType<
  typeof useAddToCartMutation
>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<
  AddToCartMutation,
  AddToCartMutationVariables
>;
