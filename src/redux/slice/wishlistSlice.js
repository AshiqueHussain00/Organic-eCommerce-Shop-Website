import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    wishlistItems: [],
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
            }
        },

        removeFromWishlist : (state, action)=> {
             
            const productId = action.payload;
            state.wishlistItems.filter(item => item.id !== productId);
        }
    }
})


export const{addToWishlist , removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;