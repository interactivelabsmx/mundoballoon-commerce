import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import LoadingText from '@components/UI/loading/LoadingText';
import { useGetUserCartLazyQuery } from '@graphql/queries/users/GetUserCart.graphql';

const policies = [
  {
    name: 'Free returns',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description:
      'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description:
      'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
];

export default function Example() {
  const { t } = useTranslation('common');
  const [loadGreeting, { loading, error, data }] = useGetUserCartLazyQuery();
  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { userCart } = data;

  return (
    <div className="bg-white">
      <br />
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center lg:hidden"></div>
              <a href="#" className="flex">
                <span className="sr-only">Mundo Ballon</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('Shopping_Cart')}
          </h1>

          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <ul
                role="list"
                className="divide-y divide-gray-200 border-t border-b border-gray-200"
              >
                {userCart.map((event) => (
                  <li key={event.productVariantId} className="flex py-6">
                    <div className="flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1572355286138-8dae8e7ba20d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm">
                            <a className="font-medium text-gray-700 hover:text-gray-800">
                              {event.variant?.name}
                            </a>
                          </h4>
                          <p className="ml-4 text-sm font-medium text-gray-900">
                            ${event.variant?.price}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {event.variant?.description}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-1 items-end justify-between">
                        <div className="ml-4">
                          <button
                            type="button"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            <span>{t('Remove')}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="summary-heading" className="mt-10">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>

              <div>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Subtotal
                    </dt>
                    <dd className="ml-4 text-base font-medium text-gray-900">
                      $96.00
                    </dd>
                  </div>
                </dl>
                <p className="mt-1 text-sm text-gray-500">
                  {t('Shipping_And_Taxes')}.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="/cart"
                  className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                >
                  <PrimaryButton
                    type="button"
                    className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    {t('Checkout')}
                  </PrimaryButton>
                </a>
              </div>
            </section>
          </form>
        </div>
        <section
          aria-labelledby="policies-heading"
          className="border-t border-gray-200 bg-gray-50"
        >
          <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {policies.map((policy) => (
                <div
                  key={policy.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 mx-auto h-24 w-auto"
                        src={policy.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-base font-medium text-gray-900">
                      {policy.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {policy.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer aria-labelledby="footer-heading" className="bg-gray-50">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-100 py-10 text-center">
            <p className="text-sm text-gray-500">
              &copy; 2022 Mundo Ballon, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
