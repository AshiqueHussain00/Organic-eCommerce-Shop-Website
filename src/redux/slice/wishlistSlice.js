import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const  initialState = {

    wishlistItems : localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : []
}


const wishlistSlice = createSlice({
   
    name : 'wishlist',
    initialState,
    reducers : {
        
        addToWishlist : (state , action) => {
           
            const product = action.payload;
            const existingItem = state.wishlistItems.find(item=> item.id === product.id);
            if(!existingItem){
               state.wishlistItems.push(product); 
               localStorage.setItem("wishlistItems" , JSON.stringify(state.wishlistItems));
            //    toast.success("Added to Wishlist")
            }else{
                toast.success("Already Added")
            }
            
        },

        removeFromWishlist : (state, action)=> {
             
            const productId = action.payload;

            
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== productId);

    
            localStorage.setItem("wishlistItems" ,  JSON.stringify(state.wishlistItems))

         
            // toast.error("Remove from Wishlist")
        }
    }
})


export const{addToWishlist , removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;