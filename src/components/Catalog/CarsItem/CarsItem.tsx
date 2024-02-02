import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFavorites } from '../../../hooks';

import { ButtonPrimary, Icon } from '../..';
import { RentalModal } from '..';

import './tailwind.css';
import clsx from 'clsx';
import {
  addCarToFavorites,
  deleteCarFromFavorites,
} from '../../../redux/favorites';

import type { Car } from '../../../redux/catalog';
import type { AppDispatch } from '../../../redux';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { cars } = useFavorites();
  const isFavorite = cars.find(item => item.car_id === car.car_id);

  const handleHeartClick = () => {
    if (!isFavorite) {
      dispatch(addCarToFavorites(car));
    } else {
      dispatch(deleteCarFromFavorites(car.car_id));
    }
  };

  return (
    <>
      <li className="w-72">
        <div className={`relative w-full h-64 rounded-xl card-gradient`}>
          <img
            src={car.img}
            alt={`${car.make} ${car.model}`}
            className="rounded-xl object-cover"
          />
          <button
            type="button"
            onClick={handleHeartClick}
            className="favorites-button "
            aria-label="add car to favorites"
          >
            <Icon
              name="heart"
              size={20}
              className={clsx(
                'duration-150',
                isFavorite
                  ? 'stroke-blue-primary fill-blue-primary'
                  : 'stroke-white-80 fill-none'
              )}
            />
          </button>
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <h4>
              {car.make} <span className="model-span">{car.model}</span>,{' '}
              {car.year}
            </h4>
            <p className="font-medium">{car.rentalPrice}</p>
          </div>
          <ul className="card-specs-list">
            <li className="card-specs-item">
              <p>{car.address}</p> <div className="card-specs-divider"></div>
            </li>
            <li className="card-specs-item">
              <p>{car.rentalCompany}</p>
              <div className="card-specs-divider"></div>
            </li>
            <li className="card-specs-item">
              <p>{car.type}</p> <div className="card-specs-divider"></div>
            </li>
            <li className="card-specs-item">
              <p>{car.make}</p> <div className="card-specs-divider"></div>
            </li>
            <li className="card-specs-item">
              <p>{car.car_id}</p> <div className="card-specs-divider"></div>
            </li>
            <li className="card-specs-item">
              <p>{car.functionalities[0]}</p>
            </li>
          </ul>
        </div>
        <div className="mt-7 h-11">
          <ButtonPrimary
            text="Learn more"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </li>
      <RentalModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        car={car}
      />
    </>
  );
};

export default CarCard;
