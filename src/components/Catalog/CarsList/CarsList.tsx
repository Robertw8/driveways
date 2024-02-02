import { useEffect } from 'react';
import { CarCard } from '../..';
import { useCatalog } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux';
import { getCatalog } from '../../../redux/catalog';

const CarsList: React.FC = () => {
  const { cars, filters } = useCatalog();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(
      getCatalog({
        search: filters.search,
        rentalPrice: filters.rentalPrice,
      })
    );
  }, [dispatch, filters.search]);

  return (
    <ul className="flex flex-wrap justify-center gap-y-12 gap-x-7">
      {cars.map((car, index) => (
        <CarCard car={car} key={index} />
      ))}
    </ul>
  );
};

export default CarsList;
