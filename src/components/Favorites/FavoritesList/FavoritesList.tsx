import { useFavorites } from '../../../hooks';

import { CarsItem } from '../..';
import { Empty } from 'antd';
import '../../Catalog/tailwind.css';

const FavoritesList: React.FC = () => {
  const { cars } = useFavorites();

  if (!cars.length) {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="No favorite cars found"
      />
    );
  }

  return (
    <ul className="cars-list">
      {cars.map(car => (
        <CarsItem car={car} key={car.car_id} />
      ))}
    </ul>
  );
};

export default FavoritesList;
