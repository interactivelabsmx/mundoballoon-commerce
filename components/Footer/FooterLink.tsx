import Link from 'next/link';
import type {
  NavCategoryFragment,
  NavItemFragment,
} from '@layouts/NavItemFragment.graphql';

interface IFooterLink {
  option: NavItemFragment | NavCategoryFragment;
}

const FooterLink = ({ option }: IFooterLink) => (
  <li className="text-sm">
    <Link
      href={option.href || '/'}
      className="text-gray-500 hover:text-gray-600"
    >
      {option.name}
    </Link>
  </li>
);

export default FooterLink;
