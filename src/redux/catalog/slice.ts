import { createSlice } from '@reduxjs/toolkit';
import { Car, InitialState, getCatalog } from '.';

const initialState: InitialState = {
  cars: [],
  isLoading: false,
  error: '',
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
        state.error = '';
      })
      .addCase(getCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      });
  },
});

export const catalogReducer = slice.reducer;
