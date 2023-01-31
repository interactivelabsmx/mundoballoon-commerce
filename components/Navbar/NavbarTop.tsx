import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import type { Dispatch } from 'react';
import type { NavItemFragment } from '@layouts/NavItemFragment.graphql';
import NavbarLogo from '../UI/logo/LogoSmall';
import NavbarDesktopFlyout from './NavbarDesktopFlyout';

const NavbarUserMenuLoader = dynamic(() => import('./NavbarUserMenu'), {
  ssr: false,
});

const NavbarUserCartLoader = dynamic(() => import('./NavbarUserCart'), {
  ssr: false,
});

interface INavbarTop {
  setOpen: Dispatch<boolean>;
  navOptions: NavItemFragment[];
}

const NavbarTop = ({ setOpen, navOptions }: INavbarTop) => {
  const { t } = useTranslation('common');

  return (
    <header className="relative z-20">
      <nav aria-label="Top">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              <div className="hidden lg:flex-1 lg:flex lg:items-center">
                <NavbarLogo />
              </div>
              <NavbarDesktopFlyout navOptions={navOptions} />
              <div className="flex-1 flex items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">{t('open_menu')}</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{t('search')}</span>
                  <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <button className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                  <span className="sr-only">{t('search')}</span>
                  <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                <NavbarUserMenuLoader />
                <span
                  className="mx-4 h-6 w-px bg-gray-400 lg:mx-6"
                  aria-hidden="true"
                />
                <NavbarUserCartLoader />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarTop;
