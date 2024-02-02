import { useSelector } from 'react-redux';
import {
  selectCars,
  selectError,
  selectFilters,
  selectIsLoading,
  selectPaginationEnabled,
} from '../redux/catalog';

const useCatalog = () => {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const paginationEnabled = useSelector(selectPaginationEnabled);

  return { cars, isLoading, error, filters, paginationEnabled };
};

export default useCatalog;
