import { Menu, Transition } from '@headlessui/react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import SortDown from 'public/img/icons/sort-amount-down.svg';
import SortUp from 'public/img/icons/sort-amount-up.svg';
import { Fragment } from 'react';
import { useState } from 'react';
import { getTransitionSmallDropdownProps } from '@components/UI/transitions/transitionPropsConstants';
import type { ProductSortInput } from '@graphql/graphql';
import { SortEnumType } from '@graphql/graphql';
import type { GetSearchFiltersQuery } from '@graphql/queries/site/GetSearchFilters.graphql';
import classNames from '@lib/utils/classnames';
import { FilterOpenChevronDesktop } from './FilterPopoverDesktop';

type Option = keyof ProductSortInput;

export interface SortOption {
  option: Option;
  direction: SortEnumType;
}

interface IFilterBarSort {
  sortOptions: GetSearchFiltersQuery['sortOptions'];
  onSetSort: (sort: SortOption) => void;
}

const FilterBarSort = ({ sortOptions, onSetSort }: IFilterBarSort) => {
  const [sort, setSort] = useState<SortOption>();
  const { t } = useTranslation('search');
  const label = t('sort');
  const getDirection = (sort: SortOption | undefined) =>
    sort?.direction === SortEnumType.Asc ? SortEnumType.Desc : SortEnumType.Asc;
  const handleSort = (option: Option, direction: SortEnumType) => {
    setSort({ option, direction });
    onSetSort({ option, direction });
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
        {label}
        <FilterOpenChevronDesktop />
      </Menu.Button>
      <Transition as={Fragment} {...getTransitionSmallDropdownProps()}>
        <Menu.Items className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {sortOptions.map((option: string) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <button
                    onClick={() =>
                      handleSort(
                        option.toLowerCase() as Option,
                        getDirection(sort),
                      )
                    }
                    className={classNames(
                      'font-medium text-gray-900 w-full px-4 py-2 text-sm flex',
                      active ? 'bg-gray-100' : '',
                    )}
                  >
                    {sort && sort.option === option.toLowerCase() ? (
                      <Image
                        alt={`Sort results by ${option} descending`}
                        src={
                          sort.direction === SortEnumType.Asc
                            ? SortDown
                            : SortUp
                        }
                        width={20}
                        height={20}
                      />
                    ) : (
                      <div className="inline-block px-2" />
                    )}
                    <div className="inline-block ml-2">{option}</div>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FilterBarSort;
