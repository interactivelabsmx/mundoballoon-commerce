import { PlusIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';
import UserEventsCard from './UserEventsCard';

//import { UserEventsCardFragment } from "@graphql/queries/Events/UserEventCardFragment";
const userEvent = {
  name: 'Rebecca Nicholas',
  imageUrl:
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
}; /*
interface IUserEventCard{
    userEventId: UserEventsCardFragment;
}*/
const EventCard = () => {
  const { t } = useTranslation('common');
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow sm:space-x-5  ">
      <br />
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-white p-6 lg:-mx-80">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={userEvent.imageUrl}
                alt=""
              />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-x2 font-bold text-gray-900 sm:text-2xl">
                {t('Events')}
              </p>
              <p className="text-xl font-bold text-gray-900 sm:text-2">
                {t('Welcome_to_your_events')}
              </p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              {t('Add_Event')}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x"></div>
      <br />
      <UserEventsCard userEventId={0} />
      <br />
    </div>
  );
};
export default EventCard;
