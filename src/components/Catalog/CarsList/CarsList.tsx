import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCatalog, useNotFoundTimeout } from '../../../hooks';

import { CarsItem } from '..';
import { Empty } from 'antd';

import { getCatalog, setPaginationEnabled } from '../../../redux/catalog';
import { getFavorites } from '../../../redux/favorites';
import type { AppDispatch } from '../../../redux';
import '../tailwind.css';

const CarsList: React.FC = () => {
  const { cars, filters, isLoading } = useCatalog();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFavorites({}));

    dispatch(
      getCatalog({
        search: filters.search,
      })
    );
  }, [dispatch, filters.search, filters.rentalPrice]);

  const filteredCars = cars.filter(car =>
    filters.rentalPrice ? Number(car.rentalPrice) <= filters.rentalPrice : car
  );

  useEffect(() => {
    if (filteredCars.length < 12) dispatch(setPaginationEnabled(false));
  }, [dispatch, filteredCars]);

  const notFound = useNotFoundTimeout(filteredCars, isLoading);

  return (
    <>
      {notFound && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No cars found"
        />
      )}

      <ul className="cars-list">
        {filteredCars.map(car => (
          <CarsItem car={car} key={car.car_id} />
        ))}
      </ul>
    </>
  );
};

export default CarsList;
