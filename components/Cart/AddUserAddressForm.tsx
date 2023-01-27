import { yupResolver } from '@hookform/resolvers/yup';
import useTranslation from 'next-translate/useTranslation';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import type { Asserts } from 'yup';
import * as yup from 'yup';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import { useAddUserAddressMutation } from './AddUserAddresses.graphql';
import { GetUserAddressesDocument } from './GetUserAddresses.graphql';

export const userEventSchema = yup
  .object({
    address1: yup.string().required(),
    address2: yup.string().optional(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    zipCode: yup.string().required(),
  })
  .required();

interface IAddAddressForm extends Asserts<typeof userEventSchema> {}

const AddUserAddressForm = () => {
  const { t } = useTranslation('common');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddAddressForm>({ resolver: yupResolver(userEventSchema) });
  const [addAddressMutation] = useAddUserAddressMutation({
    refetchQueries: [{ query: GetUserAddressesDocument }],
  });
  const onSubmit: SubmitHandler<IAddAddressForm> = (variables) =>
    addAddressMutation({ variables });
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="address1"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label={t('address')}
              error={errors?.address1?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="address2"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label={t('address')}
              error={errors?.address2?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Input {...field} label={t('city')} error={errors?.city?.message} />
          )}
        />
      </div>
      <div>
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label={t('state')}
              error={errors?.state?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label={t('country')}
              error={errors?.state?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="zipCode"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label={t('zip_code')}
              error={errors?.zipCode?.message}
            />
          )}
        />
      </div>
      <div className="text-right">
        <PrimaryButton type="submit">{t('save')}</PrimaryButton>
      </div>
    </form>
  );
};

export default AddUserAddressForm;
