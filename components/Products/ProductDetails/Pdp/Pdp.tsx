import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import StarsYellow from '@components/UI/reviews/StarsYellow';
import { productAditionalDetails } from '@lib/test/fixtures/productAditionalDetails';
import AddToEventCart from '../AddToEventCart';
import VariantsDisplay from '../VariantsDisplay';
import AditionalDetails from './AditionalDetails';
import { useGetProductDetailsQuery } from './GetProductDetails.graphql';
import ImageGallery from './ImageGallery';

export interface IPdp {
  productId: number;
}

const Pdp = ({ productId }: IPdp) => {
  const { t } = useTranslation('common');
  const [variantIndex, setVariantIndex] = useState(0);
  const { loading, error, data } = useGetProductDetailsQuery({
    variables: { productId },
  });
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;

  const { productById: product, productVariants } = data;
  const { variants, variantValues } = productVariants;

  if (!product || !variantValues) return <SimpleTextError />;

  const productVariant = product.variants && product.variants[variantIndex];
  const media = productVariant?.media;

  return (
    <div className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <ImageGallery images={media} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-2xl font-bold text-gray-900 sm:pr-12">
              {product?.name}
            </h1>
            <section aria-labelledby="information-heading" className="mt-2">
              <h3 id="information-heading" className="sr-only">
                {t('product_information')}
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
                <p className="text-sm text-gray-700">{product?.description}</p>
              </div>
            </section>
            <section aria-labelledby="options-heading" className="mt-10">
              <h3 id="options-heading" className="sr-only">
                {t('product_options')}
              </h3>
              <form>
                {variants && variantValues && (
                  <VariantsDisplay
                    variants={variants}
                    variantValues={variantValues}
                    setVariantIndex={setVariantIndex}
                  />
                )}
                <div className="mt-6">
                  {productVariant && (
                    <AddToEventCart productVariant={productVariant} />
                  )}
                </div>
              </form>
            </section>
            <AditionalDetails details={productAditionalDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdp;
