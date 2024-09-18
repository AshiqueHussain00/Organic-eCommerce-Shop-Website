import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    items: [],
}


const wishlistSlice = createSlice({
   
    name : "wishlist",
    initialState,
    reducers : {
        
        addToWishlist : (state , action) => {
           
            const product = action.payload;
            const existingItem = state.items.find(item=> item.id === product.id);
            if(!existingItem){
               state.items.push(product); 
            }
        },

        removeFromWishlist : (state, action)=> {
             
            const productId = action.payload;
            state.items.filter(item => item.id !== productId);
        }
    }
})


export const{addToWishlist , removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;