import { gql } from '@apollo/client';
import * as Types from '../../graphql';

export type NavCategoryFragment = {
  __typename?: 'NavCategory';
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export type NavItemFragment = {
  __typename?: 'NavOption';
  name: string;
  href?: string | null;
  options?: Array<{
    __typename?: 'NavCategory';
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
  }> | null;
};

export const NavCategoryFragmentDoc = gql`
  fragment NavCategory on NavCategory {
    name
    href
    imageSrc
    imageAlt
  }
`;
export const NavItemFragmentDoc = gql`
  fragment NavItem on NavOption {
    name
    href
    options {
      ...NavCategory
    }
  }
  ${NavCategoryFragmentDoc}
`;
