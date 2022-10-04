import {
  VariantFragment,
  VariantValueFragment,
} from '@graphql/queries/products/ProductFragments.graphql';

export const getProductVariantValuesNames = (
  variants: VariantValueFragment[],
  agregate: string[]
) =>
  variants.reduce(
    (agg, v) =>
      agg.some((item) => item === v.variant?.name)
        ? [...agg]
        : [...agg, v.variant?.name || ''],
    [...agregate] as string[]
  );

export const getProductVariantValueValuesByName = (
  variantNames: string,
  variants: VariantValueFragment[]
) =>
  variants.reduce(
    (agg, v) => ({ [variantNames]: v.variantValue?.value, ...agg }),
    {}
  );

export const getProductVariantNames = (variants: VariantFragment[]) =>
  variants.reduce(
    (agg, v) =>
      v.variantValues
        ? [...agg, ...getProductVariantValuesNames(v.variantValues, agg)]
        : [...agg],
    [] as string[]
  );

export const getProductVariantValuesByName = (
  variantNames: string,
  variants: VariantValueFragment[]
) =>
  variants.reduce(
    (agg, v) => ({ [variantNames]: v.variantValue?.value, ...agg }),
    {}
  );
