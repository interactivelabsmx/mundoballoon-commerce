import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import LabelBase from '@components/UI/form/LabelBase';
import LoadingText from '@components/UI/loading/LoadingText';
import { useGetUserEventByIdLazyQuery } from '@graphql/queries/users/GetUserEventById';

interface IDetailsView {
  userEventId: number;
}
const DetailsView = ({ userEventId }: IDetailsView) => {
  const { t } = useTranslation('common');
  const [loadGreeting, { loading, error, data }] = useGetUserEventByIdLazyQuery(
    {
      variables: { userEventId },
    }
  );
  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { userEventById } = data;
  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {t('Event_Details')}
          </h3>
          <br />
          <LabelBase
            htmlFor={''}
            label={t('Here_you_can_find_details')}
          ></LabelBase>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <LabelBase htmlFor={''} label={t('Event_Name')}></LabelBase>
              <dd className="mt-1 text-sm text-gray-900">
                {userEventById?.name}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <LabelBase htmlFor={''} label={t('Creation_Date')}></LabelBase>
              <dd className="mt-1 text-sm text-gray-900">
                {userEventById?.date}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <LabelBase htmlFor={''} label={t('Details')}></LabelBase>
              <dd className="mt-1 text-sm text-gray-900">
                {userEventById?.details}
              </dd>
            </div>
          </dl>
          <form className="relative flex w-full flex-col overflow-hidden bg-white pt-6 pb-8 sm:rounded-lg sm:pb-6 lg:py-8">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
              <LabelBase htmlFor={''} label={t('Cart')}></LabelBase>
            </div>
            <section aria-labelledby="cart-heading">
              <ul
                role="list"
                className="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8"
              >
                {userEventById?.carts?.map((event) => (
                  <li
                    key={event.eventCartId}
                    className="flex py-8 text-sm sm:items-center"
                  >
                    <img className="h-24 w-24 flex-none rounded-lg border border-gray-200 sm:h-32 sm:w-32" />
                    <div className="ml-4 grid flex-auto grid-cols-1 grid-rows-1 items-start gap-y-3 gap-x-5 sm:ml-6 sm:flex sm:items-center sm:gap-0">
                      <div className="row-end-1 flex-auto sm:pr-6">
                        <h3 className="font-medium text-gray-900">
                          <a>{event.label}</a>
                        </h3>
                        <p className="mt-1 text-gray-500">{event.price}</p>
                      </div>
                      <p className="row-span-2 row-end-2 font-medium text-gray-900 sm:order-1 sm:ml-6 sm:w-1/3 sm:flex-none sm:text-right">
                        {event.sku}
                      </p>
                      <div className="flex items-center sm:block sm:flex-none sm:text-center">
                        <label
                          htmlFor={`quantity-${event}`}
                          className="sr-only"
                        >
                          Quantity, {event.quantity}
                        </label>
                        <SecundaryButton type="button">
                          {t('Remove')}
                        </SecundaryButton>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section
              aria-labelledby="summary-heading"
              className="mt-auto sm:px-6 lg:px-8"
            >
              <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
                <h2 id="summary-heading" className="sr-only">
                  Order summary
                </h2>

                <div className="flow-root">
                  <dl className="-my-4 divide-y divide-gray-200 text-sm">
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-gray-600">Subtotal</dt>
                      <dd className="font-medium text-gray-900">$262.00</dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-gray-600">Shipping</dt>
                      <dd className="font-medium text-gray-900">$5.00</dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-gray-600">Tax</dt>
                      <dd className="font-medium text-gray-900">$53.40</dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-base font-medium text-gray-900">
                        Order total
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        $320.40
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <PrimaryButton type="submit">
                {t('Continue_to_Payment')}
              </PrimaryButton>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};
export default DetailsView;
