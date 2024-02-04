import { Modal, type ModalProps } from 'antd';
import { ButtonPrimary, Icon } from '../..';

import '../tailwind.css';
import type { Car } from '../../../redux/catalog';

interface RentalModal extends ModalProps {
  car: Car;
}

const RentalModal: React.FC<RentalModal> = ({ open, car, onCancel, onOk }) => {
  const conditionsArray = [...car.rentalConditions.split('\n').filter(Boolean)];

  return (
    <Modal
      open={open}
      destroyOnClose
      keyboard
      footer={null}
      maskClosable
      focusTriggerAfterClose
      closeIcon={<Icon name="x" size={24} className="stroke-primary" />}
      onCancel={onCancel}
      onOk={onOk}
      centered
    >
      <div className="pt-8 pb-4 px-4">
        <div className="rounded-xl">
          <img
            src={car.img}
            alt={`${car.make} ${car.model}`}
            className="rounded-xl"
          />
        </div>
        <div className="mt-4">
          <h4 className="text-primary text-lg font-medium">
            {car.make} <span className="model-span">{car.model}</span>,{' '}
            {car.year}
          </h4>
        </div>
        <ul className="card-specs-list">
          <li className="card-specs-item">
            <p>{car.address}</p>
            <div className="card-specs-divider"></div>
          </li>

          <li className="card-specs-item">
            <p>Id: {car.car_id}</p>
            <div className="card-specs-divider"></div>
          </li>
          <li className="card-specs-item">
            <p>Year: {car.year}</p>
            <div className="card-specs-divider"></div>
          </li>
          <li className="card-specs-item">
            <p>Type: {car.type}</p>
            <div className="card-specs-divider"></div>
          </li>
          <li className="card-specs-item">
            <p>Fuel Consumption: {car.fuelConsumption}</p>
            <div className="card-specs-divider"></div>
          </li>
          <li className="card-specs-item">
            <p>Engine Size: {car.engineSize}</p>
            <div className="card-specs-divider"></div>
          </li>
        </ul>
        <p className="mt-4 text-sm text-primary">{car.description}</p>
        <p className="mt-6 font-semibold">Accessories and functionalities:</p>
        <ul className="card-specs-list">
          {car.accessories.concat(car.functionalities).map((item, index) => (
            <li className="card-specs-item" key={index}>
              <p>{item}</p>
              <div className="card-specs-divider"></div>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-semibold">Rental Conditions:</p>
        <ul className="conditions-list">
          {conditionsArray.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
          <li>
            <p>
              Mileage:{' '}
              <span className="text-blue-primary font-semibold">
                {car.mileage}
              </span>
            </p>
          </li>
          <li>
            <p>
              Price:{' '}
              <span className="text-blue-primary font-semibold">
                {car.rentalPrice}
              </span>
            </p>
          </li>
        </ul>
        <div className="w-40 h-11 mt-6">
          <ButtonPrimary text="Rental car" onClick={onOk}></ButtonPrimary>
        </div>
      </div>
    </Modal>
  );
};

export default RentalModal;
