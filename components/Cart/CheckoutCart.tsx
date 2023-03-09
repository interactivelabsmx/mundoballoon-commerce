
import Image from 'next/image';
import { useAuth } from '@providers/AuthProvider';
import CartItems from './CartItems';
import StripePayment from './StripePayment';
import UserAddresses from './UserAddresses';
import { policies } from './policies';
import useTranslation from 'next-translate/useTranslation';
import CheckoutForm from './CheckoutForm';

const CheckoutCart = () => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  return (
    <div className="bg-white">
      <CheckoutForm />
      <main className="mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
        <div className="mx-auto w-full max-w-lg"></div>
        <h1 className="text-center text-xl font-bold py-8">{t('Checkout')}</h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-l font-semibold my-4">
              {t('Shipping_Address')}
            </h2>
            {user && <UserAddresses />}
            {user && <StripePayment user={user} />}
          </div>
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-l font-semibold my-4">{t('order_summary')}</h2>
            {user && <CartItems />}
          </div>
        </div>

        <section aria-labelledby="policies-heading">
          <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {policies.map((policy) => (
                <div
                  key={policy.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <Image
                        alt=""
                        width={100}
                        height={100}
                        className="-my-1 mx-auto h-24 w-auto"
                        src={policy.imageUrl}
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
    </div>
  );
};

export default CheckoutCart;
