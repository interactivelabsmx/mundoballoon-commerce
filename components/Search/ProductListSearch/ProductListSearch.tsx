import ProductCardSimple from '@components/Products/ProductCards/ProductCardSimple';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import { ProductFilterInput, SortEnumType } from '@graphql/graphql';
import { useSearchProductsQuery } from '@graphql/queries/products/SearchProducts';
import { IActiveFilter } from '../FilterBar/FilterBar';

interface IProductListSearch {
  activeFilters: IActiveFilter[];
}

const getNumberId = (afId: string) => {
  const parts = afId.split('-');
  if (parts.length) return parseInt(parts.pop() || '0', 10);
  return 0;
};

const getCategoryFilters = (activeFilters: IActiveFilter[]) =>
  activeFilters.reduce(
    (agg: number[], af) =>
      af.id.indexOf('category') > -1 ? [getNumberId(af.id), ...agg] : agg,
    []
  );

const getVariantFilters = (activeFilters: IActiveFilter[]) =>
  activeFilters.reduce(
    (agg: number[], af) =>
      af.id.indexOf('category') == -1 ? [getNumberId(af.id), ...agg] : agg,
    []
  );

const ProductListSearch = ({ activeFilters }: IProductListSearch) => {
  const categoryFilters = getCategoryFilters(activeFilters);
  const variantFilters = getVariantFilters(activeFilters);
  const where: ProductFilterInput = {};
  if (categoryFilters.length) where.productCategoryId = { in: categoryFilters };
  if (variantFilters.length)
    where.variants = {
      some: {
        variantValues: { some: { variantValueId: { in: variantFilters } } },
      },
    };
  const addFilter = !!(categoryFilters.length || variantFilters.length);
  const { data, loading, error } = useSearchProductsQuery({
    variables: {
      order: { price: SortEnumType.Asc },
      where: addFilter ? where : null,
    },
  });
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { searchProducts } = data;
  if (!searchProducts?.nodes) return <LoadingText />;
  const { nodes: products } = searchProducts;
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
      {products?.map((product) => (
        <ProductCardSimple key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductListSearch;
