import React, { useEffect, useState } from 'react';
import LoadingSpinner from '@components/UI/loading/LoadingSpinner';
import { useCommerce } from '@providers/CommerceProvider';
import type { IStripePayment } from './StripePayment';
import StripePaymentFlow from './StripePaymentFlow';

const StripePaymentCustomer = ({ user }: IStripePayment) => {
  const { payments } = useCommerce();
  const [loadingCustomer, setLoadingCustomer] = useState(true);
  const [customerId, setCustomerId] = useState<string>('');
  const [createCustomerMutation] = payments.createCustomer();

  useEffect(() => {
    async function callMutation() {
      const { data } = await createCustomerMutation();
      setCustomerId(data?.createCustomer || '');
      setLoadingCustomer(false);
    }
    callMutation();
  }, [createCustomerMutation]);

  return loadingCustomer ? (
    <LoadingSpinner />
  ) : (
    <>
      {customerId && <StripePaymentFlow user={user} customerId={customerId} />}
    </>
  );
};

export default StripePaymentCustomer;
