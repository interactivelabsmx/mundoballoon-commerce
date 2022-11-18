import { gql } from '@apollo/client';
import * as Types from '../../../../graphql/graphql';
import { MediaUrlAndTypeFragmentDoc } from '../../../../graphql/queries/products/ProductSimpleCardFragment.graphql';

export type VariantDisplayFragment = {
  __typename?: 'Variant';
  variantId?: number | null;
  name: string;
  uiRegistry?: {
    __typename?: 'UiRegistry';
    componentId?: string | null;
  } | null;
};

export type VariantValueDisplayFragment = {
  __typename?: 'VariantValue';
  variantValueId?: number | null;
  variantId: number;
  value: string;
};

export type ProductQuickViewFragment = {
  __typename?: 'Product';
  productId?: number | null;
  name: string;
  description: string;
  price: any;
  category?: { __typename?: 'ProductCategory'; name: string } | null;
  variants?: Array<{
    __typename?: 'ProductVariant';
    media?: Array<{
      __typename?: 'ProductVariantMedium';
      url?: string | null;
      mediaType: string;
      description: string;
    }> | null;
  }> | null;
};

export const VariantDisplayFragmentDoc = gql`
  fragment VariantDisplay on Variant {
    variantId
    name
    uiRegistry {
      componentId
    }
  }
`;
export const VariantValueDisplayFragmentDoc = gql`
  fragment VariantValueDisplay on VariantValue {
    variantValueId
    variantId
    value
  }
`;
export const ProductQuickViewFragmentDoc = gql`
  fragment ProductQuickView on Product {
    productId
    name
    description
    price
    category {
      name
    }
    variants {
      media {
        ...MediaUrlAndType
      }
    }
  }
  ${MediaUrlAndTypeFragmentDoc}
`;
