import Layout from '@layouts/Layout';
import getServerSidePreFetch from '@lib/getServerSidePreFetch';

const OrderComplete = () => {
  return (
    <Layout>
      <div>Order Complete</div>
    </Layout>
  );
};

export const getServerSideProps = getServerSidePreFetch({
  Page: OrderComplete,
});

export default OrderComplete;
