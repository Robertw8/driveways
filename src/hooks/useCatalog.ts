import { useSelector } from 'react-redux';
import { selectCars, selectError, selectIsLoading } from '../redux/catalog';

const useCatalog = () => {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return { cars, isLoading, error };
};

export default useCatalog;
