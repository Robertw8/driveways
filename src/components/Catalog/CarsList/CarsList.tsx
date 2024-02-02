import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCatalog } from '../../../hooks';

import { CarsItem } from '..';
import { getCatalog } from '../../../redux/catalog';
import { getFavorites } from '../../../redux/favorites';
import type { AppDispatch } from '../../../redux';
import './tailwind.css';

const CarsList: React.FC = () => {
  const { cars, filters } = useCatalog();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFavorites({}));

    dispatch(
      getCatalog({
        search: filters.search,
        rentalPrice: filters.rentalPrice,
      })
    );
  }, [dispatch, filters.search]);

  return (
    <ul className="cars-list">
      {cars.map((car, index) => (
        <CarsItem car={car} key={index} />
      ))}
    </ul>
  );
};

export default CarsList;
