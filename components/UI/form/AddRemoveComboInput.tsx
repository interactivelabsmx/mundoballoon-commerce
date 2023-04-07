import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import useTranslation from 'next-translate/useTranslation';
import type { MouseEventHandler } from 'react';
import classNames from '@lib/utils/classnames';
import LoadingSpinner from '../loading/LoadingSpinner';

export interface IAddRemoveComboInput {
  quantity: number;
  loading?: boolean;
  onAdd: MouseEventHandler<HTMLButtonElement>;
  onSubtract: MouseEventHandler<HTMLButtonElement>;
}

const baseComboIconButtonCss =
  'relative inline-flex items-center bg-white px-1 py-1 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10';

const AddRemoveComboInput = ({
  quantity,
  loading,
  onAdd,
  onSubtract,
}: IAddRemoveComboInput) => {
  const { t } = useTranslation();
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        onClick={onAdd}
        className={classNames(baseComboIconButtonCss, '-mr-px rounded-l-md')}
      >
        <span className="sr-only">{t('remove')}</span>
        <PlusIcon className="h-4 w-4" aria-hidden="true" />
      </button>
      <span className="px-2 py-1 text-xs ring-1 ring-inset ring-gray-300 cursor-default">
        {loading && <LoadingSpinner />}
        {quantity}
      </span>
      <button
        type="button"
        onClick={onSubtract}
        className={classNames(baseComboIconButtonCss, '-ml-px rounded-r-md')}
      >
        <span className="sr-only">{t('substract')}</span>
        <MinusIcon className="h-4 w-4" aria-hidden="true" />
      </button>
    </span>
  );
};

export default AddRemoveComboInput;
