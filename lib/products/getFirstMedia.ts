import { Product } from '@graphql/graphql';
import BaseObject from '@lib/utils/BaseObject';

export const getFirstMedia = (product: Partial<Product> | BaseObject) => {
  const firstVariant = product.variants && product.variants[0];
  const media = firstVariant?.media && firstVariant.media[0];
  return media?.url
    ? media
    : { url: 'https://placebear.com/200/300', mediaType: 'image' };
};
