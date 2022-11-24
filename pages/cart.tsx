import CheckoutCart from '@components/Cart/CheckoutCart';
import Layout from '@layouts/Layout';
import getServerSidePreFetch from '@lib/getServerSidePreFetch';

const Cart = () => {
  return (
    <Layout>
      <CheckoutCart />
    </Layout>
  );
};

export const getServerSideProps = getServerSidePreFetch({ Page: Cart });

export default Cart;
