import ProductCardSimple from '@components/Products/ProductCards/ProductCardSimple';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import { ProductFilterInput, ProductSortInput } from '@graphql/graphql';
import { useSearchProductsQuery } from '@graphql/queries/products/SearchProducts';
import { IActiveFilter } from '../FilterBar/FilterBar';
import { SortOption } from '../FilterBar/FilterBarSort';

interface IProductListSearch {
  activeFilters: IActiveFilter[];
  sort?: SortOption;
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

const ProductListSearch = ({ activeFilters, sort }: IProductListSearch) => {
  const categoryFilters = getCategoryFilters(activeFilters);
  const variantFilters = getVariantFilters(activeFilters);
  const order: ProductSortInput | null = sort
    ? { [sort.option]: sort.direction }
    : null;
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
      order: order,
      where: addFilter ? where : null,
    },
  });
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { searchProducts } = data;
  if (!searchProducts?.nodes) return <LoadingText />;
  const { nodes: products } = searchProducts;
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products?.map((product) => (
            <ProductCardSimple key={product.productId} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListSearch;
