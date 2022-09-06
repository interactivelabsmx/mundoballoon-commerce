import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import { Dispatch } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import { NavItemFragment } from '@graphql/queries/site/NavItemFragment';
import NavbarLogo from '../UI/logo/LogoSmall';
import NavbarDesktopFlyout from './NavbarDesktopFlyout';

const NavbarUserMenuLoader = dynamic(
  () => import('@components/Navbar/NavbarUserMenu'),
  { ssr: false }
);

interface INavbarTop {
  setOpen: Dispatch<boolean>;
  navOptions: NavItemFragment[];
  loading: boolean;
  error?: string;
}

const NavbarTop = ({ setOpen, navOptions, loading, error }: INavbarTop) => {
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
              {error && <SimpleTextError text={error} />}
              {loading && <LoadingText />}
              <NavbarDesktopFlyout navOptions={navOptions} />
              <div className="flex-1 flex items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">{t('open_menu')}</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{t('search')}</span>
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <button className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                  <span className="sr-only">{t('search')}</span>
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                <NavbarUserMenuLoader
                  userEventId={{
                    __typename: undefined,
                    userEventid: 0,
                    event_Name: '',
                    event_Date: '',
                    event_Details: '',
                    created_At: '',
                    updated_At: '',
                    isDeleted: '',
                    category: undefined,
                  }}
                />
                <div className="flex items-center lg:ml-8">
                  <span
                    className="mx-4 h-6 w-px bg-gray-400 lg:mx-6"
                    aria-hidden="true"
                  />
                  <div className="ml-4 flow-root lg:ml-8">
                    <button className="group -m-2 p-2 flex items-center">
                      <ShoppingCartIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        0
                      </span>
                      <span className="sr-only">{t('sr_cart_count')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarTop;
