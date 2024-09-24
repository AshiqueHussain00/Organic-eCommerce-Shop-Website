import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice/cartSlice'
import wishlistReducer from "./slice/wishlistSlice";
import viewReducer from './slice/viewSlice'



export const store = configureStore ({

    reducer : {

        cart : cartReducer,
        wishlist : wishlistReducer,
        view : viewReducer,
        
    }
})