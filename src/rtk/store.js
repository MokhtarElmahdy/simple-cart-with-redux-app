import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";
import productsReducer from "./slices/products-slice";

export const store = configureStore({
    reducer: {
        Cart : cartReducer,
        Products : productsReducer
    }
})