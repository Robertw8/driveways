import { useDispatch } from 'react-redux';
import { useCatalog } from '../../hooks';

import { CarsList } from '.';
import { Filters } from './Filters';

import { AppDispatch } from '../../redux';
import { setFilters } from '../../redux/catalog';

const Catalog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filters, cars } = useCatalog();

  const handleLoadMoreClick = () => {
    dispatch(
      setFilters({
        ...filters,
        page: filters.page + 1,
      })
    );
  };

  const canLoadMore = cars.length > filters.page * 12;

  return (
    <>
      <Filters />
      <div className="mt-20 mb-96">
        <CarsList />
        {canLoadMore && (
          <div className="mt-24 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMoreClick}
              className="border-none rounded-xl duration-300 bg-transparent font-manrope font-semibold text-base text-blue-primary hover:bg-blue-secondary hover:text-white p-2 underline"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Catalog;
