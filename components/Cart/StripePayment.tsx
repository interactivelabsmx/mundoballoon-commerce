import type { User } from '@firebase/auth';
import { Elements } from '@stripe/react-stripe-js';
import type { StripeElementsOptions } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';
import { useCreatePaymentIntentMutation } from './CreatePaymentIntent.graphql';
import StripePaymentForm from './StripePaymentForm';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripe = loadStripe('pk_test_b8SZC99Ac6LFHWr18HmLKPB5');

interface IStripePayment {
  user: User;
}

const StripePayment = ({ user }: IStripePayment) => {
  const [clientSecret, setClientSecret] = useState('');
  const [createPaymentIntentMutation] = useCreatePaymentIntentMutation();

  useEffect(() => {
    async function callMutation() {
      const result = await createPaymentIntentMutation({
        variables: { amount: 100 },
      });
      const secret = result.data?.createPaymentIntent || '';
      setClientSecret(secret);
    }
    callMutation();
  }, [createPaymentIntentMutation]);

  const appearance = { theme: 'flat' };

  const options = {
    clientSecret,
    appearance,
  } as StripeElementsOptions;

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripe}>
          <StripePaymentForm user={user} />
        </Elements>
      )}
    </div>
  );
};

export default StripePayment;
