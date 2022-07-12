import { Menu, Transition } from '@headlessui/react';
import { LogoutIcon } from '@heroicons/react/outline';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Fragment, useMemo, useState } from 'react';
import AvatarDefault from '@components/UI/Icons/AvatarDefault';
import Modal from '@components/UI/modal/Modal';
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
  const { user, logout } = useAuth();
  const [openAuth, setOpenAuth] = useState(false);
  const onClick = () => setOpenAuth(true);
  const LogedOutUserNavigation = useMemo(
    () => getLogedOutUserNavigation(onClick),
    []
  );
  return (
    <div className="flex bg-gray p-4 justify-around">
      <div className="flex items-center">
        <Menu as="div" className="flex-shrink-0 relative ml-5">
          <div>
            <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
              <span className="sr-only">Open user menu</span>
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
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
              {user ? (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/profile"
                        className={getNavbarUserMenuLinkStyle(active)}
                      >
                        Profile
                      </a>
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
                        Sign Out <LogoutIcon className="h-6 w-6" />
                      </button>
                    )}
                  </Menu.Item>
                </>
              ) : (
                LogedOutUserNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) =>
                      item.href ? (
                        <a
                          href={item.href || ''}
                          className={getNavbarUserMenuLinkStyle(active)}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <button
                          className={`w-full text-left ${getNavbarUserMenuLinkStyle(
                            active
                          )}`}
                          onClick={item.onClick}
                        >
                          {item.name}
                        </button>
                      )
                    }
                  </Menu.Item>
                ))
              )}
            </Menu.Items>
          </Transition>
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
