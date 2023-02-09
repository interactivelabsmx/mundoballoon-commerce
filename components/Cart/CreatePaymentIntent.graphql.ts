import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type * as Types from '../../graphql/graphql';

const defaultOptions = {} as const;
export type CreatePaymentIntentMutationVariables = Types.Exact<{
  amount: Types.Scalars['Long'];
  customerId: Types.Scalars['String'];
}>;

export type CreatePaymentIntentMutation = {
  __typename?: 'Mutation';
  createPaymentIntent: string;
};

export const CreatePaymentIntentDocument = gql`
  mutation CreatePaymentIntent($amount: Long!, $customerId: String!) {
    createPaymentIntent(amount: $amount, customerId: $customerId)
  }
`;
export type CreatePaymentIntentMutationFn = Apollo.MutationFunction<
  CreatePaymentIntentMutation,
  CreatePaymentIntentMutationVariables
>;

/**
 * __useCreatePaymentIntentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentIntentMutation, { data, loading, error }] = useCreatePaymentIntentMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
export function useCreatePaymentIntentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePaymentIntentMutation,
    CreatePaymentIntentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePaymentIntentMutation,
    CreatePaymentIntentMutationVariables
  >(CreatePaymentIntentDocument, options);
}
export type CreatePaymentIntentMutationHookResult = ReturnType<
  typeof useCreatePaymentIntentMutation
>;
export type CreatePaymentIntentMutationResult =
  Apollo.MutationResult<CreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationOptions = Apollo.BaseMutationOptions<
  CreatePaymentIntentMutation,
  CreatePaymentIntentMutationVariables
>;
