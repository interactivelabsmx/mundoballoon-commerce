import { ExclamationIcon } from '@heroicons/react/outline';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import { useDeleteUSerEventMutation } from '@graphql/mutations/users/DeleteEvent';

interface IDeleteEvent {
  userEventId: number;
}
const DeleteEvent = ({ userEventId }: IDeleteEvent) => {
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
        Delete event
      </h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>Are you sure you want to delete this event?</p>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={deletetheevent}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default DeleteEvent;
