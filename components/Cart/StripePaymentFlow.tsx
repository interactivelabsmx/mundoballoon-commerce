import { Elements } from '@stripe/react-stripe-js';
import type { StripeElementsOptionsClientSecret } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCommerce } from '@providers/CommerceProvider';
import StripeAddressForm from './StripeAddressForm';
import type { IStripePayment } from './StripePayment';
import StripePaymentForm from './StripePaymentForm';

const stripe = loadStripe('pk_test_b8SZC99Ac6LFHWr18HmLKPB5');

const StripePaymentFlow = ({ user }: IStripePayment) => {
  const {
    payments: { customer, clientSecret, createPaymentIntent },
    cart: { total },
  } = useCommerce();
  if (customer?.address && !clientSecret) {
    createPaymentIntent({ customerId: customer.id, amount: total });
    return <LoadingText />;
  }
  const appearance = { theme: 'flat' };
  const options = {
    appearance,
    clientSecret,
  } as StripeElementsOptionsClientSecret;
  return (
    <div>
      <Elements options={options} stripe={stripe}>
        {!customer?.address ? (
          <StripeAddressForm />
        ) : (
          <StripePaymentForm user={user} />
        )}
      </Elements>
    </div>
  );
};

export default StripePaymentFlow;
