import { NavItemFragment } from '@graphql/queries/site/NavItemFragment';

const hasFeaturedOptions = (option: NavItemFragment) =>
  option.options && option.options?.length > 0;

export default hasFeaturedOptions;
