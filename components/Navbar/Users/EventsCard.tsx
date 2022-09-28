import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import LabelBase from '@components/UI/form/LabelBase';
import LoadingText from '@components/UI/loading/LoadingText';
import Modal from '@components/UI/modal/Modal';
import { useGetUserEventByUserIdLazyQuery } from '@graphql/queries/users/GetUserEventByUserId';
import AddEvent from './AddEvent';
import DeleteEvent from './DeleteEvent';
import Details from './Details';

interface IEventCard {
  userId: string | undefined;
}
const EventsCard = ({ userId }: IEventCard) => {
  const { t } = useTranslation('common');
  const [loadGreeting, { loading, error, data }] =
    useGetUserEventByUserIdLazyQuery({
      variables: { userId },
    });
  const [DetailsOpen, setDetailsOpen] = useState(false);
  const openDetails = () => setDetailsOpen(true);
  const [DeleteOpen, setDeleteOpen] = useState(false);
  const openDelete = () => setDeleteOpen(true);
  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { userEventByUserId } = data;
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <AddEvent />
          <div className="mt-5 md:col-span-2 md:mt-0  ">
            <div className="px-4 sm:px-6 lg:px-8">
              <br />
              <br />
              <div className="-my-2 -mx-6 overflow-x-auto sm:-mx-10 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-12">
                  <LabelBase
                    htmlFor={''}
                    label={t('List_of_events')}
                  ></LabelBase>{' '}
                  <br />
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
                        {userEventByUserId.map((event) => (
                          <tr key={event.userEventId}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={
                                      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                                    }
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="font-medium text-gray-900">
                                    {event.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                {event.date}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <div className="text-gray-900">
                                {event.details}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <span className="isolate inline-flex rounded-md shadow-sm">
                                <SecundaryButton onClick={openDetails}>
                                  {t('More_Details')}
                                </SecundaryButton>
                                <SecundaryButton onClick={openDelete}>
                                  {t('Delete')}
                                </SecundaryButton>
                              </span>
                            </td>
                            <Modal open={DetailsOpen} setOpen={setDetailsOpen}>
                              <Details userEventId={event.userEventId} />
                            </Modal>
                            <Modal open={DeleteOpen} setOpen={setDeleteOpen}>
                              <DeleteEvent userEventId={event.userEventId} />
                            </Modal>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventsCard;
