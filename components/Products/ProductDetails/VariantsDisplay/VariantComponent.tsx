import { useState } from 'react';
import type {
  VariantDisplayFragment,
  VariantValueDisplayFragment,
} from '@graphql/fragments/ProductVariantsFragments.graphql';
import VariantComponentRegistry, {
  VariantComponentIds,
} from './VariantComponentsRegistry';

interface IVariantComponent {
  variant: VariantDisplayFragment;
  variantValues: VariantValueDisplayFragment[];
}

const VariantComponent = ({ variant, variantValues }: IVariantComponent) => {
  const [selectedValue, setSelectedValue] =
    useState<VariantValueDisplayFragment>();
  const componentId = (variant.uiRegistry?.componentId ||
    'EMPTY_DISPLAY') as VariantComponentIds;
  if (componentId === VariantComponentIds.EMPTY_DISPLAY) return null;

  const Component = VariantComponentRegistry[componentId];
  const values = variantValues.filter(
    (vv) => vv.variantId === variant.variantId
  );

  return (
    <Component
      values={values}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
    />
  );
};

export default VariantComponent;
