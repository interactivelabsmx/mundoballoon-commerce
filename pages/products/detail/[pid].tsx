import { useRouter } from 'next/router';
import Pdp from '@components/Products/ProductDetails/Pdp';
import Layout from '@layouts/Layout';
import getServerSidePreFetch from '@lib/getServerSidePreFetch';

const ProductDetailPage = () => {
  const router = useRouter();
  const { pid = 0 } = router.query;
  return (
    <Layout>
      <Pdp productId={+pid} />
    </Layout>
  );
};

export const getServerSideProps = getServerSidePreFetch({
  Page: ProductDetailPage,
});

export default ProductDetailPage;
