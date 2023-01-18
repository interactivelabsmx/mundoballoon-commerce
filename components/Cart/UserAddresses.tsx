import { Popover, RadioGroup, Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { Fragment, useEffect } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import classNames from '@lib/utils/classnames';
import { useGetUserAddressesLazyQuery } from './GetUserAddresses.graphql';
import PrimaryLink from '@components/UI/links/PrimaryLink';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import type { SubmitHandler} from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { Asserts } from 'yup';
import * as yup from 'yup';
import { useAddUserAddressMutation } from './AddUserAddresses.graphql';
import useTranslation from 'next-translate/useTranslation';
export const userEventSchema = yup
    .object({
        address1: yup.string().required(),
        address2: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        country: yup.string().required(),
        zipCode: yup.string().required(),
    })
    .required();
interface IAddAddressForm extends Asserts<typeof userEventSchema> { }
const UserAddresses = () => {
    const { t } = useTranslation('common');
    const { control, handleSubmit, formState: { errors }, } = useForm<IAddAddressForm>({ resolver: yupResolver(userEventSchema), });
    const [createUserEventMutation] = useAddUserAddressMutation();
    const onSubmit: SubmitHandler<IAddAddressForm> = ({ address1, address2, city, state, country, zipCode }) => {
        createUserEventMutation({ variables: { address1: address1, address2: address2, city: city, state: state, country: country, zipCode: zipCode }, });
    }
    const [loadUserCart, { loading, error, data }] =
        useGetUserAddressesLazyQuery();
    useEffect(() => {
        loadUserCart();
    }, [loadUserCart]);
    if (error) return <SimpleTextError text={error.message} />;
    if (loading || !data) return <LoadingText />;
    const { userAddresses } = data;
    //  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])
    return (
        <><><RadioGroup>
            <RadioGroup.Label className="text-base font-medium text-gray-900">
                Select your address
            </RadioGroup.Label>
            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">

                {userAddresses.map((event) => (
                    <RadioGroup.Option
                        key={event.userAddressesId}
                        value={event}
                        className={({ checked, active }) => classNames(
                            checked ? 'border-transparent' : 'border-gray-300',
                            active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                            'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                        )}
                    >
                        {({ checked, active }) => (
                            <>
                                <span className="flex flex-1">
                                    <span className="flex flex-col">
                                        <RadioGroup.Label
                                            as="span"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            {event.address1}
                                        </RadioGroup.Label>
                                        <RadioGroup.Label
                                            as="span"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            {event.address2}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                            as="span"
                                            className="mt-1 flex items-center text-sm text-gray-500"
                                        >
                                            {event.city}
                                        </RadioGroup.Description>
                                        <RadioGroup.Label
                                            as="span"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            {event.state}
                                        </RadioGroup.Label>
                                        <RadioGroup.Label
                                            as="span"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            {event.country}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                            as="span"
                                            className="mt-1 flex items-center text-sm text-gray-500"
                                        >
                                            {event.zipcode}
                                        </RadioGroup.Description>
                                        <PrimaryLink>Edit</PrimaryLink>
                                    </span>
                                </span>
                                <CheckCircleIcon
                                    className={classNames(
                                        !checked ? 'invisible' : '',
                                        'h-5 w-5 text-indigo-600'
                                    )}
                                    aria-hidden="true" />
                                <span
                                    className={classNames(
                                        active ? 'border' : 'border-2',
                                        checked ? 'border-indigo-500' : 'border-transparent',
                                        'pointer-events-none absolute -inset-px rounded-lg'
                                    )}
                                    aria-hidden="true" />
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
        </><Popover>
                {({ open }) => (
                    <>
                        <div>
                            <div className="mx-auto flex max-w-7xl p-6 lg:px-8">
                                <Popover.Button
                                    className={classNames(
                                        open ? 'text-gray-900' : 'text-gray-500'
                                    )}
                                >
                                    <span className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500">Add a new address</span>
                                </Popover.Button>
                            </div>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                        >
                            <Popover.Panel>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Controller
                                        name="address1"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                label={t('Address_1')}
                                                placeholder=""
                                                type="text"
                                                autoComplete=""
                                                error={errors?.address1?.message} />
                                        )} />
                                    <Controller
                                        name="address2"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                label={t('Address_2')}
                                                placeholder=""
                                                type="text"
                                                autoComplete=""
                                                error={errors?.address2?.message} />
                                        )} />
                                    <Controller
                                        name="city"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                label={t('City')}
                                                placeholder=""
                                                type="text"
                                                autoComplete=""
                                                error={errors?.city?.message} />
                                        )} />
                                    <Controller
                                        name="state"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                label={t('State')}
                                                placeholder=""
                                                type="text"
                                                autoComplete=""
                                                error={errors?.state?.message} />
                                        )} />
                                    <Controller
                                        name="country"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                label={t('Country')}
                                                placeholder=""
                                                type="text"
                                                autoComplete=""
                                                error={errors?.state?.message} />
                                        )} />
                                    <Controller
                                        name="zipCode"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                label={t('Zip_code')}
                                                placeholder=""
                                                type="text"
                                                autoComplete=""
                                                error={errors?.zipCode?.message} />
                                        )} />
                                    <PrimaryButton type='submit'>{t('Save')}</PrimaryButton>
                                </form>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover></>
    );
};
export default UserAddresses;
