import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFavorites, useNotFoundTimeout } from '../../../hooks';

import { CarsItem, Loader } from '../..';
import { Empty } from 'antd';

import '../../Catalog/CarsList/tailwind.css';
import { getFavorites } from '../../../redux/favorites';
import type { AppDispatch } from '../../../redux';

const FavoritesList: React.FC = () => {
  const { cars, isLoading } = useFavorites();
  const dispatch = useDispatch<AppDispatch>();
  const notFound = useNotFoundTimeout(cars, isLoading);

  useEffect(() => {
    dispatch(getFavorites({}));
  }, [dispatch]);

  return (
    <>
      {notFound && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No favorite cars found"
        />
      )}
      {!isLoading ? (
        <ul className="cars-list">
          {cars.map(car => (
            <CarsItem car={car} key={car.car_id} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default FavoritesList;
