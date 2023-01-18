import { TrashIcon } from '@heroicons/react/20/solid';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import { useGetUserCartLazyQuery } from './GetUserCart.graphql';
import UserAddresses from './UserAddresses';
const CheckoutForm = () => {
  const { t } = useTranslation('common');
  const [loadUserCart, { loading, error, data }] = useGetUserCartLazyQuery();
  useEffect(() => {
    loadUserCart();
  }, [loadUserCart]);
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { userCarts } = data;
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
          <UserAddresses/>
            <div className="mt-10 divide-y divide-gray-200 border-t border-b border-gray-200">

              <button
                type="button"
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Payment details
              </button>
              <button
                type="button"
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Shipping address
              </button>
              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Billing address
              </button>
              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Review
              </button>
            </div>
            <div className="mt-10 border-t border-gray-200 pt-10"></div>
          </div>

          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">
              {t('Your_order')}
            </h2>

            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="sr-only">Your order</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {userCarts.map((event) => (
                  <li
                    key={event.variant?.sku}
                    className="flex py-6 px-4 sm:px-6"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={
                          'https://images.unsplash.com/photo-1535953267280-5fd672f9bfa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
                        }
                        className="w-20 rounded-md"
                      />
                    </div>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <a className="font-medium text-gray-700 hover:text-gray-800">
                              {event.variant?.name}
                            </a>
                          </h4>
                        </div>

                        <div className="ml-4 flow-root flex-shrink-0">
                          <button
                            type="button"
                            className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-1 items-end justify-between pt-2">
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          ${event.price}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Shipping</dt>
                  <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Taxes</dt>
                  <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Total</dt>
                  <dd className="text-base font-medium text-gray-900">
                    $75.52
                  </dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <button
                  disabled
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};
export default CheckoutForm;
