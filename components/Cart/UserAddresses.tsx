import { Popover, RadioGroup, Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import { baseClassNames } from '@components/UI/buttons/BaseTextButton';
import PrimaryTextButton, {
  primaryClassNames,
} from '@components/UI/buttons/PrimaryTextButton';
import LoadingText from '@components/UI/loading/LoadingText';
import { getTransitionSmallDropdownProps } from '@components/UI/transitions/transitionPropsConstants';
import classNames from '@lib/utils/classnames';
import cx from '@lib/utils/classnames';
import AddUserAddressForm from './AddUserAddressForm';
import { useGetUserAddressesQuery } from './GetUserAddresses.graphql';

const UserAddresses = () => {
  const { t } = useTranslation('common');
  const { loading, error, data } = useGetUserAddressesQuery();

  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { userAddresses } = data;

  return userAddresses && !!userAddresses.length ? (
    <>
      <RadioGroup>
        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          {userAddresses.map((userAdds) => (
            <RadioGroup.Option
              key={userAdds.userAddressesId}
              value={userAdds.userAddressesId}
              className={({ checked, active }) =>
                classNames(
                  checked ? 'border-transparent' : 'border-gray-300',
                  active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                  'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <span className="flex flex-1">
                    <span className="flex flex-col w-full">
                      <RadioGroup.Label className="cursor-pointer">
                        <span className="block text-sm font-medium text-gray-900">
                          {userAdds.address1}
                        </span>
                      </RadioGroup.Label>
                      <RadioGroup.Description>
                        <span className="block text-sm font-medium text-gray-900">
                          {userAdds.address2}
                        </span>
                        <span className="mt-1 block text-sm text-gray-500">
                          {userAdds.city}
                        </span>
                        <span className="block text-sm text-gray-500">
                          {userAdds.state}, {userAdds.country}
                        </span>
                        <span className="block text-sm text-gray-500">
                          {userAdds.zipcode}
                        </span>
                      </RadioGroup.Description>
                      <span className="block mt-2 text-right">
                        <PrimaryTextButton>{t('edit')}</PrimaryTextButton>
                      </span>
                    </span>
                  </span>
                  <CheckCircleIcon
                    aria-hidden="true"
                    className={classNames(
                      !checked ? 'invisible' : '',
                      'h-5 w-5 text-indigo-600'
                    )}
                  />
                  <span
                    aria-hidden="true"
                    className={classNames(
                      active ? 'border' : 'border-2',
                      checked ? 'border-indigo-500' : 'border-transparent',
                      'pointer-events-none absolute -inset-px rounded-lg'
                    )}
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <Popover>
        <div className="w-full text-right">
          <Popover.Button
            className={cx('mt-4', primaryClassNames, baseClassNames)}
          >
            {t('add_new_address')}
          </Popover.Button>
        </div>
        <Transition as={Fragment} {...getTransitionSmallDropdownProps()}>
          <Popover.Panel className="mt-8">
            <AddUserAddressForm />
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  ) : (
    <AddUserAddressForm />
  );
};
export default UserAddresses;
