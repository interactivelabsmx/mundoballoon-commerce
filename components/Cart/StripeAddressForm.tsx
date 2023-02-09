import { AddressElement } from '@stripe/react-stripe-js';
import React from 'react';

const StripeAddressForm = () => {
  return (
    <>
      <h3 className="mb-4">Billing Address</h3>
      <AddressElement
        options={{
          mode: 'billing',
          allowedCountries: ['MX', 'US'],
          contacts: [],
        }}
      />
    </>
  );
};

export default StripeAddressForm;
