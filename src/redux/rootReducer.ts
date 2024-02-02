import { combineReducers } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog';
import { favoritesReducer } from './favorites';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
