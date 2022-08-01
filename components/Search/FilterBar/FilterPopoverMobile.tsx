import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import classNames from '@lib/utils/classnames';
import { IActiveFilter } from './FilterBar';
import FilterBarCheckbox from './FilterBarCheckbox';
import { getOptionIdValue, IFilterPopover } from './FilterPopoverDesktop';

const FilterOpenChevronMobile = ({ openFilter }: { openFilter: boolean }) => (
  <span className="ml-6 flex items-center">
    <ChevronDownIcon
      className={classNames(
        openFilter ? '-rotate-180' : 'rotate-0',
        'h-5 w-5 transform'
      )}
      aria-hidden="true"
    />
  </span>
);

const FilterCategoryHeaderMobile = ({
  id,
  label,
  openFilter,
  getSectionCount,
}: {
  getSectionCount: (sectionId: string) => number;
  openFilter: boolean;
} & IActiveFilter) => (
  <>
    <span className="font-medium text-gray-900">
      {label}
      {getSectionCount(id) > 0 && (
        <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">
          {getSectionCount(id)}
        </span>
      )}
    </span>
    <FilterOpenChevronMobile openFilter={openFilter} />
  </>
);

const FilterPopoverMobile = ({
  sectionName,
  sectionId,
  options,
  isSelected,
  addFilter,
  getSectionCount,
}: IFilterPopover) => (
  <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
    {({ open: openFilter }) => (
      <>
        <h3 className="-mx-2 -my-3 flow-root">
          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400">
            <FilterCategoryHeaderMobile
              id={`${sectionName}-${sectionId}`}
              label={sectionName}
              openFilter={openFilter}
              getSectionCount={getSectionCount}
            />
          </Disclosure.Button>
        </h3>
        <Disclosure.Panel className="pt-6">
          <div className="space-y-6">
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
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default FilterPopoverMobile;
