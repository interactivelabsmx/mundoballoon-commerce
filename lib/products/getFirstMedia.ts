import type { ProductQuickViewFragment } from '@components/Products/ProductDetails/QuickView/ProductQuickViewFragment.graphql';
import type {
  MediaUrlAndTypeFragment,
  ProductSimpleCardFragment,
} from '@graphql/queries/products/ProductSimpleCardFragment.graphql';

export const getFirstMedia = (
  product: ProductSimpleCardFragment | ProductQuickViewFragment,
  variantIndex = 0
): MediaUrlAndTypeFragment => {
  const firstVariant = product.variants && product.variants[variantIndex];
  const media = firstVariant?.media && firstVariant.media[variantIndex];
  return media?.url
    ? media
    : ({
        url: '/img/products/balloon-placeholder.png',
        mediaType: 'image',
      } as MediaUrlAndTypeFragment);
};
