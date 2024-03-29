import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation';
import type { Dispatch } from 'react';
import { Fragment } from 'react';
import {
  getTransitionFadeInLinearProps,
  getTransitionRightSlideInProps,
} from '@components/UI/transitions/transitionPropsConstants';
import type { ProductCategory, VariantValue } from '@graphql/graphql';
import type { GetSearchFiltersQuery } from '@graphql/queries/site/GetSearchFilters.graphql';
import type { IActiveFilter } from './FilterBar';
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
  const { t } = useTranslation('search');
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 sm:hidden" onClose={setOpen}>
        <Transition.Child as={Fragment} {...getTransitionFadeInLinearProps()}>
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 flex z-40">
          <Transition.Child as={Fragment} {...getTransitionRightSlideInProps()}>
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
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
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
