import {
  EllipsisHorizontalCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation';
import { Fragment, useEffect, useState } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import DateDisplayBase from '@components/UI/date/DateDisplayBase';
import LoadingText from '@components/UI/loading/LoadingText';
import Modal from '@components/UI/modal/Modal';
import DeleteEvent from './DeleteEvent';
import EventDetailsView from './EventDetailsView';
import { useGetUserEventsLazyQuery } from './GetUserEvents.graphql';

const EventsCompactTable = () => {
  const { t } = useTranslation('common');
  const [DetailsOpen, setDetailsOpen] = useState(false);
  const openDetails = () => setDetailsOpen(true);
  const [DeleteOpen, setDeleteOpen] = useState(false);
  const openDelete = () => setDeleteOpen(true);
  const [loadGreeting, { loading, error, data }] = useGetUserEventsLazyQuery();
  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { userEvents } = data;
  return (
    <div className="inline-block mt-5 min-w-full py-2 align-middle md:px-6 lg:px-12">
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300 ">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
              >
                {t('Event_Name')}
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                {t('Date')}
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                {t('Details')}
              </th>
              <th
                scope="col"
                className="relative py-3.5 pl-3 pr-4 sm:pr-6"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {userEvents.map((event) => (
              <Fragment key={event.userEventId}>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">
                        {event.name}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      <DateDisplayBase date={event.date} />
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className="isolate inline-flex rounded-md shadow-sm">
                      <SecundaryButton
                        onClick={openDetails}
                        className="mr-4"
                        aria-label={t('More_Details')}
                      >
                        <EllipsisHorizontalCircleIcon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </SecundaryButton>
                      <SecundaryButton
                        onClick={openDelete}
                        aria-label={t('Delete')}
                      >
                        <TrashIcon className="h-4 w-4" aria-hidden="true" />
                      </SecundaryButton>
                    </span>
                  </td>
                </tr>
                <Modal open={DetailsOpen} setOpen={setDetailsOpen}>
                  <EventDetailsView userEventId={event.userEventId} />
                </Modal>
                <Modal open={DeleteOpen} setOpen={setDeleteOpen}>
                  <DeleteEvent userEventId={event.userEventId} />
                </Modal>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsCompactTable;
