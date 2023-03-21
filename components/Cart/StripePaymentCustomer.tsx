import React from 'react';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCommerce } from '@providers/CommerceProvider';
import type { IStripePayment } from './StripePayment';
import StripePaymentFlow from './StripePaymentFlow';

const StripePaymentCustomer = ({ user }: IStripePayment) => {
  const {
    payments: { customer, createCustomer },
  } = useCommerce();

  if (!customer) {
    createCustomer();
    return <LoadingText />;
  }

  return customer && <StripePaymentFlow user={user} />;
};

export default StripePaymentCustomer;
