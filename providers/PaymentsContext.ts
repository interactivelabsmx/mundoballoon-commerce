import type { MutationHookOptions } from '@apollo/client';
import type {
  CreateCustomerMutation,
  CreateCustomerMutationVariables,
  CreateCustomerMutationHookResult,
} from './graphql/CreateCustomer.graphql';
import { useCreateCustomerMutation } from './graphql/CreateCustomer.graphql';

export interface IPaymentsContext {
  createCustomer: (
    baseOptions?: MutationHookOptions<
      CreateCustomerMutation,
      CreateCustomerMutationVariables
    >
  ) => CreateCustomerMutationHookResult;
}

export const PaymentsContext = {
  createCustomer: useCreateCustomerMutation,
};
