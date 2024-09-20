import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    wishlistItems: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [],
}


const wishlistSlice = createSlice({
   
    name : "wishlist",
    initialState,
    reducers : {
        
        addToWishlist : (state , action) => {
           
            const product = action.payload;
            const existingItem = state.wishlistItems.find(item=> item.id === product.id);
            if(!existingItem){
               state.wishlistItems.push(product); 
               localStorage.setItem("wishlistItems" , state.wishlistItems);
            }
        },

        removeFromWishlist : (state, action)=> {
             
            const productId = action.payload;
            state.wishlistItems.filter(item => item.id !== productId);
            localStorage.setItem("wishlistItems" ,  state.wishlistItems)
        }
    }
})


export const{addToWishlist , removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;