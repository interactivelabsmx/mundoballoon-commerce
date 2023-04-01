import { useRouter } from 'next/router';
import StripeElements from '@components/Cart/StripeElements';
import StripePaymentResult from '@components/Cart/StripePaymentResult';
import Layout from '@layouts/Layout';
import getServerSidePreFetch from '@lib/getServerSidePreFetch';

const OrderComplete = () => {
  const router = useRouter();
  const { status } = router.query;

  return (
    <Layout>
      <h1>Order Complete</h1>
      <StripeElements>
        <StripePaymentResult status={status?.toString() || ''} />
      </StripeElements>
    </Layout>
  );
};

export const getServerSideProps = getServerSidePreFetch({
  Page: OrderComplete,
});

export default OrderComplete;
