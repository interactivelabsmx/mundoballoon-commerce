import { gql } from '@apollo/client';
import * as Types from '../../graphql/graphql';

export type AddressFragmentFragment = {
  __typename?: 'Address';
  city?: string | null;
  country?: string | null;
  line1?: string | null;
  line2?: string | null;
  postalCode?: string | null;
  state?: string | null;
};

export type CustomerFragmentFragment = {
  __typename?: 'Customer';
  id: string;
  name?: string | null;
  address?: {
    __typename?: 'Address';
    city?: string | null;
    country?: string | null;
    line1?: string | null;
    line2?: string | null;
    postalCode?: string | null;
    state?: string | null;
  } | null;
};

export const AddressFragmentFragmentDoc = gql`
  fragment AddressFragment on Address {
    city
    country
    line1
    line2
    postalCode
    state
  }
`;
export const CustomerFragmentFragmentDoc = gql`
  fragment CustomerFragment on Customer {
    id
    name
    address {
      ...AddressFragment
    }
  }
  ${AddressFragmentFragmentDoc}
`;
