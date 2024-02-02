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
}

interface InitialState {
  cars: Car[];
  isLoading: boolean;
  error: Error | string;
  filters: {
    page: number;
    search: string;
    rentalPrice: string;
  };
  paginationEnabled: boolean;
}

export type { InitialState, Car };
