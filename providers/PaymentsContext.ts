import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { useReducer } from 'react';
import type { Customer } from '@graphql/graphql';
import { CreateCustomerDocument } from './graphql/CreateCustomer.graphql';

enum PaymentsActions {
  SET_CUSTOMER,
}

export interface IPaymentsAction {
  type: PaymentsActions;
  payload: Customer;
}

export interface IPaymentsState {
  customer?: Customer;
}

function PaymentsReducer(state: IPaymentsState, action: IPaymentsAction) {
  const { type, payload } = action;
  switch (type) {
    case PaymentsActions.SET_CUSTOMER:
      return {
        ...state,
        customer: payload,
      };
    default:
      return state;
  }
}

export interface IPaymentsContext {
  customer?: Customer;
  createCustomer: () => void;
}

export const PaymentsContext = {
  createCustomer: () => undefined,
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
    reducer({ type: PaymentsActions.SET_CUSTOMER, payload: data });
  };
  return {
    customer: state.customer,
    createCustomer,
  } as IPaymentsContext;
};
