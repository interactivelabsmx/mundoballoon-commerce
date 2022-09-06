import { Menu, Transition } from '@headlessui/react';
import { LogoutIcon, PlusIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useMemo, useState } from 'react';
import AvatarDefault from '@components/UI/Icons/AvatarDefault';
import Modal from '@components/UI/modal/Modal';
import { getTransitionSmallDropdownProps } from '@components/UI/transitions/transitionPropsConstants';
import { UserEventCardFragment } from '@graphql/queries/Events/NavbarUserMenu';
import { Locales } from '@lib/utils/sharedConsts';
import {
  getLogedOutUserNavigation,
  getNavbarUserMenuLinkStyle,
} from '@lib/utils/userNavigation';
import { useAuth } from '@providers/AuthProvider';
import { useCommerce } from '@providers/CommerceProvider';

const FirebaseAuthLoader = dynamic(
  () => import('@components/User/Auth/FirebaseAuth'),

  { ssr: false }
);
const EventsViewLoader = dynamic(
  () => import('@components/Navbar/Events/Events')
);
interface IUserEvent {
  userEventId: UserEventCardFragment;
}

const NavbarUserMenu = ({ userEventId }: IUserEvent) => {
  const { t, lang } = useTranslation('common');
  const { setLocale } = useCommerce();
  const { user, logout } = useAuth();
  const [openAuth, setOpenAuth] = useState(false);
  const onClick = () => setOpenAuth(true);
  const [eventsOpen, setEventsOpen] = useState(false);
  const openEvents = () => setEventsOpen(true);
  const LogedOutUserNavigation = useMemo(
    () => getLogedOutUserNavigation(t, onClick),
    [t]
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
                        onClick={openEvents}
                      >
                        {t('auth:events')} <PlusIcon className="h-6 w-6" />
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
                    onClick={() =>
                      setLocale(lang === Locales.es ? Locales.en : Locales.es)
                    }
                  >
                    Lang: {lang}
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        {!user && (
          <Modal open={openAuth} setOpen={setOpenAuth}>
            <FirebaseAuthLoader />
          </Modal>
        )}
        <Modal open={eventsOpen} setOpen={setEventsOpen}>
          {eventsOpen && (
            <EventsViewLoader userEventId={userEventId.userEventid} />
          )}
        </Modal>
      </div>
    </div>
  );
};
export default NavbarUserMenu;
