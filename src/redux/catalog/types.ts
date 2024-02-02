interface Car {
  id: string;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[]; // ?
  functionalities: string[]; // ?
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
  car_id: string;
}

interface CatalogInitialState {
  cars: Car[];
  isLoading: boolean;
  error: Error | string;
  filters: {
    search: string;
    rentalPrice: string;
  };
  paginationEnabled: boolean;
}

export type { CatalogInitialState, Car };
