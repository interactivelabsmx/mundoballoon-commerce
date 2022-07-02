import { GetServerSideProps } from 'next';
import ProductListHero from '@components/Products/ProductLists/ProductListHero';
import {
  GetHomepageProductsDocument,
  GetHomepageProductsQuery,
  GetHomepageProductsQueryVariables,
} from '@graphql/queries/products/GetHomepageProducts';
import { ProductsDictionaryFragment } from '@graphql/queries/products/ProductsDictionaryFragment';
import Layout from '@layouts/Layout';
import { getClient } from '@lib/apollo/apolloClient';

interface IIndex {
  productDictionary?: ProductsDictionaryFragment[];
}

const Index = ({ productDictionary }: IIndex) => (
  <Layout>
    <ProductListHero productDictionary={productDictionary} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps<IIndex> = async () => {
  const client = getClient({});
  const { data } = await client.query<
    GetHomepageProductsQuery,
    GetHomepageProductsQueryVariables
  >({
    query: GetHomepageProductsDocument,
    variables: { includeBestSelling: true, includeNewest: true },
  });
  const productDictionary = data.homepageProducts;
  return {
    props: {
      productDictionary,
    },
  };
};

export default Index;
