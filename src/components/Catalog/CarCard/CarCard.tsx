import { useState } from 'react';

import { ButtonPrimary, Icon } from '../..';
import { RentalModal } from '..';

import './CarCard.styles.css';
import { Car } from '../../../redux/catalog';


interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <li className="w-72">
        <div className="relative w-full h-72 rounded-xl card-gradient">
          <img
            src={car.img}
            alt={`${car.make} ${car.model}`}
            className="rounded-xl"
          />
          <button
            type="button"
            className="absolute top-5 right-5 w-5 h-5 bg-transparent border-none"
            aria-label="add car to favorites"
          >
            <Icon
              name="heart"
              size={20}
              fill="transparent"
              stroke="#FFFFFFCC"
            />
          </button>
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <h4>
              {car.make}{' '}
              <span className="text-blue-primary font-medium">{car.model}</span>
              , {car.year}
            </h4>
            <p className="font-medium">{car.rentalPrice}</p>
          </div>
          <ul className="mt-2 text-xs text-black-50 flex flex-wrap gap-2">
            <li className="flex gap-2">
              <p>{car.address}</p>{' '}
              <div className="h-full w-px bg-black-10"></div>
            </li>
            <li className="flex gap-2">
              <p>{car.rentalCompany}</p>
              <div className="h-full w-px bg-black-10"></div>
            </li>
            <li className="flex gap-2">
              <p>{car.type}</p> <div className="h-full w-px bg-black-10"></div>
            </li>
            <li className="flex gap-2">
              <p>{car.make}</p> <div className="h-full w-px bg-black-10"></div>
            </li>
            <li className="flex gap-2">
              <p>{car.id}</p> <div className="h-full w-px bg-black-10"></div>
            </li>
            <li className="flex gap-2">
              <p>{car.functionalities[0]}</p>
            </li>
          </ul>
        </div>
        <div className="mt-7">
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
