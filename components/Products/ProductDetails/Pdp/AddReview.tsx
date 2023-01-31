import { Listbox, RadioGroup, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { ExclamationTriangleIcon, StarIcon } from '@heroicons/react/24/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import useTranslation from 'next-translate/useTranslation';
import { Fragment, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form/dist/types';
import type { Asserts } from 'yup';
import * as yup from 'yup';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import LoadingText from '@components/UI/loading/LoadingText';
import classNames from '@lib/utils/classnames';
import { useAddProductVariantReviewMutation } from './AddProductVariantReview.graphql';
import { useGetUserCartByProductIdQuery } from './GetUserCartByProductId.graphql';

const rating = [1, 2, 3, 4, 5];
export interface AddReviews {
  productId: number;
}
export const AddReviewSchema = yup
  .object({ comments: yup.string().required() })
  .required();
interface IAddReviewForm extends Asserts<typeof AddReviewSchema> { }

const AddReview = ({ productId }: AddReviews) => {
  const [selectedStar, setSelectedStar] = useState(rating[0]);
  const { t } = useTranslation('common');
  const [createAddReviewMutation] = useAddProductVariantReviewMutation();
  const onSubmit: SubmitHandler<IAddReviewForm> = ({ comments }) => {
    createAddReviewMutation({
      variables: {
        productVariantId: selected?.productVariantId,
        rating: selectedStar,
        comments: comments,
      },
    });
  };
  const { control, handleSubmit } = useForm<IAddReviewForm>({
    resolver: yupResolver(AddReviewSchema),
  });
  const { data, loading, error } = useGetUserCartByProductIdQuery({
    variables: {
      productId: productId
    },
  });
  const [selected, setSelected] = useState(data?.userCartsByProductId[0]);
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const userCarts = data?.userCartsByProductId;
  let userProducts;
  if(userCarts){
    userProducts = [
      {
        productVariantId: 0,
        sku: 'Nothing here',
        quantity :0,
        price: 0,
        variant : 'Nothing here'
      },
      ...userCarts,
    ];
  }
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white w-96">
      {userProducts ? (
        <><div className="px-4 py-5 sm:px-6">
          <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
            <svg
              className="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
          <br />
          <h2 className="text-lg font-bold">{t('Add_your_review')}</h2>
          <p className="mt-1 font-gray 500">{t('Your_post_will')}</p>
        </div><div className="px-4 py-5 sm:p-6">
            <form className="relative" onSubmit={handleSubmit(onSubmit)}>
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div className="relative mt-1">
                      <Listbox.Label className="block text-sm font-medium text-gray-700">{t('Product_or_products_you_purchased')}</Listbox.Label>
                      <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                        <span className="block truncate">{selected?.variant?.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {data?.userCartsByProductId.map((person) => (
                            <Listbox.Option
                              key={person.productVariantId}
                              className={({ active }) => classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-3 pr-9'
                              )}
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                    {person.variant?.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active ? 'text-white' : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                      )}
                                    >
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
              <RadioGroup value={selectedStar} onChange={setSelectedStar}>
                <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                  {t('Rating')}
                </RadioGroup.Label>
                <div className="mt-4 flex items-center space-x-3">
                  {rating.map((star) => (
                    <RadioGroup.Option
                      key={star}
                      value={star}
                      className={({ active, checked }) => classNames(
                        active && checked ? 'text-yellow-400' : '',
                        !active && checked ? 'text-yellow-400' : '',
                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    >
                      <StarIcon
                        className="h-6 w-6 flex-shrink-0"
                        aria-hidden="true" />
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              <br />
              <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                <label htmlFor="comment" className="sr-only">
                  {t('Add_your_comment')}
                </label>
                <Controller
                  name="comments"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={3}
                      name="comment"
                      id="comment"
                      className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
                      placeholder={t('Add_your_comment')}
                      defaultValue={''} />
                  )} />
                <div className="py-2" aria-hidden="true">
                  <div className="py-px">
                    <div className="h-9" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                <div className="flex-shrink-0">
                  <PrimaryButton type="submit">{t('Post')}</PrimaryButton>
                </div>
              </div>
            </form>
          </div></>

      ):(
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <ExclamationTriangleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {t('Sorry, you cant review')}
                    </h3>
                  </div>
                </div>
          </div>
        </div>
        
      )}
    </div>
  );
};
export default AddReview;
