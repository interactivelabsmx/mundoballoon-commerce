import { useRouter } from 'next/router';
import StripeElements from '@components/Cart/StripeElements';
import StripePaymentResult from '@components/Cart/StripePaymentResult';
import Layout from '@layouts/Layout';
import getServerSidePreFetch from '@lib/getServerSidePreFetch';

const CheckoutComplete = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <Layout>
      <StripeElements>
        <StripePaymentResult clientSecret="absasdad" />
      </StripeElements>
    </Layout>
  );
};

export const getServerSideProps = getServerSidePreFetch({
  Page: CheckoutComplete,
});

export default CheckoutComplete;
