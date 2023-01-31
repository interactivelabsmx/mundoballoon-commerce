import { RadioGroup } from '@headlessui/react';
import useTranslation from 'next-translate/useTranslation';
import classNames from '@lib/utils/classnames';
import type { IVariantValueDisplay } from '../VariantsDisplay';
import {
  BgVariantValueColorToCSS,
  SelectedVariantValueColorToCSS,
} from './VariantValueColorToCSS';

const VariantColors = ({
  values,
  selectedValue,
  setSelectedValue,
}: IVariantValueDisplay) => {
  const { t } = useTranslation('common');
  return (
    <div>
      <h4 className="text-sm text-gray-900 font-medium">{t('color')}</h4>
      <RadioGroup
        value={selectedValue}
        onChange={setSelectedValue}
        className="mt-4"
      >
        <RadioGroup.Label className="sr-only">
          {t('choose_color')}
        </RadioGroup.Label>
        <span className="flex items-center space-x-3">
          {values.map((color) => (
            <RadioGroup.Option
              key={color.variantValueId}
              value={color.variantValueId}
              className={({ active, checked }) =>
                classNames(
                  SelectedVariantValueColorToCSS[color.value],
                  active && checked ? 'ring ring-offset-1' : '',
                  !active && checked ? 'ring-2' : '',
                  '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                )
              }
            >
              <RadioGroup.Label as="span" className="sr-only">
                {color.value}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={classNames(
                  BgVariantValueColorToCSS[color.value],
                  'h-8 w-8 border border-black border-opacity-10 rounded-full'
                )}
              />
            </RadioGroup.Option>
          ))}
        </span>
      </RadioGroup>
    </div>
  );
};

export default VariantColors;
