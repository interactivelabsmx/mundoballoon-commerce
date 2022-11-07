import { Translate } from 'next-translate';
import classNames from './classnames';

export interface IUserNavigationItem {
  name: string;
  href?: string;
  onClick?: () => void;
}

export const getLogedOutUserNavigation = (
  t: Translate,
  onClick: () => void
) => [
  { name: t('auth:sign_in'), onClick },
  { name: t('common:see_everything'), href: '/search' },
];
export const getNavbarUserMenuLinkStyle = (active: boolean) =>
  classNames(
    active ? 'bg-gray-100' : '',
    'block py-4 px-4 text-sm text-gray-700'
  );
