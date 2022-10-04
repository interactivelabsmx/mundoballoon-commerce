import { ExclamationIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import LoadingText from '@components/UI/loading/LoadingText';
import { useDeleteUSerEventMutation } from '@graphql/mutations/users/DeleteEvent';

interface IDeleteEvent {
  userEventId: number;
}
const DeleteEvent = ({ userEventId }: IDeleteEvent) => {
  const { t } = useTranslation('common');
  const [deleteUSerEventMutation, { data, loading, error }] =
    useDeleteUSerEventMutation();
  const deletetheevent = () => {
    deleteUSerEventMutation({
      variables: {
        userEventId: userEventId,
      },
    });
    if (error) return <SimpleTextError text={error.message} />;
    if (loading || !data) return <LoadingText />;
  };
  return (
    <div className="px-4 py-5 sm:p-6">
      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        {t('Delete_event')}
      </h3>
      <p>{t('Are_you_sure')}</p>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <PrimaryButton type="button" onClick={deletetheevent}>
          {t('Delete')}
        </PrimaryButton>
      </div>
    </div>
  );
};
export default DeleteEvent;
