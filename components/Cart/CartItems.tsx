import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
// import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryTextButton from '@components/UI/buttons/PrimaryTextButton';
import AddRemoveComboInput from '@components/UI/form/AddRemoveComboInput';
import LoadingText from '@components/UI/loading/LoadingText';
import useAddRemoveCartItems from '@hooks/useAddRemoveCartItems';
import { useCommerce } from '@providers/CommerceProvider';

const CartItems = () => {
  const { t } = useTranslation('common');
  const {
    cart: { products, subtotal, getUserCart },
  } = useCommerce();
  const { onAdd, onSubtract, onRemove, loading, error } =
    useAddRemoveCartItems();

  if (!products || !subtotal) {
    getUserCart();
    return <LoadingText />;
  }

  return (
    <>
      {products && (
        <section aria-labelledby="cart-heading">
          <ul
            role="list"
            className="divide-y divide-gray-200 border-t border-b border-gray-200"
          >
            {products.map(
              (product) =>
                product.variant && (
                  <li key={product.variant.sku} className="flex py-6">
                    <div className="flex-shrink-0">
                      {product.variant.media && (
                        <Image
                          height={128}
                          width={128}
                          src={product.variant.media[0].url || ''}
                          alt={product.variant.media[0].description || ''}
                          className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                        />
                      )}
                    </div>
                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm">
                            <a className="font-medium text-gray-700 hover:text-gray-800">
                              {product.variant?.name}
                            </a>
                          </h4>
                          <p className="ml-4 text-sm font-medium text-gray-900">
                            ${product.price}
                          </p>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          {product.variant?.description}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-1 items-end justify-between">
                        <div className="text-sm text-gray-500">
                          {error && <SimpleTextError text={error?.message} />}
                          <AddRemoveComboInput
                            quantity={product.quantity}
                            loading={loading}
                            onAdd={() => onAdd(product)}
                            onSubtract={() => onSubtract(product)}
                          />
                        </div>
                        <div className="ml-4">
                          <PrimaryTextButton
                            className="text-sm"
                            onClick={() => onRemove(product)}
                          >
                            {t('Remove')}
                          </PrimaryTextButton>
                        </div>
                      </div>
                    </div>
                  </li>
                )
            )}
          </ul>
        </section>
      )}
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
                ${subtotal}
              </dd>
            </div>
          </dl>
          <p className="mt-1 text-sm text-gray-500">
            {t('Shipping_And_Taxes')}.
          </p>
        </div>
      </section>
    </>
  );
};

export default CartItems;
