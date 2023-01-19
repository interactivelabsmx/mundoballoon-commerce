import { RadioGroup } from '@headlessui/react';
import useTranslation from 'next-translate/useTranslation';
import classNames from '@lib/utils/classnames';
import type { IVariantValueDisplay } from '../VariantsDisplay';

const VariantSizes = ({
  selectedValue,
  setSelectedValue,
  values,
}: IVariantValueDisplay) => {
  const { t } = useTranslation('common');
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h4 className="text-sm text-gray-900 font-medium">{t('size')}</h4>
      </div>
      <RadioGroup
        value={selectedValue}
        onChange={setSelectedValue}
        className="mt-4"
      >
        <RadioGroup.Label className="sr-only">
          {t('choose_size')}
        </RadioGroup.Label>
        <div className="grid grid-cols-4 gap-4">
          {values.map((size) => (
            <RadioGroup.Option
              key={size.variantValueId}
              value={size}
              className={({ active }) =>
                classNames(
                  active ? 'ring-2 ring-indigo-500' : '',
                  'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer'
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label as="span">{size.value}</RadioGroup.Label>
                  <span
                    className={classNames(
                      active ? 'border' : 'border-2',
                      checked ? 'border-indigo-500' : 'border-transparent',
                      'absolute -inset-px rounded-md pointer-events-none'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default VariantSizes;
