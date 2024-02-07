import { createSlice } from '@reduxjs/toolkit';
import { addCarToFavorites, deleteCarFromFavorites } from '.';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import type { Car } from '../catalog';

const initialState: { cars: Car[] } = {
  cars: [],
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addCarToFavorites, (state, { payload }) => {
        state.cars.push(payload);
      })
      .addCase(deleteCarFromFavorites, (state, { payload }) => {
        state.cars = state.cars.filter(car => car.car_id !== payload);
      });
  },
});

export const persistedFavoritesReducer = persistReducer(
  {
    key: 'favorites',
    storage,
    whitelist: ['cars'],
  },
  slice.reducer
);
