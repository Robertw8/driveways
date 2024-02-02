import { RootState } from '..';

export const selectCars = (state: RootState) => state.catalog.cars;
export const selectIsLoading = (state: RootState) => state.catalog.isLoading;
export const selectError = (state: RootState) => state.catalog.isLoading;
export const selectFilters = (state: RootState) => state.catalog.filters;
export const selectPaginationEnabled = (state: RootState) =>
  state.catalog.paginationEnabled;
