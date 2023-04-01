import { Elements } from '@stripe/react-stripe-js';
import type { StripeElementsOptionsClientSecret } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import type { ReactNode } from 'react';
import { useCommerce } from '@providers/CommerceProvider';

interface IStripeElements {
  children: ReactNode;
}

const stripeLoader = loadStripe('pk_test_b8SZC99Ac6LFHWr18HmLKPB5');

const StripeElements = ({ children }: IStripeElements) => {
  const {
    payments: { clientSecret },
  } = useCommerce();
  const appearance = { theme: 'flat' };
  const options = {
    appearance,
    clientSecret,
  } as StripeElementsOptionsClientSecret;

  return (
    <Elements options={options} stripe={stripeLoader}>
      {children}
    </Elements>
  );
};

export default StripeElements;
