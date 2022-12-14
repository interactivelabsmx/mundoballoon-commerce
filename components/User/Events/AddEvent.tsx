import { yupResolver } from '@hookform/resolvers/yup';
import useTranslation from 'next-translate/useTranslation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCreateUserEventMutation } from '@graphql/mutations/users/CreateUserEvent.graphql';

export const userEventSchema = yup
  .object({
    eventName: yup.string().required(),
    details: yup.string().required(),
    sDefault: yup.string().required(),
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
  const onSubmit: SubmitHandler<IAddEventForm> = ({ eventName, details }) => {
    createUserEventMutation({
      variables: {
        name: eventName,
        details: details,
      },
    });
    if (error) return <SimpleTextError text={error.message} />;
    if (loading || !data) return <LoadingText />;
  };

  return (
    <>
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {t('Events')}
          </h3>
          <br />
          <br />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {t('Add_your_event')}
          </h2>
          <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-6">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md m:px-0">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-8">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <Controller
                      name="eventName"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          label={t('Event_Name')}
                          placeholder=""
                          type="text"
                          autoComplete=""
                          error={errors?.eventName?.message}
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
                          type="text"
                          error={errors?.details?.message}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <Controller
                      name="sDefault"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          label={t('Choose_this')}
                          type="checkbox"
                          error={errors?.sDefault?.message}
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                      )}
                    />
                  </div>
                  <PrimaryButton type="submit">{t('Add_Event')}</PrimaryButton>
                  <div></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddEvent;
