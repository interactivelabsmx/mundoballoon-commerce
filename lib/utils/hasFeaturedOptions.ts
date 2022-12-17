import type { NavItemFragment } from '@layouts/NavItemFragment.graphql';

const hasFeaturedOptions = (option: NavItemFragment) =>
  option.options && option.options?.length > 0;

export default hasFeaturedOptions;
