import { createSlice } from '@reduxjs/toolkit';
import {
  type FavoritesInitialState,
  addCarToFavorites,
  getFavorites,
  deleteCarFromFavorites,
} from '.';

const initialState: FavoritesInitialState = {
  cars: [],
  isLoading: false,
  error: '',
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFavorites.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getFavorites.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(addCarToFavorites.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addCarToFavorites.fulfilled, (state, { payload }) => {
        state.cars.push(payload);
        state.isLoading = false;
        state.error = '';
      })
      .addCase(addCarToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(deleteCarFromFavorites.pending, state => {
        state.isLoading = false;
        state.error = '';
      })
      .addCase(deleteCarFromFavorites.fulfilled, (state, { payload }) => {
        state.cars = state.cars.filter(car => car.car_id !== payload.car_id);
        state.isLoading = false;
        state.error = '';
      })
      .addCase(deleteCarFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      });
  },
});

export const favoritesReducer = slice.reducer;
