import { AddressElement } from '@stripe/react-stripe-js';
import type {
  StripeAddressElementOptions,
  StripeAddressElementChangeEvent,
} from '@stripe/stripe-js';
import useTranslation from 'next-translate/useTranslation';
import React, { useRef, useState } from 'react';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';

const StripeAddressForm = () => {
  const { t } = useTranslation();
  const [isCompleted, setIsCompleted] = useState(false);
  const address = useRef<StripeAddressElementChangeEvent['value']>();
  const onChange = ({ value, complete }: StripeAddressElementChangeEvent) => {
    address.current = value;
    if (complete !== isCompleted) setIsCompleted(complete);
  };
  const onSaveClick = () => {
    if (isCompleted) {
      console.log('Address Complete:', address.current);
    }
  };
  const options = {
    mode: 'billing',
    allowedCountries: ['MX', 'US'],
  } as StripeAddressElementOptions;
  return (
    <div className="mt-8">
      <h3 className="mb-4">Billing Address</h3>
      <AddressElement onChange={onChange} options={options} />
      <div className="mt-8 text-right">
        <PrimaryButton onClick={onSaveClick} disabled={!isCompleted}>
          {t('save')}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default StripeAddressForm;
