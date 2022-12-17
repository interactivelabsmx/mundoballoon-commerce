import { XMarkIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation';
import { Dispatch } from 'react';

interface ICloseModalButtonIcon {
  setOpen: Dispatch<boolean>;
}

const CloseModalButtonIcon = ({ setOpen }: ICloseModalButtonIcon) => {
  const { t } = useTranslation('common');
  return (
    <div className="sm:block absolute top-0 right-0 pt-4 pr-4">
      <button
        type="button"
        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setOpen(false)}
      >
        <span className="sr-only">{t('close_modal')}</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default CloseModalButtonIcon;
