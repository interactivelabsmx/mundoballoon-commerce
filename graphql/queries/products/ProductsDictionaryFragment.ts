import { gql } from '@apollo/client';
import * as Types from '../../graphql';
import { ProductSimpleCardFragmentDoc } from './ProductSimpleCardFragment';

export type ProductsDictionaryFragment = {
  __typename?: 'KeyValuePairOfStringAndListOfProduct';
  key: string;
  value: Array<{
    __typename?: 'Product';
    productId?: number | null;
    name: string;
    price: number;
    category?: { __typename?: 'ProductCategory'; name: string } | null;
    variants?: Array<{
      __typename?: 'ProductVariant';
      media?: Array<{
        __typename?: 'ProductVariantMedium';
        url?: string | null;
        mediaType: string;
      }> | null;
    }> | null;
  }>;
};

export const ProductsDictionaryFragmentDoc = gql`
  fragment ProductsDictionary on KeyValuePairOfStringAndListOfProduct {
    key
    value {
      ...ProductSimpleCard
    }
  }
  ${ProductSimpleCardFragmentDoc}
`;
