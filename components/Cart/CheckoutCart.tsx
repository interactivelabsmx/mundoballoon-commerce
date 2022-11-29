import { yupResolver } from '@hookform/resolvers/yup';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import BaseLink from '@components/UI/links/BaseLink';
import LoadingText from '@components/UI/loading/LoadingText';
import { useGetUserCartLazyQuery } from '@graphql/queries/users/GetUserCart.graphql';

export const userEventSchema = yup
  .object({
    Email: yup.string().required(),
    PhoneNumber: yup.number().required(),
    terms: yup.string().required(),
  })
  .required();
interface ICheckoutCart extends Asserts<typeof userEventSchema> {}
const CheckoutCard = () => {
  const {
    control,
    formState: { errors },
  } = useForm<ICheckoutCart>({
    resolver: yupResolver(userEventSchema),
  });

  const { t } = useTranslation('common');
  const [loadGreeting, { loading, error, data }] = useGetUserCartLazyQuery();
  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { userCart } = data;
  /* const deleteProduct = () => {
    const [deleteUserCartMutation] = useDeleteUserCartMutation({
      variables: {
        sku: '',
      },
    });
  };*/
  return (
    <div className="bg-white">
      <br />
      <br />
      <br />
      <main className="mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">{t('Checkout')}</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">{t('Order summary')}</h2>

            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {userCart.map((event) => (
                  <li key={event.sku} className="flex space-x-6 py-6">
                    <img
                      src="https://images.unsplash.com/photo-1536185752-9dc80dd63510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                    />
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto space-y-1 text-sm font-medium">
                          <h3 className="text-gray-900">
                            <a>{event.variant?.name}</a>
                          </h3>
                          <p className="text-gray-900">
                            $ {event.variant?.price}
                          </p>
                          <p className="hidden text-gray-500 sm:block">
                            {event.variant?.sku}
                          </p>
                          <p className="hidden text-gray-500 sm:block">
                            {event.variant?.description}
                          </p>
                        </div>
                        <div className="flex flex-none space-x-4">
                          <div className="flex border-l border-gray-300 pl-4">
                            <BaseLink
                              type="button"
                              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              /*onClick={deleteProduct}*/
                            >
                              {t('Remove')}
                            </BaseLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <br />
            <br />
            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">$104.00</dd>
              </div>
              <div className="flex justify-between">
                <dt>{t('Taxes')}</dt>
                <dd className="text-gray-900">$8.32</dd>
              </div>
              <div className="flex justify-between">
                <dt>{t('Shipping')}</dt>
                <dd className="text-gray-900">$14.00</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total</dt>
                <dd className="text-base">$126.32</dd>
              </div>
            </dl>
          </div>
          <div className="mx-auto w-full max-w-lg">
            <form className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">
                {t('Contact_Information')}
              </h2>
              <br />

              <div className="mt-6">
                <div className="mt-1">
                  <Controller
                    name="Email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label={t('Email_Adress')}
                        placeholder=""
                        type="email"
                        autoComplete=""
                        error={errors.Email?.message}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="mt-1">
                  <Controller
                    name="PhoneNumber"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label={t('Phone_Number')}
                        placeholder=""
                        type="text"
                        autoComplete=""
                        error={errors.Email?.message}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="mt-6 flex space-x-2">
                <div>
                  <Controller
                    name="terms"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label=""
                        type="checkbox"
                        error={errors?.terms?.message}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    )}
                  />
                </div>
                <label htmlFor="terms" className="text-sm text-gray-500">
                  {t('I_Have_Read')}
                </label>
              </div>

              <PrimaryButton
                type="submit"
                className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
              >
                {t('Continue')}
              </PrimaryButton>
            </form>

            <div className="mt-10 divide-y divide-gray-200 border-t border-b border-gray-200">
              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                {t('Payment_Details')}
              </button>
              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                {t('Shipping_Address')}
              </button>
              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                {t('Review')}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CheckoutCard;
