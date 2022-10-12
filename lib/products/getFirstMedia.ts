import { ProductQuickViewFragment } from '@components/Products/ProductDetails/QuickView/ProductQuickViewFragment.graphql';
import {
  MediaUrlAndTypeFragment,
  ProductSimpleCardFragment,
} from '@graphql/queries/products/ProductSimpleCardFragment.graphql';

export const getFirstMedia = (
  product: ProductSimpleCardFragment | ProductQuickViewFragment
): MediaUrlAndTypeFragment => {
  const firstVariant = product.variants && product.variants[0];
  const media = firstVariant?.media && firstVariant.media[0];
  return media?.url
    ? media
    : ({
        url: '/img/products/balloon-placeholder.png',
        mediaType: 'image',
      } as MediaUrlAndTypeFragment);
};
