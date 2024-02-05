import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: []
};

const cartReducer = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addCartAction: (state, action) => {
            let product = action.payload;
            let productInCart = { ...product };
            let prod = state.cart.find(index => index.id === productInCart.id);
            if (prod) {
                prod.quantity += 1
            } else {
                state.cart.push(productInCart)
            };
            // console.log(productInCart);
            // console.log(state);
        },
        deleteCartAction: (state, action) => {
            const productIdDelete = action.payload;
            state.cart = state.cart.filter(prod => prod.productId !== productIdDelete);
        },
        countCartAction: (state, action) => {
            let { productId, quantity } = action.payload;
            let productInCart = state.cart.find(prod => prod.productId === productId);
            if (productInCart) {
                productInCart.quantity += quantity;
                if (productInCart.quantity < 1) {
                    state.cart = state.cart.filter(prod => prod.productId !== productId);
                }
            }
        }
    }
});

export const { addCartAction, deleteCartAction, countCartAction } = cartReducer.actions

export default cartReducer.reducer