import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Reducers/UserReducer';
import DrawerReducer from './Reducers/DrawerReducer';
import CartReducer from './Reducers/CartReducer';


export const store = configureStore({
  reducer: {
    state: (state = 1) => state,
    userReducer: UserReducer,
    drawerReducer: DrawerReducer,
    cartReducer: CartReducer
  },
})