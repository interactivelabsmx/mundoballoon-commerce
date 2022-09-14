import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PrimaryTextButton from '@components/UI/buttons/PrimaryTextButton';
import PrimaryLink from '@components/UI/links/PrimaryLink';
import Modal from '@components/UI/modal/Modal';
import { ProductSimpleCardFragment } from '@graphql/queries/products/ProductSimpleCardFragment';
import { getFirstMedia } from '@lib/products/getFirstMedia';

const QuickViewLoader = dynamic(
  () => import('@components/Products/ProductDetails/QuickView')
);

interface IProductCardSimple {
  product: ProductSimpleCardFragment;
}

const ProductCardSimple = ({ product }: IProductCardSimple) => {
  const { t } = useTranslation('common');
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const openQuickView = () => setQuickViewOpen(true);
  return (
    <div>
      <Link href={`products/detail/${product.productId}`}>
        <a className="group text-sm">
          <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
            <Image
              layout="fill"
              alt={product.name}
              src={getFirstMedia(product).url}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <p className="text-gray-500 italic">{product.category?.name}</p>
            </div>
            <p className="text-lg text-gray-900">${product.price}</p>
          </div>
        </a>
      </Link>
      <div className="mt-4 flex justify-between">
        <PrimaryTextButton onClick={openQuickView}>
          {t('Quick_View')}
        </PrimaryTextButton>
        <PrimaryLink href={`products/detail/${product.productId}`}>
          {t('Details')}
        </PrimaryLink>
      </div>
      <Modal open={quickViewOpen} setOpen={setQuickViewOpen}>
        {product.productId && <QuickViewLoader productId={product.productId} />}
      </Modal>
    </div>
  );
};

export default ProductCardSimple;
