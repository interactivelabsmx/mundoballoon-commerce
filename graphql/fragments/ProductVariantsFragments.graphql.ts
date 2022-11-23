import { gql } from '@apollo/client';
import * as Types from '../graphql';

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
