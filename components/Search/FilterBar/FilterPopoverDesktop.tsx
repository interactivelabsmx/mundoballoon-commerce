import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { getTransitionSmallDropdownProps } from '@components/UI/transitions/transitionPropsConstants';
import { ProductCategory, VariantValue } from '@graphql/graphql';
import { IActiveFilter } from './FilterBar';
import FilterBarCheckbox from './FilterBarCheckbox';

export interface IFilterPopover {
  sectionName: string;
  sectionId: string;
  options: VariantValue[] | ProductCategory[];
  isSelected: (id: string) => boolean;
  addFilter: (filter: IActiveFilter) => void;
  getSectionCount: (sectionId: string) => number;
}

export const getOptionIdValue = (option: VariantValue | ProductCategory) => {
  let id = 'productCategoryId' in option ? option.productCategoryId : 0;
  id = 'variantValueId' in option ? option.variantValueId : id;
  let value = 'value' in option ? option.value : '';
  value = 'name' in option ? option.name : value;
  return { id, value };
};

export const FilterOpenChevronDesktop = () => (
  <ChevronDownIcon
    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
    aria-hidden="true"
  />
);

const FilterCategoryHeaderDesktop = ({
  id,
  label,
  getSectionCount,
}: { getSectionCount: (sectionId: string) => number } & IActiveFilter) => (
  <>
    <span>{label}</span>
    {getSectionCount(id) > 0 && (
      <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">
        {getSectionCount(id)}
      </span>
    )}
    <FilterOpenChevronDesktop />
  </>
);

const FilterPopoverDesktop = ({
  sectionName,
  sectionId,
  options,
  isSelected,
  addFilter,
  getSectionCount,
}: IFilterPopover) => (
  <Popover className="px-4 relative inline-block text-left">
    <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
      <FilterCategoryHeaderDesktop
        label={sectionName}
        id={`${sectionName}-${sectionId}-`}
        getSectionCount={getSectionCount}
      />
    </Popover.Button>
    <Transition as={Fragment} {...getTransitionSmallDropdownProps()}>
      <Popover.Panel className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
        <form className="space-y-4">
          {options?.map((option) => {
            const { id, value } = getOptionIdValue(option);
            return (
              <FilterBarCheckbox
                key={id}
                id={id}
                value={value}
                sectionId={`${sectionName}-${sectionId}`}
                isSelected={isSelected}
                addFilter={addFilter}
              />
            );
          })}
        </form>
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default FilterPopoverDesktop;
