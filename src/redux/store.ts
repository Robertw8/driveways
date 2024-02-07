import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '.';
import persistStore from 'redux-persist/es/persistStore';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
export type AppDispatch = typeof store.dispatch;
