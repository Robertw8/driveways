import { RootState } from '..';

export const selectCars = (state: RootState) => state.favorites.cars;
export const selectIsLoading = (state: RootState) => state.favorites.isLoading;
export const selectError = (state: RootState) => state.favorites.error;
