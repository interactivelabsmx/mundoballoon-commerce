import { gql } from '@apollo/client';
import * as Types from '../../../../graphql/graphql';
import { MediaUrlAndTypeFragmentDoc } from '../../../../graphql/queries/products/ProductSimpleCardFragment.graphql';

export type ProductVariantQuickviewFragment = {
  __typename?: 'ProductVariant';
  productVariantId?: number | null;
  sku: string;
  price: number;
  name: string;
  description: string;
  media?: Array<{
    __typename?: 'ProductVariantMedium';
    url?: string | null;
    mediaType: string;
    description: string;
  }> | null;
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
    productVariantId?: number | null;
    sku: string;
    price: number;
    name: string;
    description: string;
    media?: Array<{
      __typename?: 'ProductVariantMedium';
      url?: string | null;
      mediaType: string;
      description: string;
    }> | null;
  }> | null;
};

export const ProductVariantQuickviewFragmentDoc = gql`
  fragment ProductVariantQuickview on ProductVariant {
    productVariantId
    sku
    price
    name
    description
    media {
      ...MediaUrlAndType
    }
  }
  ${MediaUrlAndTypeFragmentDoc}
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
      ...ProductVariantQuickview
    }
  }
  ${ProductVariantQuickviewFragmentDoc}
`;
