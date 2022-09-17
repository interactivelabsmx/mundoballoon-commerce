import { PlusIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import { useGetUserEventByUserIdLazyQuery } from '@graphql/queries/users/GetUserEventByUserId';

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
  },
];
interface IEventCard {
  userId: string;
}
const EventsCard = ({ userId }: IEventCard) => {
  const { t } = useTranslation('common');
  const [loadGreeting, { loading, error, data }] =
    useGetUserEventByUserIdLazyQuery({
      variables: { userId },
    });
  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;

  const { userEventById } = data;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <br />
          <h1 className="text-xl font-semibold text-gray-900">{t('Events')}</h1>
          <p className="mt-2 text-sm text-gray-700">
            {t('Welcome_to_your_events')}
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <br />
          <button
            type="button"
            className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusIcon className="h-6 w-6" aria-hidden="true" />
            {t('Add_Event')}
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                    >
                      {t('Event_Name')}
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      {t('Date')}
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      {t('Details')}
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      {t('More_details')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={userEventById?.userId}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {userEventById?.name}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {userEventById?.date}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {userEventById?.details}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {t('Details')}
                          <span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsCard;
