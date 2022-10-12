import VariantColors from './VariantColors';
import VariantSizes from './VariantSizes';

export const enum VariantComponentIds {
  EMPTY_DISPLAY = 'EMPTY_DISPLAY',
  VARIANT_COLOR_DISPLAY = 'VARIANT_COLOR_DISPLAY',
  VARIANT_SIZE_DISPLAY = 'VARIANT_SIZE_DISPLAY',
}

const VariantComponentRegistry = {
  [VariantComponentIds.EMPTY_DISPLAY]: null,
  [VariantComponentIds.VARIANT_COLOR_DISPLAY]: VariantColors,
  [VariantComponentIds.VARIANT_SIZE_DISPLAY]: VariantSizes,
};

export default VariantComponentRegistry;
