import { useState } from 'react';
import FilterBar from '@components/Search/FilterBar';
import { IActiveFilter } from '@components/Search/FilterBar/FilterBar';
import { SortOption } from '@components/Search/FilterBar/FilterBarSort';
import ProductListSearch from '@components/Search/ProductListSearch';
import LoadingText from '@components/UI/loading/LoadingText';
import { useGetSearchFiltersQuery } from '@graphql/queries/site/GetSearchFilters';
import Layout from '@layouts/Layout';
import getServerSidePreFetch from '@lib/getServerSidePreFetch';

const Search = () => {
  const [activeFilters, setActiveFilters] = useState<IActiveFilter[]>([]);
  const [sort, onSetSort] = useState<SortOption>();
  const { loading, data } = useGetSearchFiltersQuery();
  const onFilterChange = (activeFilters: IActiveFilter[]) => {
    setActiveFilters(activeFilters);
  };
  return (
    <Layout>
      {loading && <LoadingText />}
      {data && (
        <FilterBar
          searchFilters={data}
          onFilterChange={onFilterChange}
          onSetSort={onSetSort}
        />
      )}
      <ProductListSearch activeFilters={activeFilters} sort={sort} />
    </Layout>
  );
};

export const getServerSideProps = getServerSidePreFetch({ Page: Search });

export default Search;
