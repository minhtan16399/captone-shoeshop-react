import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Reducers/UserReducer';
import CartReducer from './Reducers/CartReducer';


export const store = configureStore({
  reducer: {
    // state: (state = 1) => state,
    userReducer: UserReducer,
    cartReducer: CartReducer
  },
})