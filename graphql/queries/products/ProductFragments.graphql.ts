import { gql } from '@apollo/client';
import * as Types from '../../graphql';
import { MediaUrlAndTypeFragmentDoc } from './ProductSimpleCardFragment.graphql';

export type VariantValueFragment = {
  __typename?: 'ProductVariantValue';
  variant?: { __typename?: 'Variant'; name: string } | null;
  variantValue?: { __typename?: 'VariantValue'; value: string } | null;
};

export type VariantFragment = {
  __typename?: 'ProductVariant';
  media?: Array<{
    __typename?: 'ProductVariantMedium';
    url: string;
    mediaType: string;
  }> | null;
  variantValues?: Array<{
    __typename?: 'ProductVariantValue';
    variant?: { __typename?: 'Variant'; name: string } | null;
    variantValue?: { __typename?: 'VariantValue'; value: string } | null;
  }> | null;
};

export const VariantValueFragmentDoc = gql`
  fragment VariantValue on ProductVariantValue {
    variant {
      name
    }
    variantValue {
      value
    }
  }
`;
export const VariantFragmentDoc = gql`
  fragment Variant on ProductVariant {
    media {
      ...MediaUrlAndType
    }
    variantValues {
      ...VariantValue
    }
  }
  ${MediaUrlAndTypeFragmentDoc}
  ${VariantValueFragmentDoc}
`;
