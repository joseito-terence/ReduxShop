import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { TProduct } from '../../types';

const initialState: TProduct[] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      state = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
