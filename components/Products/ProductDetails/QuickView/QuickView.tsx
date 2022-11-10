import useTranslation from 'next-translate/useTranslation';
import Image from 'next/future/image';
import { useEffect, useState } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import StarsYellow from '@components/UI/reviews/StarsYellow';
import { getFirstMedia } from '@lib/products/getFirstMedia';
import VariantsDisplay from '../VariantsDisplay';
import AddToEventCart from './AddToEventCart';
import { useGetProductQuickViewLazyQuery } from './GetProductQuickView.graphql';

interface IQuickView {
  productId: number;
}

const QuickView = ({ productId }: IQuickView) => {
  const { t } = useTranslation('common');
  const [quantity, setQuantity] = useState(0);
  const handleChange = (event: any) => {
    setQuantity(event.target.value as number);
  };

  const [loadProductQuickView, { loading, error, data }] =
    useGetProductQuickViewLazyQuery({
      variables: { productId },
    });
  useEffect(() => {
    loadProductQuickView();
  }, [loadProductQuickView]);
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const {
    productQuickView: { product, variants, variantValues },
  } = data;
  if (!product) return <SimpleTextError />;
  const media = getFirstMedia(product);

  return (
    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
      <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
        <Image
          src={media.url}
          alt={media.description || 'Product Description'}
          className="object-center object-cover"
          fill
        />
      </div>
      <div className="sm:col-span-8 lg:col-span-7">
        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
          {product?.name}
        </h2>
        <section aria-labelledby="information-heading" className="mt-2">
          <h3 id="information-heading" className="sr-only">
            Product information
          </h3>
          <p className="text-2xl text-gray-900">${product?.price}</p>
          <div className="mt-6">
            <StarsYellow
              rating={4}
              count={50}
              href={`/product/${productId}/reviews`}
            />
          </div>
          <div className="mt-6">
            <h4 className="sr-only">Description</h4>
            <span>{product?.description}</span>
          </div>
          <br />
          <span>{t('Quantity')}: </span>
          <select
            onChange={handleChange}
            className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            value={quantity}
          >
            <option value={1} selected>
              1
            </option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
          </select>
        </section>
        <section aria-labelledby="options-heading" className="mt-10">
          <form>
            {variants && variantValues && (
              <VariantsDisplay
                variants={variants}
                variantValues={variantValues}
              />
            )}
            <AddToEventCart />
          </form>
        </section>
      </div>
    </div>
  );
};

export default QuickView;
