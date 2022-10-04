import { gql } from '@apollo/client';

export type VariantDisplayFragment = {
  __typename?: 'Variant';
  variantId?: number | null;
  name: string;
};

export type VariantValueDisplayFragment = {
  __typename?: 'VariantValue';
  variantId: number;
  value: string;
};

export type ProductQuickViewFragment = {
  __typename?: 'Product';
  productId?: number | null;
  name: string;
  description: string;
  price: number;
  category?: { __typename?: 'ProductCategory'; name: string } | null;
  variants?: Array<{
    __typename?: 'ProductVariant';
    media?: Array<{
      __typename?: 'ProductVariantMedium';
      url: string;
      mediaType: string;
    }> | null;
  }> | null;
};

export const VariantDisplayFragmentDoc = gql`
  fragment VariantDisplay on Variant {
    variantId
    name
  }
`;
export const VariantValueDisplayFragmentDoc = gql`
  fragment VariantValueDisplay on VariantValue {
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
        url
        mediaType
      }
    }
  }
`;
