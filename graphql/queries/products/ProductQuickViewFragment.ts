import { gql } from '@apollo/client';
import * as Types from '../../graphql';

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
