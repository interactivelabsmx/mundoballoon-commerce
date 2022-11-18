import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import { useGetProductDetailsQuery } from './GetProductDetails.graphql';

export interface IPdp {
  productId: number;
}

const Pdp = ({ productId }: IPdp) => {
  const { loading, error, data } = useGetProductDetailsQuery({
    variables: { productId },
  });
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;

  const { productById: product } = data;

  return <div>{product?.name}</div>;
};

export default Pdp;
