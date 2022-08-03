import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';
import { Dispatch, Fragment } from 'react';
import { ProductCategory, VariantValue } from '@graphql/graphql';
import { GetSearchFiltersQuery } from '@graphql/queries/site/GetSearchFilters';
import { IActiveFilter } from './FilterBar';
import FilterPopoverMobile from './FilterPopoverMobile';

interface IFilterDialogMobile {
  open: boolean;
  setOpen: Dispatch<boolean>;
  isSelected: (id: string) => boolean;
  addFilter: (filter: IActiveFilter) => void;
  getSectionCount: (sectionId: string) => number;
  searchFilters: GetSearchFiltersQuery;
}

const FilterDialogMobile = ({
  open,
  setOpen,
  isSelected,
  addFilter,
  getSectionCount,
  searchFilters: { variants, productCategories },
}: IFilterDialogMobile) => {
  const { t } = useTranslation('common');
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 sm:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 flex z-40">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">
                  {t('filters')}
                </h2>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">{t('close_menu')}</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <form className="mt-4">
                <FilterPopoverMobile
                  sectionName="Category"
                  sectionId="category"
                  options={productCategories as ProductCategory[]}
                  isSelected={isSelected}
                  addFilter={addFilter}
                  getSectionCount={getSectionCount}
                />
                {variants?.map((section) => (
                  <FilterPopoverMobile
                    key={section.variantId}
                    sectionName={section.name}
                    sectionId={`${section.variantId}`}
                    options={section.variantValues as VariantValue[]}
                    isSelected={isSelected}
                    addFilter={addFilter}
                    getSectionCount={getSectionCount}
                  />
                ))}
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default FilterDialogMobile;
