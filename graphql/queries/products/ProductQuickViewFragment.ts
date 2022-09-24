import { gql } from '@apollo/client';
import * as Types from '../../graphql';

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
  }> | null;
};

export const ProductQuickViewFragmentDoc = gql`
  fragment ProductQuickView on Product {
    productId
    name
    description
    price
    variants {
      media {
        url
        mediaType
      }
    }
  }
`;
