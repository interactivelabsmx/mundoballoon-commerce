import { Listbox, Menu } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import PrimarySelectMenu from '@components/UI/SelectMenus/PrimarySelectMenu';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import LoadingText from '@components/UI/loading/LoadingText';
import classNames from '@lib/utils/classnames';
import { useAuth } from '@providers/AuthProvider';
import { ProductVariantQuickviewFragment } from '../QuickView/ProductQuickViewFragment.graphql';
import { useAddToCartMutation } from './AddToCart.graphql';
import { useAddToEventCartMutation } from './AddToEventCart.graphql';
import { useGetUserEventsSelectLazyQuery } from './GetUserEventsSelect.graphql';
import { UserEventSelectFragment } from './UserEventSelectFragment.graphql';

interface IAddToEventCart {
  productVariant: ProductVariantQuickviewFragment;
}

const AddToEventCart = ({ productVariant }: IAddToEventCart) => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const [selectedEvent, setSelectedEvent] = useState<UserEventSelectFragment>();
  const [addToCartMutation, { loading: loadingCart, error: errorCart }] =
    useAddToCartMutation();

  const [
    addToEventCartMutation,
    { loading: loadingEventCart, error: errorEventCart },
  ] = useAddToEventCartMutation();

  const [loadGreeting, { loading, error, data }] =
    useGetUserEventsSelectLazyQuery();

  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);

  if (!productVariant.productVariantId) return <SimpleTextError />;
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;

  const { userEvents } = data;

  const addToCartData = {
    quantity: 1,
    sku: productVariant.sku,
    price: productVariant.price,
    productVariantId: productVariant.productVariantId,
  };

  const onAddToCartClick = () => {
    if (user) {
      addToCartMutation({
        variables: addToCartData,
      });
    }
    if (errorCart) return <SimpleTextError text={errorCart.message} />;
    if (loadingCart) return <LoadingText />;
  };

  const addToEventCartClick = () => {
    if (selectedEvent) {
      addToEventCartMutation({
        variables: {
          ...addToCartData,
          userEventId: selectedEvent?.userEventId,
        },
      });
    }
    if (errorEventCart)
      return <SimpleTextError text={errorEventCart.message} />;
    if (loadingEventCart) return <LoadingText />;
  };

  onchange;
  const events = [
    {
      userEventId: 0,
      name: 'Cart',
      details: 'Regular Cart',
    },
    ...userEvents,
  ];

  return (
    <div className="mt-4">
      <PrimarySelectMenu<UserEventSelectFragment>
        label={t('Events')}
        options={events}
        title="name"
        description="details"
      />
      <Menu as="div" className="flex-shrink-0 relative">
        <span className="sr-only">{t('user_menu')}</span>
        {user && userEvents.length > 0 ? (
          <Listbox value={selectedEvent} onChange={setSelectedEvent}>
            <div className="relative">
              <div className="inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
                <div className="inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
                  <form className="space-y-6">
                    <div className="inline-flex items-center rounded-l-md border border-transparent bg-indigo-600 py-2 pl-3 pr-4 text-white shadow-sm">
                      <PrimaryButton
                        className="inline-flex items-center rounded-l-md border border-transparent bg-indigo-600 py-2 pl-3 pr-4 text-white shadow-sm"
                        type="button"
                      >
                        {t('Add_To_Bag')}
                      </PrimaryButton>
                    </div>
                  </form>
                  <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-600 p-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                    <ChevronDownIcon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </Listbox.Button>
                </div>
              </div>
              <Listbox.Options className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {userEvents.map((event) => (
                  <Listbox.Option
                    key={event.userEventId}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-500' : 'text-gray-900',
                        'cursor-default select-none p-4 text-sm'
                      )
                    }
                    value={event.userEventId}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p
                            className={
                              selected ? 'font-semibold' : 'font-normal'
                            }
                          >
                            {event.name}
                          </p>
                          {selected ? (
                            <span
                              className={
                                active ? 'text-white' : 'text-indigo-500'
                              }
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                        <p
                          className={classNames(
                            active ? 'text-indigo-200' : 'text-gray-500',
                            'mt-2'
                          )}
                        >
                          {event.details}
                        </p>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        ) : (
          <PrimaryButton
            className="w-full py-4"
            type="button"
            onClick={onAddToCartClick}
          >
            {t('Add_To_Bag')}
          </PrimaryButton>
        )}
      </Menu>
    </div>
  );
};

export default AddToEventCart;
