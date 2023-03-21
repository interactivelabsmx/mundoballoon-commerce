import { gql } from '@apollo/client';
import * as Types from '../../graphql/graphql';

export type AddressFragmentFragment = {
  __typename?: 'Address';
  city: string;
  country: string;
  line1: string;
  line2: string;
  postalCode: string;
  state: string;
};

export type CustomerFragmentFragment = {
  __typename?: 'Customer';
  id: string;
  name: string;
  address?: {
    __typename?: 'Address';
    city: string;
    country: string;
    line1: string;
    line2: string;
    postalCode: string;
    state: string;
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
