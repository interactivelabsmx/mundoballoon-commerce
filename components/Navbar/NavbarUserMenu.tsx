import { Menu } from '@headlessui/react';
import { LogoutIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import AvatarDefault from '@components/UI/Icons/AvatarDefault';
import Modal from '@components/UI/modal/Modal';
import TransitionSmallDropdown from '@components/UI/transitions/TransitionSmallDropdown';
import {
  getLogedOutUserNavigation,
  getNavbarUserMenuLinkStyle,
} from '@lib/utils/userNavigation';
import { useAuth } from '@providers/AuthProvider';

const FirebaseAuthLoader = dynamic(
  () => import('@components/User/Auth/FirebaseAuth'),
  { ssr: false }
);

const NavbarUserMenu = () => {
  const { t, lang } = useTranslation();
  const { user, logout } = useAuth();
  const [openAuth, setOpenAuth] = useState(false);
  const onClick = () => setOpenAuth(true);
  const LogedOutUserNavigation = useMemo(
    () => getLogedOutUserNavigation(t, onClick),
    [t]
  );
  return (
    <div className="flex bg-gray p-4 justify-around">
      <div className="flex items-center">
        <Menu as="div" className="flex-shrink-0 relative ml-5">
          <div>
            <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
              <span className="sr-only">{t('user_menu')}</span>
              {user?.photoURL ? (
                <Image
                  className="inline-block h-10 w-10 rounded-full"
                  src={user?.photoURL}
                  alt="Profile Photo"
                  height={40}
                  width={40}
                />
              ) : (
                <AvatarDefault dark={!!user} />
              )}
            </Menu.Button>
          </div>
          <TransitionSmallDropdown>
            <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
              {user ? (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/profile">
                        <a className={getNavbarUserMenuLinkStyle(active)}>
                          {t('common:profile')}
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`w-full flex items-center justify-between ${getNavbarUserMenuLinkStyle(
                          active
                        )}`}
                        onClick={logout}
                      >
                        {t('auth:sign_out')} <LogoutIcon className="h-6 w-6" />
                      </button>
                    )}
                  </Menu.Item>
                </>
              ) : (
                LogedOutUserNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) =>
                      item.href ? (
                        <Link href={item.href || ''}>
                          <a className={getNavbarUserMenuLinkStyle(active)}>
                            {item.name}
                          </a>
                        </Link>
                      ) : (
                        <button
                          onClick={item.onClick}
                          className={`w-full text-left ${getNavbarUserMenuLinkStyle(
                            active
                          )}`}
                        >
                          {item.name}
                        </button>
                      )
                    }
                  </Menu.Item>
                ))
              )}
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`w-full ${getNavbarUserMenuLinkStyle(active)}`}
                  >
                    Lang: {lang}
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </TransitionSmallDropdown>
        </Menu>
        {!user && (
          <Modal open={openAuth} setOpen={setOpenAuth}>
            <FirebaseAuthLoader />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default NavbarUserMenu;
