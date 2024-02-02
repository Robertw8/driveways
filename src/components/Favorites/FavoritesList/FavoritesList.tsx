import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFavorites } from '../../../hooks';

import { CarsItem, Loader } from '../..';
import { Empty } from 'antd';

import '../../Catalog/CarsList/tailwind.css';
import { getFavorites } from '../../../redux/favorites';
import type { AppDispatch } from '../../../redux';

const FavoritesList: React.FC = () => {
  const [notFound, setNotFound] = useState<boolean>(false);
  const { cars, isLoading } = useFavorites();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFavorites({}));
  }, [dispatch]);

  useEffect(() => {
    if (!cars.length && !isLoading) {
      const timeoutId = setTimeout(() => {
        setNotFound(true);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setNotFound(false);
    }
  }, [cars, isLoading]);

  return (
    <>
      {notFound && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No favorites found"
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
