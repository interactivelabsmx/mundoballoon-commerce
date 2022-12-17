import { gql } from '@apollo/client';
import * as Types from '../../../../graphql/graphql';

export type MediaFragmentFragment = {
  __typename?: 'ProductVariantMedium';
  productVariantMediaId?: number | null;
  url?: string | null;
  quality: string;
  name: string;
  description: string;
  mediaType: string;
};

export const MediaFragmentFragmentDoc = gql`
  fragment MediaFragment on ProductVariantMedium {
    productVariantMediaId
    url
    quality
    name
    description
    mediaType
  }
`;
