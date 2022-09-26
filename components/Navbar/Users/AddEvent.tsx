import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
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
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {t('Event_Name')}
                    </label>
                    <div className="mt-2 ">
                      <input
                        onChange={(event) => setEventName(event.target.value)}
                        id="nameEvent"
                        name="nameEvent"
                        type="nameEvent"
                        autoComplete="nameEvent"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="details"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {t('Details')}
                    </label>
                    <div className="mt-1">
                      <textarea
                        onChange={(event) =>
                          setEventDetails(event.target.value)
                        }
                        id="Details"
                        name="Details"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {t('Add_Event')}
                    </button>
                  </div>
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
