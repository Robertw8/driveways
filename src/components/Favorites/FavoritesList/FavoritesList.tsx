import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFavorites } from '../../../hooks';

import { CarsItem } from '../..';
import '../../Catalog/CarsList/CarsList.styles.css';
import type { AppDispatch } from '../../../redux';
import { getFavorites } from '../../../redux/favorites';

const FavoritesList: React.FC = () => {
  const { cars } = useFavorites();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFavorites({}));
  }, [dispatch]);

  return (
    <ul className="cars-list">
      {cars.map(car => (
        <CarsItem car={car} key={car.car_id} />
      ))}
    </ul>
  );
};

export default FavoritesList;
