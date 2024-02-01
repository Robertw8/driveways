import { combineReducers } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog';

const rootReducer = combineReducers({
  catalog: catalogReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
