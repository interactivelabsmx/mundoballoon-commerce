import { Menu, Transition } from '@headlessui/react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useMemo, useState } from 'react';
import AvatarDefault from '@components/UI/Icons/AvatarDefault';
import Modal from '@components/UI/modal/Modal';
import { getTransitionSmallDropdownProps } from '@components/UI/transitions/transitionPropsConstants';
import {
  getLogedOutUserNavigation,
  getNavbarUserMenuLinkStyle,
} from '@lib/utils/userNavigation';
import { useAuth } from '@providers/AuthProvider';

const FirebaseAuthLoader = dynamic(
  () => import('@components/User/Auth/FirebaseAuth'),
  { ssr: false }
);

const EventsCardLoader = dynamic(
  () => import('@components/User/Events/EventsCard'),
  { ssr: false }
);

const NavbarUserMenu = () => {
  const { t } = useTranslation('common');
  const { user, logout, authModalOpen, openAuthModal, closeAuthModal } =
    useAuth();
  const onClick = useMemo(() => openAuthModal, [openAuthModal]);
  const [eventsOpen, setEventsOpen] = useState(false);
  const openEvents = () => setEventsOpen(true);
  const LogedOutUserNavigation = useMemo(
    () => getLogedOutUserNavigation(t, onClick),
    [t, onClick]
  );
  return (
    <div className="flex bg-gray p-4 justify-around">
      <div className="flex items-center">
        <Menu as="div" className="flex-shrink-0 relative ml-5">
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
          <Transition as={Fragment} {...getTransitionSmallDropdownProps()}>
            <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
              {user ? (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/profile"
                        className={getNavbarUserMenuLinkStyle(active)}
                      >
                        {t('common:profile')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`w-full flex items-center justify-between ${getNavbarUserMenuLinkStyle(
                          active
                        )}`}
                        onClick={openEvents}
                      >
                        {t('auth:events')}
                      </button>
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
                        {t('auth:sign_out')}
                      </button>
                    )}
                  </Menu.Item>
                </>
              ) : (
                LogedOutUserNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) =>
                      item.href ? (
                        <Link
                          href={item.href || ''}
                          className={getNavbarUserMenuLinkStyle(active)}
                        >
                          {item.name}
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
            </Menu.Items>
          </Transition>
        </Menu>
        {!user && (
          <Modal open={authModalOpen} setOpen={closeAuthModal}>
            <FirebaseAuthLoader />
          </Modal>
        )}
        {user && (
          <Modal open={eventsOpen} setOpen={setEventsOpen}>
            <EventsCardLoader />
          </Modal>
        )}
      </div>
    </div>
  );
};
export default NavbarUserMenu;
