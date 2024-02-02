import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useCatalog } from '../../hooks';

import { CarsList } from '.';
import { Filters } from './Filters';

import { AppDispatch } from '../../redux';
import { getCatalogByPage } from '../../redux/catalog';

const Catalog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { paginationEnabled } = useCatalog();
  const pageRef = useRef(1);

  const handleLoadMoreClick = () => {
    pageRef.current += 1;
    dispatch(getCatalogByPage({ page: pageRef.current }));
  };

  return (
    <>
      <Filters />
      <div className="mt-10">
        <CarsList />
        {paginationEnabled && (
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
