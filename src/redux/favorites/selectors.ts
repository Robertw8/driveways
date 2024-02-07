import { RootState } from '..';

export const selectCars = (state: RootState) => state.favorites.cars;
