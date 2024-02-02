import { useSelector } from 'react-redux';
import {
  selectCars,
  selectError,
  selectFilters,
  selectIsLoading,
} from '../redux/catalog';

const useCatalog = () => {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  return { cars, isLoading, error, filters };
};

export default useCatalog;
