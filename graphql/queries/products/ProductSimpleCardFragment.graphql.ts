import { gql } from '@apollo/client';
import * as Types from '../../graphql';

export type CategoryNameFragment = {
  __typename?: 'ProductCategory';
  name: string;
};

export type MediaUrlAndTypeFragment = {
  __typename?: 'ProductVariantMedium';
  url: string;
  mediaType: string;
  description: string;
};

export type ProductVariantsMediaOnlyFragment = {
  __typename?: 'ProductVariant';
  media?: Array<{
    __typename?: 'ProductVariantMedium';
    url: string;
    mediaType: string;
    description: string;
  }> | null;
};

export type ProductSimpleCardFragment = {
  __typename?: 'Product';
  productId?: number | null;
  name: string;
  price: number;
  category?: { __typename?: 'ProductCategory'; name: string } | null;
  variants?: Array<{
    __typename?: 'ProductVariant';
    media?: Array<{
      __typename?: 'ProductVariantMedium';
      url: string;
      mediaType: string;
      description: string;
    }> | null;
  }> | null;
};

export const CategoryNameFragmentDoc = gql`
  fragment CategoryName on ProductCategory {
    name
  }
`;
export const MediaUrlAndTypeFragmentDoc = gql`
  fragment MediaUrlAndType on ProductVariantMedium {
    url
    mediaType
    description
  }
`;
export const ProductVariantsMediaOnlyFragmentDoc = gql`
  fragment ProductVariantsMediaOnly on ProductVariant {
    media {
      ...MediaUrlAndType
    }
  }
  ${MediaUrlAndTypeFragmentDoc}
`;
export const ProductSimpleCardFragmentDoc = gql`
  fragment ProductSimpleCard on Product {
    productId
    name
    category {
      ...CategoryName
    }
    price
    variants {
      ...ProductVariantsMediaOnly
    }
  }
  ${CategoryNameFragmentDoc}
  ${ProductVariantsMediaOnlyFragmentDoc}
`;
