import { RadioGroup } from '@headlessui/react';
import { Dispatch } from 'react';
import { VariantValueDisplayFragment } from '@components/Products/ProductDetails/QuickView/ProductQuickViewFragment.graphql';
import classNames from '@lib/utils/classnames';

interface IVariantColors {
  selectedColor?: VariantValueDisplayFragment;
  setSelectedColor: Dispatch<VariantValueDisplayFragment>;
  colors: VariantValueDisplayFragment[];
}

const VariantColors = ({
  colors,
  selectedColor,
  setSelectedColor,
}: IVariantColors) => (
  <div>
    <h4 className="text-sm text-gray-900 font-medium">Color</h4>
    <RadioGroup
      value={selectedColor}
      onChange={setSelectedColor}
      className="mt-4"
    >
      <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
      <span className="flex items-center space-x-3">
        {colors.map((color) => (
          <RadioGroup.Option
            key={color.value}
            value={color}
            className={({ active, checked }) =>
              classNames(
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
                'h-8 w-8 border border-black border-opacity-10 rounded-full'
              )}
            />
          </RadioGroup.Option>
        ))}
      </span>
    </RadioGroup>
  </div>
);

export default VariantColors;
