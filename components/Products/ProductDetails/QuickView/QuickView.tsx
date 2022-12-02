import Image from 'next/image';
import { useEffect, useState } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import StarsYellow from '@components/UI/reviews/StarsYellow';
import { getFirstMedia } from '@lib/products/getFirstMedia';
import AddToEventCart from '../AddToEventCart';
import VariantsDisplay from '../VariantsDisplay';
import { useGetProductQuickViewLazyQuery } from './GetProductQuickView.graphql';

interface IQuickView {
  productId: number;
}

const QuickView = ({ productId }: IQuickView) => {
  const [variantIndex, setVariantIndex] = useState(0);
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
    productQuickView: product,
    productVariants: { variants, variantValues },
  } = data;
  if (!product) return <SimpleTextError />;

  const media = getFirstMedia(product, variantIndex);

  const productVariant = product.variants && product.variants[variantIndex];

  return (
    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
      <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
        <Image
          fill
          src={media.url || ''}
          alt={media.description || 'Product Description'}
          className="object-center object-cover"
        />
      </div>
      <div className="sm:col-span-8 lg:col-span-7">
        <h1 className="text-2xl font-bold text-gray-900 sm:pr-12">
          {product?.name}
        </h1>

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
        </section>
        <section aria-labelledby="options-heading" className="mt-10">
          {variants && variantValues && (
            <VariantsDisplay
              variants={variants}
              variantValues={variantValues}
              setVariantIndex={setVariantIndex}
            />
          )}
          {productVariant && <AddToEventCart productVariant={productVariant} />}
        </section>
      </div>
    </div>
  );
};

export default QuickView;
