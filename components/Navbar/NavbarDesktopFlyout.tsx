import { Popover, Transition } from '@headlessui/react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getTransitionFadeInProps } from '@components/UI/transitions/transitionPropsConstants';
import { NavItemFragment } from '@graphql/queries/site/NavItemFragment';
import classNames from '@lib/utils/classnames';
import hasFeaturedOptions from '@lib/utils/hasFeaturedOptions';

interface INavbarDesktopFlyout {
  navOptions: NavItemFragment[];
}

const NavbarDesktopFlyout = ({ navOptions }: INavbarDesktopFlyout) => {
  const { t } = useTranslation('common');
  const featuredTabOptions = navOptions.filter((option) =>
    hasFeaturedOptions(option)
  );
  const linkOptions = navOptions.filter(
    (option) => !hasFeaturedOptions(option)
  );
  return (
    <div className="hidden h-full lg:flex">
      <Popover.Group className="px-4 bottom-0 inset-x-0">
        <div className="h-full flex justify-center space-x-8 font-Advent">
          {featuredTabOptions.map((category) => (
            <Popover key={category.name} className="flex">
              {({ open }) => (
                <>
                  <div className="relative flex">
                    <Popover.Button
                      className={classNames(
                        open
                          ? 'text-indigo-600'
                          : 'text-gray-700 hover:text-gray-800',
                        'relative flex items-center justify-center transition-colors ease-out duration-200 text-sm font-semibold tracking-wider'
                      )}
                    >
                      {category.name}
                      <span
                        aria-hidden="true"
                        className={classNames(
                          open ? 'bg-indigo-600' : '',
                          'absolute z-20 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                        )}
                      />
                    </Popover.Button>
                  </div>
                  <Transition as={Fragment} {...getTransitionFadeInProps(200)}>
                    <Popover.Panel className="absolute z-10 top-full inset-x-0 bg-white text-sm text-gray-500">
                      <div
                        className="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      />
                      <div
                        className="absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8"
                        aria-hidden="true"
                      >
                        <div
                          className={classNames(
                            open ? 'bg-gray-200' : 'bg-transparent',
                            'w-full h-px transition-colors ease-out duration-200'
                          )}
                        />
                      </div>
                      <div className="relative">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                            {category.options &&
                              category.options?.map((item) => (
                                <div key={item.name} className="group relative">
                                  <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                    <Image
                                      layout="fill"
                                      src={item.imageSrc}
                                      alt={item.imageAlt}
                                      className="object-center object-cover"
                                    />
                                  </div>
                                  <Link href={item.href}>
                                    <a className="mt-4 block font-medium text-gray-900">
                                      <span
                                        className="absolute z-10 inset-0"
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </a>
                                  </Link>
                                  <p aria-hidden="true" className="mt-1">
                                    {t('shop_now')}
                                  </p>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          ))}
          {linkOptions.map((page) => (
            <Link href={page.href || ''} key={page.name}>
              <a className="flex items-center text-sm font-semibold text-gray-700 hover:text-gray-800 tracking-wider">
                {page.name}
              </a>
            </Link>
          ))}
        </div>
      </Popover.Group>
    </div>
  );
};

export default NavbarDesktopFlyout;
