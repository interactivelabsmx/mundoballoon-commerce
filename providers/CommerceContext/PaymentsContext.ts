import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { useReducer } from 'react';
import type { Customer } from '@graphql/graphql';
import { CreateCustomerDocument } from '../graphql/CreateCustomer.graphql';
import { CreatePaymentIntentDocument } from '../graphql/CreatePaymentIntent.graphql';
import type { CreatePaymentIntentMutationVariables } from '../graphql/CreatePaymentIntent.graphql';
import { UpdateCustomerAddressDocument } from '../graphql/UpdateCustomerAddress.graphql';
import type { UpdateCustomerAddressMutationVariables } from '../graphql/UpdateCustomerAddress.graphql';

enum PaymentsActions {
  SET_CUSTOMER,
  SET_PAYMENT_INTENT,
}

export interface IPaymentsAction {
  type: PaymentsActions;
  payload: any;
}

export interface IPaymentsState {
  customer?: Customer;
  clientSecret?: string;
}

function PaymentsReducer(state: IPaymentsState, action: IPaymentsAction) {
  const { type, payload } = action;
  switch (type) {
    case PaymentsActions.SET_CUSTOMER:
      return {
        ...state,
        customer: payload,
      };
    case PaymentsActions.SET_PAYMENT_INTENT:
      return {
        ...state,
        clientSecret: payload,
      };
    default:
      return state;
  }
}

export type IPaymentsContext = {
  createCustomer: () => Promise<void>;
  updateCustomerAddress: (
    variables: UpdateCustomerAddressMutationVariables
  ) => Promise<void>;
  createPaymentIntent: (
    variables: CreatePaymentIntentMutationVariables
  ) => Promise<void>;
} & IPaymentsState;

export const PaymentsContext = {
  createCustomer: async () => undefined,
  updateCustomerAddress: async () => undefined,
  createPaymentIntent: async () => undefined,
};

export const usePaymentsContext = (
  client: ApolloClient<NormalizedCacheObject>
) => {
  const [state, reducer] = useReducer(PaymentsReducer, {});

  const createCustomer = async () => {
    const { data, errors } = await client.mutate({
      mutation: CreateCustomerDocument,
    });
    if (errors) throw new Error(errors.toString());
    reducer({
      type: PaymentsActions.SET_CUSTOMER,
      payload: data.createCustomer,
    });
  };

  const updateCustomerAddress = async (
    variables: UpdateCustomerAddressMutationVariables
  ) => {
    const { data, errors } = await client.mutate({
      mutation: UpdateCustomerAddressDocument,
      variables,
    });
    if (errors) throw new Error(errors.toString());
    reducer({
      type: PaymentsActions.SET_CUSTOMER,
      payload: data.updateCustomerAddress,
    });
  };

  const createPaymentIntent = async (
    variables: CreatePaymentIntentMutationVariables
  ) => {
    const { data, errors } = await client.mutate({
      mutation: CreatePaymentIntentDocument,
      variables,
    });
    if (errors) throw new Error(errors.toString());
    reducer({
      type: PaymentsActions.SET_PAYMENT_INTENT,
      payload: data.createPaymentIntent,
    });
  };

  return {
    ...state,
    createCustomer,
    updateCustomerAddress,
    createPaymentIntent,
  } as IPaymentsContext;
};
