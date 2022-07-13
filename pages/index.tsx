import ProductListHero from '@components/Products/ProductLists/ProductListHero';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import { useGetHomepageProductsQuery } from '@graphql/queries/products/GetHomepageProducts';
import Layout from '@layouts/Layout';
import getServerSidePreFetch from '@lib/getServerSidePreFetch';

const Index = () => {
  const { loading, error, data } = useGetHomepageProductsQuery();
  if (loading) return <LoadingText />;
  if (error) return <SimpleTextError text={error.message} />;
  const { homepageProducts } = data || {};
  return (
    <Layout>
      <ProductListHero productDictionary={homepageProducts} />
    </Layout>
  );
};

export const getServerSideProps = getServerSidePreFetch({ Page: Index });

export default Index;
