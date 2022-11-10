import { Listbox, Menu } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import { setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import LoadingText from '@components/UI/loading/LoadingText';
import Modal from '@components/UI/modal/Modal';
import { useAddToEventCartMutation } from '@graphql/mutations/users/AddToEventCart.graphql';
import { useGetUserEventsLazyQuery } from '@graphql/queries/users/GetUserEvents.graphql';
import classNames from '@lib/utils/classnames';
import { useAuth } from '@providers/AuthProvider';

const FirebaseAuthLoader = dynamic(
  () => import('@components/User/Auth/FirebaseAuth'),
  { ssr: false }
);
export const userEventSchema = yup
  .object({
    productVariantId: yup.number().required(),
    userEventId: yup.number().required(),
    quantity: yup.number().required(),
  })
  .required();

const AddToEventCart = () => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const [openAuth, setOpenAuth] = useState(false);
  const onClick = () => setOpenAuth(true);
  const [selected, setSelected] = useState(0);

  /*const [addToCartMutation] = useAddToCartMutation();*/
  /* const onSubmit = () => {
    addToCartMutation({
      variables: {
        userId: user?.uid,
        sku: "A1A0001",
        quantity: quantity,
        price: 3.50,
        productVariantId: 2
      },
    }
    );
    if (error) return <SimpleTextError text={error.message} />;
    if (loading || !data) return <LoadingText />;
  };*/
  const [AddToEventCartMutation] = useAddToEventCartMutation();
  const onclick = () => {
    setCookie(null, 'optionEvent', 'cart', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    AddToEventCartMutation({
      variables: {
        productVariantId: 2,
        userEventId: selected,
        quantity: 2,
      },
    });
    if (error) return <SimpleTextError text={error.message} />;
    if (loading || !data) return <LoadingText />;
  };

  const [loadGreeting, { loading, error, data }] = useGetUserEventsLazyQuery();
  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { userEvents } = data;

  return (
    <>
      <div>
        <Menu as="div" className="flex-shrink-0 relative ml-5">
          <span className="sr-only">{t('user_menu')}</span>
          {user ? (
            <>
              <Listbox value={selected} onChange={setSelected}>
                <>
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
                              active
                                ? 'text-white bg-indigo-500'
                                : 'text-gray-900',
                              'cursor-default select-none p-4 text-sm'
                            )
                          }
                          onClick={onclick}
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
                </>
              </Listbox>
            </>
          ) : (
            <PrimaryButton
              className="w-full py-4"
              type="button"
              onClick={onClick}
            >
              {t('Add_To_Bag')}
            </PrimaryButton>
          )}
        </Menu>
      </div>
      <Modal open={openAuth} setOpen={setOpenAuth}>
        <FirebaseAuthLoader />
      </Modal>
    </>
  );
};
export default AddToEventCart;
