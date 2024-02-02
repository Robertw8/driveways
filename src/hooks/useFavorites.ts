import { useSelector } from 'react-redux';
import { selectCars, selectError, selectIsLoading } from '../redux/favorites';

const useFavorites = () => {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return { cars, isLoading, error };
};

export default useFavorites;
