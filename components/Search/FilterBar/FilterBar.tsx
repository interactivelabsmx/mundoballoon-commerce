import { Popover } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { ProductCategory, VariantValue } from '@graphql/graphql';
import { GetSearchFiltersQuery } from '@graphql/queries/site/GetSearchFilters';
import FilterBarSort, { SortOption } from './FilterBarSort';
import FilterDialogMobile from './FilterDialogMobile';
import FilterPopoverDesktop from './FilterPopoverDesktop';

export interface IActiveFilter {
  id: string;
  label: string;
}

export interface IFilterBar {
  searchFilters: GetSearchFiltersQuery;
  onFilterChange: (activeFilters: IActiveFilter[]) => void;
  onSetSort: (sort: SortOption) => void;
}

const FilterBar = ({
  searchFilters,
  onFilterChange,
  onSetSort,
}: IFilterBar) => {
  const { variants, productCategories, sortOptions } = searchFilters;
  const [open, setOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<IActiveFilter[]>([]);
  const { t } = useTranslation('search');
  const isSelected = (id: string) => !!activeFilters.find((af) => af.id === id);
  const onFilterChanges = (filters: IActiveFilter[]) => {
    setActiveFilters(filters);
    onFilterChange(filters);
  };
  const removeFilter = (id: string) =>
    onFilterChanges(activeFilters.filter((af) => af.id !== id));
  const addFilter = (filter: IActiveFilter) =>
    isSelected(filter.id)
      ? removeFilter(filter.id)
      : onFilterChanges([filter, ...activeFilters]);
  const getSectionCount = (sectionId: string) =>
    activeFilters.filter((af) => af.id.indexOf(sectionId) > -1).length;

  return (
    <div className="bg-white z-10 relative">
      <FilterDialogMobile
        open={open}
        setOpen={setOpen}
        isSelected={isSelected}
        addFilter={addFilter}
        getSectionCount={getSectionCount}
        searchFilters={searchFilters}
      />
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          {t('filters')}
        </h2>
        <div className="relative bg-white border-b border-gray-200 pb-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
            <FilterBarSort sortOptions={sortOptions} onSetSort={onSetSort} />
            <button
              type="button"
              className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
              onClick={() => setOpen(true)}
            >
              {t('filters')}
            </button>
            <div className="hidden sm:block">
              <div className="flow-root">
                <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                  <FilterPopoverDesktop
                    sectionName="Category"
                    sectionId="category"
                    options={productCategories as ProductCategory[]}
                    isSelected={isSelected}
                    addFilter={addFilter}
                    getSectionCount={getSectionCount}
                  />
                  {variants.map((section) => (
                    <FilterPopoverDesktop
                      key={section.variantId}
                      sectionName={section.name}
                      sectionId={`${section.variantId}`}
                      options={section.variantValues as VariantValue[]}
                      isSelected={isSelected}
                      addFilter={addFilter}
                      getSectionCount={getSectionCount}
                    />
                  ))}
                </Popover.Group>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {t('filters')}
              <span className="sr-only">{t('sr_active')}</span>
            </h3>
            <div
              aria-hidden="true"
              className="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4"
            />
            <div className="mt-2 sm:mt-0 sm:ml-4">
              <div className="-m-1 flex flex-wrap items-center">
                {activeFilters.map((activeFilter) => (
                  <span
                    key={activeFilter.id}
                    className="m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900"
                  >
                    <span>{activeFilter.label}</span>
                    <button
                      type="button"
                      className="h-6 w-6 ml-1 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                      onClick={() => removeFilter(activeFilter.id)}
                    >
                      <span className="sr-only">
                        {t('remove_filter_sr', { filter: activeFilter.label })}
                      </span>
                      <XMarkIcon className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterBar;
