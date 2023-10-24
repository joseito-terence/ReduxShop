import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import { productApi } from '../services/product';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
