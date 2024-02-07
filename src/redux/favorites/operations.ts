import { createAction } from '@reduxjs/toolkit';
import { Car } from '../catalog';

const addCarToFavorites = createAction<Car>('favorites/addCarToFavorites');

const deleteCarFromFavorites = createAction<Car | string>(
  'favorites/removeCarFromFavorites'
);

export { addCarToFavorites, deleteCarFromFavorites };
