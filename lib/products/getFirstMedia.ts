import { Product } from '@graphql/graphql';

export const getFirstMedia = (product: Partial<Product> | any) => {
  const firstVariant = product.variants && product.variants[0];
  const media = firstVariant?.media && firstVariant.media[0];
  return media?.url
    ? media
    : { url: 'https://placebear.com/200/300', mediaType: 'image' };
};
