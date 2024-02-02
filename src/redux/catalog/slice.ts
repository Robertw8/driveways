import { createSlice } from '@reduxjs/toolkit';
import { Car, InitialState, getCatalog, setFilters } from '.';

const initialState: InitialState = {
  cars: [],
  isLoading: false,
  error: '',
  filters: {
    page: 1,
    search: '',
    rentalPrice: '',
  },
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
        state.cars = [...state.cars, ...payload] as Car[];
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
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
