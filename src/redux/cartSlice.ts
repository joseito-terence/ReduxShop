import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { TProduct } from '../../types';

const initialState: TProduct[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<TProduct>) => {
      state = state.filter(product => product.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.cart;

export default cartSlice.reducer;
