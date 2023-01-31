import { yupResolver } from '@hookform/resolvers/yup';
import useTranslation from 'next-translate/useTranslation';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCreateUserEventMutation } from './CreateUserEvent.graphql';

export const userEventSchema = yup
  .object({
    name: yup.string().required(),
    details: yup.string().required(),
    date: yup.string().required(),
  })
  .required();

interface IAddEventForm extends Asserts<typeof userEventSchema> {}

const AddEvent = () => {
  const { t } = useTranslation('common');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddEventForm>({
    resolver: yupResolver(userEventSchema),
  });
  const [createUserEventMutation, { data, loading, error }] =
    useCreateUserEventMutation();
  const onSubmit: SubmitHandler<IAddEventForm> = (variables) => {
    createUserEventMutation({
      variables,
    });
    if (error) return <SimpleTextError text={error.message} />;
    if (loading || !data) return <LoadingText />;
  };

  return (
    <div className="px-4 sm:px-0">
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        {t('Add_your_event')}
      </h2>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md m:px-0">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label={t('Event_Name')}
                    error={errors?.name?.message}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="details"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label={t('Details')}
                    error={errors?.details?.message}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    label={t('Date')}
                    error={errors?.details?.message}
                  />
                )}
              />
            </div>
            <PrimaryButton type="submit">{t('Add_Event')}</PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
