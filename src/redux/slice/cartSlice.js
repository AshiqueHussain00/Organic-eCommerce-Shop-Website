import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    items : [],
}

const cartSlice = createSlice({

    name : 'cart' ,
    initialState ,
    reducers: {

        addToCart : (state , action)=> {

            const product = action.payload;

            const existingItem = state.items.find(item => item.id === product.id);
            if(existingItem){
                existingItem.quantity = existingItem.quanty + 1;
            }else {
                state.items.push({...product , quantity : 1})
            }

        },
        removeFromCart : (state , action) => {

            const productId = action.payload;
            state.items.filter(item =>  item.id !== productId);

        },
        increaseQuantity : (state , action)=> {

            const productId = action.payload;
            const existingItem = state.items.find(item => item.id === productId);
            if(existingItem){
                existingItem.quantity = existingItem.quantity + 1;
            }

        },
        decreaseQuantity : (state , action)=> {

            const productId = action.payload;

            const existingItem = state.items.find(item => item.id === productId);
            if(existingItem){
                existingItem.quantity = Math.max(1 , existingItem.quantity - 1)
            }

        }
    }


})

export const{addToCart , removeFromCart , increaseQuantity , decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;