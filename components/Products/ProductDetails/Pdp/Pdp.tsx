import { HeartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import IconButton from '@components/UI/buttons/IconButton';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import LoadingText from '@components/UI/loading/LoadingText';
import StarsYellow from '@components/UI/reviews/StarsYellow';
import VariantsDisplay from '../VariantsDisplay';
import AditionalDetails, { detailsMock } from './AditionalDetails';
import { useGetProductDetailsQuery } from './GetProductDetails.graphql';
import ImageGallery from './ImageGallery';

export interface IPdp {
  productId: number;
}

const Pdp = ({ productId }: IPdp) => {
  const [variantIndex, setVariantIndex] = useState(0);
  const { loading, error, data } = useGetProductDetailsQuery({
    variables: { productId },
  });
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;

  const { productById: product, productVariants } = data;
  const { variants, variantValues } = productVariants;

  if (!product || !variantValues) return <SimpleTextError />;

  const media = product.variants && product.variants[variantIndex].media;

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
                <p className="text-sm text-gray-700">{product?.description}</p>
              </div>
            </section>

            <section aria-labelledby="options-heading" className="mt-10">
              <h3 id="options-heading" className="sr-only">
                Product options
              </h3>
              <form>
                {variants && variantValues && (
                  <VariantsDisplay
                    variants={variants}
                    variantValues={variantValues}
                    setVariantIndex={setVariantIndex}
                  />
                )}
                <div className="mt-6 flex">
                  <PrimaryButton className="w-full py-4">
                    Add to bag
                  </PrimaryButton>
                  <IconButton label="Add To Favorites">
                    <HeartIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </IconButton>
                </div>
              </form>
            </section>
            <AditionalDetails details={detailsMock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdp;
