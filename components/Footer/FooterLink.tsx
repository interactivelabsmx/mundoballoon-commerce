import Link from 'next/link';
import {
  NavCategoryFragment,
  NavItemFragment,
} from '@graphql/queries/site/NavItemFragment.graphql';

interface IFooterLink {
  option: NavItemFragment | NavCategoryFragment;
}

const FooterLink = ({ option }: IFooterLink) => (
  <li className="text-sm">
    <Link href={option.href || '/'}>
      <a className="text-gray-500 hover:text-gray-600">{option.name}</a>
    </Link>
  </li>
);

export default FooterLink;
