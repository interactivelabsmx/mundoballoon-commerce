import { Elements } from '@stripe/react-stripe-js';
import type { StripeElementsOptions } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';
import PaymentForm from './PaymentForm';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripe = loadStripe('pk_test_b8SZC99Ac6LFHWr18HmLKPB5');

const StripePayment = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = { theme: 'stripe' };

  const options = {
    clientSecret,
    appearance,
  } as StripeElementsOptions;

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripe}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
};

export default StripePayment;
