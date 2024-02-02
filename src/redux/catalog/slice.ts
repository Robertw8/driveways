import { createSlice } from '@reduxjs/toolkit';
import {
  type Car,
  type InitialState,
  getCatalog,
  getCatalogByPage,
  setFilters,
} from '.';

const initialState: InitialState = {
  cars: [],
  isLoading: false,
  error: '',
  filters: {
    page: 1,
    search: '',
    rentalPrice: '',
  },
  paginationEnabled: false,
};

const slice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCatalog.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getCatalog.fulfilled, (state, { payload }) => {
        state.cars = payload as Car[];
        state.isLoading = false;
        state.paginationEnabled = true;
        state.error = '';

        if (payload.length < 12) state.paginationEnabled = false;
      })
      .addCase(getCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(getCatalogByPage.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getCatalogByPage.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
        state.isLoading = false;
        state.paginationEnabled = true;
        state.error = '';

        if (payload.length < 12) state.paginationEnabled = false;
      })
      .addCase(getCatalogByPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as string;
      })
      .addCase(setFilters, (state, { payload }) => {
        state.filters = {
          page: payload.page as number,
          search: payload.search as string,
          rentalPrice: payload.price as string,
        };
      });
  },
});

export const catalogReducer = slice.reducer;
