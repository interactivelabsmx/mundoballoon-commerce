import { gql } from '@apollo/client';
import * as Types from '../../../../graphql/graphql';
import { MediaUrlAndTypeFragmentDoc } from '../../../../graphql/queries/products/ProductSimpleCardFragment.graphql';

export type ProductQuickViewFragment = {
  __typename?: 'Product';
  productId?: number | null;
  name: string;
  description: string;
  price: any;
  category?: { __typename?: 'ProductCategory'; name: string } | null;
  variants?: Array<{
    __typename?: 'ProductVariant';
    productVariantId?: number | null;
    media?: Array<{
      __typename?: 'ProductVariantMedium';
      url?: string | null;
      mediaType: string;
      description: string;
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
      productVariantId
      media {
        ...MediaUrlAndType
      }
    }
  }
  ${MediaUrlAndTypeFragmentDoc}
`;
