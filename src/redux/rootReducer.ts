import { combineReducers } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog';
import { persistedFavoritesReducer } from './favorites';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  favorites: persistedFavoritesReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
