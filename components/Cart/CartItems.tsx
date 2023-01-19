import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryTextButton from '@components/UI/buttons/PrimaryTextButton';
import PrimaryLinkButton from '@components/UI/links/PrimaryLinkButton';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCommerce } from '@providers/CommerceProvider';

const CartItems = () => {
  const { t } = useTranslation('common');
  const { cart } = useCommerce();
  const { loading, error, data } = cart.useCart();
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { userCarts } = data;

  return (
    <>
      <section aria-labelledby="cart-heading">
        <ul
          role="list"
          className="divide-y divide-gray-200 border-t border-b border-gray-200"
        >
          {userCarts.map(
            (event) =>
              event.variant && (
                <li key={event.variant.sku} className="flex py-6">
                  <div className="flex-shrink-0">
                    {event.variant.media && (
                      <Image
                        height={128}
                        width={128}
                        src={event.variant.media[0].url || ''}
                        alt={event.variant.media[0].description || ''}
                        className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                      />
                    )}
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
                          ${event.price}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {event.variant?.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      <div className="ml-4">
                        <PrimaryTextButton>{t('Remove')}</PrimaryTextButton>
                      </div>
                    </div>
                  </div>
                </li>
              )
          )}
        </ul>
      </section>
      <section aria-labelledby="summary-heading" className="mt-10">
        <h2 id="summary-heading" className="sr-only">
          {t('order_summary')}
        </h2>

        <div>
          <dl className="space-y-4">
            <div className="flex items-center justify-between">
              <dt className="text-base font-medium text-gray-900">
                {t('subtotal')}
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
          <PrimaryLinkButton href="/cart" className="w-full">
            {t('Checkout')}
          </PrimaryLinkButton>
        </div>
      </section>
    </>
  );
};

export default CartItems;
