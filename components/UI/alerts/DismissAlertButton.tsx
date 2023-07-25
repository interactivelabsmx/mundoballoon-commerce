import { XMarkIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation';
import type { SimpleTextAlertType } from './AlertConfigTypes';
import { DismissAlertButtonColors } from './AlertConfigTypes';

interface IDismissAlertButton {
  type: SimpleTextAlertType;
  onClick: () => void;
}

const DismissAlertButton = ({ type, onClick }: IDismissAlertButton) => {
  const { t } = useTranslation('common');
  return (
    <div className="-mx-1.5 -my-1.5">
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex ${DismissAlertButtonColors[type].map(
          (k) => ` ${k} `,
        )} rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 `}
      >
        <span className="sr-only">{t('dismiss')}</span>
        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default DismissAlertButton;
