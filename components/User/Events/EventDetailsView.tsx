import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LabelBase from '@components/UI/form/LabelBase';
import LoadingText from '@components/UI/loading/LoadingText';
import { useGetUserEventByIdLazyQuery } from './GetUserEventById.graphql';

interface IDetailsView {
  userEventId: number;
}
const EventDetailsView = ({ userEventId }: IDetailsView) => {
  const { t } = useTranslation('common');
  const [loadGreeting, { loading, error, data }] = useGetUserEventByIdLazyQuery(
    {
      variables: { userEventId },
    }
  );
  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { userEventById } = data;
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {t('Event_Details')}
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <LabelBase htmlFor={''} label={t('Event_Name')}></LabelBase>
            <dd className="mt-1 text-sm text-gray-900">
              {userEventById?.name}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <LabelBase htmlFor={''} label={t('Date')}></LabelBase>
            <dd className="mt-1 text-sm text-gray-900">
              {userEventById?.date}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <LabelBase htmlFor={''} label={t('Details')}></LabelBase>
            <dd className="mt-1 text-sm text-gray-900">
              {userEventById?.details}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default EventDetailsView;
