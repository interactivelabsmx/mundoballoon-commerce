import { gql } from '@apollo/client';
import * as Types from '../../graphql';
import { VariantFragmentDoc } from './ProductFragments';

export type ProductQuickViewFragment = {
  __typename?: 'Product';
  productId?: number | null;
  name: string;
  description: string;
  price: number;
  variants?: Array<{
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
  }> | null;
};

export const ProductQuickViewFragmentDoc = gql`
  fragment ProductQuickView on Product {
    productId
    name
    description
    price
    variants {
      ...Variant
    }
  }
  ${VariantFragmentDoc}
`;
