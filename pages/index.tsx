import { GetServerSideProps } from 'next';
import { ProductDetailsFragment } from '@graphql/fragments/ProductDetailsFragment';
import {
  GetAllProductsDocument,
  GetAllProductsQueryResult,
} from '@graphql/queries/products/GetAllProducts';
import Layout from '@layouts/Layout';
import { getClient } from '@lib/apollo/apolloClient';

interface IIndex {
  products?: ProductDetailsFragment[] | null;
}

const Index = ({ products }: IIndex) => (
  <Layout>MundoBallon Commerce {products?.length}</Layout>
);

export const getServerSideProps: GetServerSideProps<IIndex> = async () => {
  const client = getClient({});
  const { data } = (await client.query({
    query: GetAllProductsDocument,
    variables: { first: 5, after: null },
  })) as GetAllProductsQueryResult;
  const products = data?.allProducts?.nodes;
  return {
    props: {
      products,
    },
  };
};

export default Index;
