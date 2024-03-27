import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useCatalog, useAdBlockCheck } from '../../hooks';

import { CarsList } from '.';
import { Filters } from './Filters';

import './tailwind.css';
import type { AppDispatch } from '../../redux';
import { getCatalogByPage } from '../../redux/catalog';

const Catalog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { paginationEnabled, isLoading, cars } = useCatalog();
  const pageRef = useRef(1);
  const listBlocked = useAdBlockCheck(cars, isLoading);

  const handleLoadMoreClick = () => {
    pageRef.current += 1;
    dispatch(getCatalogByPage({ page: pageRef.current }));
  };

  return (
    <>
      <Filters />
      <div className="mt-10">
        {!listBlocked ? (
          <CarsList />
        ) : (
          <p className="text-center">
            please turn off your ad blocker as it blocks the display of the car
            catalog
          </p>
        )}
        {paginationEnabled && !isLoading && (
          <div className="mt-24 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMoreClick}
              className="loadmore-button"
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
