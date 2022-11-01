import {
  randProductName,
  randFloat,
  randNumber,
  randDepartment,
  randImg,
} from '@ngneat/falso';
import { ProductSimpleCardFragment } from '@graphql/queries/products/ProductSimpleCardFragment.graphql';

export const getFixtureProduct = (): ProductSimpleCardFragment => ({
  __typename: 'Product',
  productId: randNumber(),
  name: randProductName(),
  price: randFloat(),
  category: {
    __typename: 'ProductCategory',
    name: randDepartment(),
  },
  variants: [
    {
      __typename: 'ProductVariant',
      media: [
        {
          __typename: 'ProductVariantMedium',
          url: randImg(),
          mediaType: 'image',
          description: 'Some nice Image',
        },
      ],
    },
  ],
});

export const getFixtureProducts = (count = 5): ProductSimpleCardFragment[] => {
  const products: ProductSimpleCardFragment[] = [];
  for (let index = 0; index < count; index++) {
    products.push(getFixtureProduct());
  }
  return products;
};

export const getHomePageProducts = () => [
  {
    key: 'Featured',
    value: [...getFixtureProducts(5)],
  },
];
