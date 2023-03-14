import { Elements } from '@stripe/react-stripe-js';
import type { StripeElementsOptions } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import type { Customer } from '@graphql/graphql';
import StripeAddressForm from './StripeAddressForm';
import type { IStripePayment } from './StripePayment';
import StripePaymentForm from './StripePaymentForm';

const stripe = loadStripe('pk_test_b8SZC99Ac6LFHWr18HmLKPB5');

interface IStripePaymentFlow {
  customer: Customer;
}

const StripePaymentFlow = ({
  user,
  customer,
}: IStripePayment & IStripePaymentFlow) => {
  const appearance = { theme: 'flat' };
  const options = { appearance } as StripeElementsOptions;
  return (
    <div>
      <Elements options={options} stripe={stripe}>
        {!customer.address ? (
          <StripeAddressForm />
        ) : (
          <StripePaymentForm user={user} />
        )}
      </Elements>
    </div>
  );
};

export default StripePaymentFlow;
