import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import LabelBase from '@components/UI/form/LabelBase';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCreateUserEventMutation } from '@graphql/mutations/users/CreateUserEvent';
import { useAuth } from '@providers/AuthProvider';

const AddEvent = () => {
  const { t } = useTranslation('common');
  const [EventName, setEventName] = useState('');
  const [EventDetails, setEventDetails] = useState('');
  const { user } = useAuth();
  const [createUserEventMutation, { data, loading, error }] =
    useCreateUserEventMutation();
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault;
    createUserEventMutation({
      variables: {
        name: EventName,
        userId: user?.uid || '',
        details: EventDetails,
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
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  method="POST"
                >
                  <div>
                    <LabelBase htmlFor={''} label={t('Event_Name')}></LabelBase>
                    <Input
                      onChange={(event) => setEventName(event.target.value)}
                      name={'nameEvent'}
                      label={''}
                      required
                    ></Input>
                  </div>
                  <div>
                    <LabelBase htmlFor={''} label={t('Details')}></LabelBase>
                    <Input
                      onChange={(event) => setEventDetails(event.target.value)}
                      name={'details'}
                      label={''}
                      required
                    ></Input>
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
