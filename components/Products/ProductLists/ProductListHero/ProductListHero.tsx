import useTranslation from 'next-translate/useTranslation';
import ProductCardSimple from '@components/Products/ProductCards/ProductCardSimple';
import { ProductsDictionaryFragment } from '@graphql/queries/products/ProductsDictionaryFragment';

interface IProductListHero {
  productDictionary?: ProductsDictionaryFragment[] | null;
}

const ProductListHero = ({ productDictionary }: IProductListHero) => {
  const { t } = useTranslation('common');
  return (
    <>
      {productDictionary?.map((productsItem) => (
        <div key={productsItem.key} className="bg-white">
          <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="py-8 px-4 flex items-center justify-between sm:px-6 lg:px-0">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                {t(productsItem.key)}
              </h2>
              <a
                href="#"
                className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                {t('see_everything')}
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {productsItem?.value.map((product) => (
                <ProductCardSimple key={product.productId} product={product} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductListHero;
