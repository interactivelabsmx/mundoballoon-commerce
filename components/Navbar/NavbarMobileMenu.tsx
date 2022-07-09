import { Dialog, Tab, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Image from 'next/future/image';
import Link from 'next/link';
import { Dispatch, Fragment } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import { NavItemFragment } from '@graphql/queries/site/NavItemFragment';
import classNames from '@lib/utils/classnames';
import hasFeaturedOptions from '@lib/utils/hasFeaturedOptions';

interface INavbarMobile {
  open: boolean;
  setOpen: Dispatch<boolean>;
  navOptions: NavItemFragment[];
  loading: boolean;
  error?: string;
}

const NavbarMobileMenu = ({
  open,
  setOpen,
  navOptions,
  loading,
  error,
}: INavbarMobile) => {
  const featuredTabOptions = navOptions.filter((option) =>
    hasFeaturedOptions(option)
  );
  const linkOptions = navOptions.filter(
    (option) => !hasFeaturedOptions(option)
  );

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative max-w-xs w-full bg-gray-100 shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {error && <SimpleTextError text={error} />}
              {loading && <LoadingText text="Loading Menu" />}
              {featuredTabOptions.length > 0 && (
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                      {featuredTabOptions.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'text-indigo-600 border-indigo-600'
                                : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {featuredTabOptions.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="px-4 py-6 space-y-12"
                      >
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.options &&
                            category.options.map((item) => (
                              <div key={item.name} className="group relative">
                                <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                  <Image
                                    width={200}
                                    height={300}
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="object-center object-cover"
                                  />
                                </div>
                                <Link href={item.href}>
                                  <a className="mt-6 block text-sm font-medium text-gray-900">
                                    <span
                                      className="absolute z-10 inset-0"
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </a>
                                </Link>
                                <p
                                  aria-hidden="true"
                                  className="mt-1 text-sm text-gray-500"
                                >
                                  Shop now
                                </p>
                              </div>
                            ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              )}
              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {linkOptions.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link href={page.href || ''}>
                      <a className="-m-2 p-2 block font-medium text-gray-900">
                        {page.name}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <button className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </button>
                </div>
              </div>
              <div className="border-t border-gray-200 py-6 px-4 space-y-6 flex justify-center">
                <Image
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NavbarMobileMenu;
