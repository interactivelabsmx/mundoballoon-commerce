import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useAuth } from '@providers/AuthProvider';
import CartItems from './CartItems';
import { policies } from './policies';

const CheckoutCart = () => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
        <div className="mx-auto w-full max-w-lg">
          <h1 className="text-center text-xl font-bold py-8">
            {t('Shopping_Cart')}
          </h1>
          {user && <CartItems />}
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
                        width={100}
                        height={100}
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
    </div>
  );
};

export default CheckoutCart;
