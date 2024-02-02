import { createSlice } from '@reduxjs/toolkit';
import {
  type CatalogInitialState,
  getCatalog,
  getCatalogByPage,
  setFilters,
} from '.';

const initialState: CatalogInitialState = {
  cars: [],
  isLoading: false,
  error: '',
  filters: {
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
        state.cars = payload;
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
        state.error = action.error.message as string;
      })
      .addCase(setFilters, (state, { payload }) => {
        state.filters = {
          search: payload.search as string,
          rentalPrice: payload.price as string,
        };
      });
  },
});

export const catalogReducer = slice.reducer;
