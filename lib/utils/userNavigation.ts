import classNames from './classnames';

export interface IUserNavigationItem {
  name: string;
  href?: string;
  onClick?: () => void;
}

export const getLogedOutUserNavigation = (onClick: () => void) => [
  { name: 'Sign in', onClick },
  { name: 'Other Option', href: '/' },
];

export const getNavbarUserMenuLinkStyle = (active: boolean) =>
  classNames(
    active ? 'bg-gray-100' : '',
    'block py-4 px-4 text-sm text-gray-700'
  );
