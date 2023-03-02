import { Elements } from '@stripe/react-stripe-js';
import type { StripeElementsOptions } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';
import { useCreatePaymentIntentMutation } from './CreatePaymentIntent.graphql';
import type { IStripePayment } from './StripePayment';
import StripePaymentForm from './StripePaymentForm';

const stripe = loadStripe('pk_test_b8SZC99Ac6LFHWr18HmLKPB5');

interface IStripePaymentFlow {
  customerId: string;
}

const StripePaymentFlow = ({
  user,
  customerId,
}: IStripePayment & IStripePaymentFlow) => {
  const [clientSecret, setClientSecret] = useState('');
  const [createPaymentIntentMutation] = useCreatePaymentIntentMutation();

  useEffect(() => {
    async function callMutation() {
      const result = await createPaymentIntentMutation({
        variables: { amount: 100, customerId },
      });
      const secret = result.data?.createPaymentIntent || '';
      setClientSecret(secret);
    }
    callMutation();
  }, [createPaymentIntentMutation, customerId]);

  const appearance = { theme: 'flat' };

  const options = {
    clientSecret,
    appearance,
  } as StripeElementsOptions;

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripe}>
          <StripePaymentForm user={user} />
        </Elements>
      )}
    </div>
  );
};

export default StripePaymentFlow;
