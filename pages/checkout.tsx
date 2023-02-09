import CheckoutContainer from '@components/Cart/CheckoutContainer';
import Layout from '@layouts/Layout';
import getServerSidePreFetch from '@lib/getServerSidePreFetch';

const Checkout = () => {
  return (
    <Layout>
      <CheckoutContainer />
    </Layout>
  );
};

export const getServerSideProps = getServerSidePreFetch({ Page: Checkout });

export default Checkout;
