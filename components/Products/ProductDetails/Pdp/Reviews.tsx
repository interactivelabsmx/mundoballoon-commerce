import { StarIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Modal from '@components/UI/modal/Modal';
import AddReview from './AddReview';
import { useGetProductVariantReviewsQuery } from './GetProductVariantReviews.graphql';
import useTranslation from 'next-translate/useTranslation';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export interface Reviews {
  productId: number;
}
const Reviews = ({ productId }: Reviews) => {
  const { t } = useTranslation('common');
  const { data } = useGetProductVariantReviewsQuery({
    variables: {
      productId: productId,
    },
  });
  const [AddReviewOpen, setAddReviewOpen] = useState(false);
  const openAddReview = () => setAddReviewOpen(true);
  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-32 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {t('Customer_reviews')}
          </h2>
          <p className="text-gray-900">
            {t('It_has_been_realized')} {data?.productVariantReviews.length} {t('reviews')}
          </p>
          <div className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {t('Share_your_thoughts')}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {t('If_you’ve_used_this_product')}
            </p>

            <PrimaryButton
              onClick={openAddReview}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 py-2 px-8 text-sm font-medium text-gray-900 hover"
            >
              {t('Write_a_review')}
            </PrimaryButton>
          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">{t('Recent_reviews')}</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {data?.productVariantReviews.map((review) => (
                <div key={review.productVariantReviewId} className="py-12">
                  <div className="flex items-center">
                    <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">
                        {review.userId}
                      </h4>
                      <h2 className="text-sm text-black-700">
                        {' '}
                        {review.productVariant?.name}
                      </h2>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating
                                ? 'text-yellow-400'
                                : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} {t('out of 5 stars')}</p>
                    </div>
                  </div>
                  <h2 className="mt-4 space-y-6 text-base italic text-gray-600">
                    {review.comments}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal open={AddReviewOpen} setOpen={setAddReviewOpen}>
        <AddReview productId={productId} />
      </Modal>
    </>
  );
};
export default Reviews;
