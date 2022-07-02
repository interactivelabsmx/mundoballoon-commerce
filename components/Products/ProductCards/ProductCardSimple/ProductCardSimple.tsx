import Image from 'next/future/image';
import Link from 'next/link';
import { ProductSimpleCardFragment } from '@graphql/queries/products/ProductSimpleCardFragment';
import { getFirstMedia } from '@lib/products/getFirstMedia';

interface IProductCardSimple {
  product: ProductSimpleCardFragment;
}

const ProductCardSimple = ({ product }: IProductCardSimple) => (
  <Link href={`products/detail/${product.productId}`}>
    <a className="group text-sm">
      <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
        <Image
          src={getFirstMedia(product).url}
          alt={product.name}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
      <p className="text-gray-500 italic">{product.category?.name}</p>
      <p className="mt-2 font-medium text-gray-900">{product.price}</p>
    </a>
  </Link>
);

export default ProductCardSimple;
