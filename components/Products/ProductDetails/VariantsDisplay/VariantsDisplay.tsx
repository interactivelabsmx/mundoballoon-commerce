import { Dispatch } from 'react';
import type {
  VariantDisplayFragment,
  VariantValueDisplayFragment,
} from '@graphql/fragments/ProductVariantsFragments.graphql';
import VariantComponent from './VariantComponent';

export interface IVariantValueDisplay {
  selectedValue?: VariantValueDisplayFragment;
  setSelectedValue: Dispatch<VariantValueDisplayFragment>;
  values: VariantValueDisplayFragment[];
}

interface IVariantsDisplay {
  variants: VariantDisplayFragment[];
  variantValues: VariantValueDisplayFragment[];
  setVariantIndex: Dispatch<number>;
}

const VariantsDisplay = ({ variants, variantValues }: IVariantsDisplay) => (
  <>
    {variants.map((variant) => (
      <VariantComponent
        key={variant.variantId}
        variant={variant}
        variantValues={variantValues}
      />
    ))}
  </>
);

export default VariantsDisplay;
