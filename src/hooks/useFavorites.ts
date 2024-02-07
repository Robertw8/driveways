import { useSelector } from 'react-redux';
import { selectCars } from '../redux/favorites';

const useFavorites = () => {
  const cars = useSelector(selectCars);

  return { cars };
};

export default useFavorites;
