import type { User } from '@firebase/auth';
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import type {
  StripeLinkAuthenticationElementChangeEvent,
  StripePaymentElementOptions,
} from '@stripe/stripe-js';
import React, { useState } from 'react';
import type { FormEventHandler } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import LoadingSpinner from '@components/UI/loading/LoadingSpinner';

interface IStripePaymentForm {
  user: User;
}

const StripePaymentForm = ({ user }: IStripePaymentForm) => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState(user.email || '');
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/api/checkout/callback',
        receipt_email: email,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  const handleEmailChange = (e: StripeLinkAuthenticationElementChangeEvent) =>
    setEmail(e.value.email);

  const paymentElementOptions = {
    layout: 'tabs',
    readOnly: !email,
  } as StripePaymentElementOptions;

  return (
    <form id="payment-form" className="mt-8" onSubmit={handleSubmit}>
      <div>
        <LinkAuthenticationElement
          id="link-authentication-element"
          onChange={handleEmailChange}
          options={{ defaultValues: { email } }}
        />
      </div>
      <div className="mt-8">
        <h3 className="mb-4">Billing Information</h3>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
      </div>
      <div className="mt-8">
        <PrimaryButton
          className="w-full mt-4"
          disabled={isLoading || !stripe || !elements}
          type="submit"
          id="submit"
        >
          <span id="button-text">
            {isLoading ? <LoadingSpinner /> : 'Pay now'}
          </span>
        </PrimaryButton>
        {message && (
          <div className="mt-4">
            <SimpleTextError text={message} />{' '}
          </div>
        )}
      </div>
    </form>
  );
};

export default StripePaymentForm;
