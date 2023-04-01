import { AddressElement } from '@stripe/react-stripe-js';
import type {
  StripeAddressElementOptions,
  StripeAddressElementChangeEvent,
} from '@stripe/stripe-js';
import useTranslation from 'next-translate/useTranslation';
import React, { useRef, useState } from 'react';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import type { AddressInput } from '@graphql/graphql';
import { useCommerce } from '@providers/CommerceProvider';

const StripeAddressForm = () => {
  const { t } = useTranslation();
  const [isCompleted, setIsCompleted] = useState(false);
  const {
    payments: { customer, updateCustomerAddress },
  } = useCommerce();
  const addressForm = useRef<StripeAddressElementChangeEvent['value']>();
  const onChange = ({ value, complete }: StripeAddressElementChangeEvent) => {
    addressForm.current = value;
    if (complete !== isCompleted) setIsCompleted(complete);
  };
  const onSaveClick = () => {
    if (isCompleted && addressForm.current) {
      const name = addressForm.current.name || '';
      const addressValues = addressForm.current.address;
      const address = {
        city: addressValues.city,
        country: addressValues.country,
        line1: addressValues.line1,
        line2: addressValues.line2,
        postalCode: addressValues.postal_code,
        state: addressValues.state,
      } as AddressInput;
      updateCustomerAddress({
        name,
        address,
        customerId: customer?.id || '',
      });
    }
  };
  const options = {
    mode: 'billing',
    allowedCountries: ['MX', 'US'],
    fields: {
      phone: 'always',
    },
    validation: {
      phone: {
        required: 'auto',
      },
    },
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
