import { Dispatch } from 'react';
import {
  VariantDisplayFragment,
  VariantValueDisplayFragment,
} from '../QuickView/ProductQuickViewFragment.graphql';
import VariantComponent from './VariantComponent';

export interface IVariantValueDisplay {
  selectedValue?: VariantValueDisplayFragment;
  setSelectedValue: Dispatch<VariantValueDisplayFragment>;
  values: VariantValueDisplayFragment[];
}

interface IVariantsDisplay {
  variants: VariantDisplayFragment[];
  variantValues: VariantValueDisplayFragment[];
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
