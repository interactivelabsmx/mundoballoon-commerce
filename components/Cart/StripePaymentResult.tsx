import { useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

interface IStripePaymentResult {
  clientSecret: string;
}

export const StripePaymentResult = ({ clientSecret }: IStripePaymentResult) => {
  const [message, setMessage] = useState('');
  const stripe = useStripe();

  useEffect(() => {
    if (!stripe || !clientSecret) return;
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log(paymentIntent);
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe, clientSecret]);

  return <>{message}</>;
};

export default StripePaymentResult;
