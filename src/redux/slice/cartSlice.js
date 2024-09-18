import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    items : [],
    totalQuantity : 0,
    totalPrice: 0,
}

const cartSlice = createSlice({

    name : 'cart' ,
    initialState ,
    reducers: {

        addToCart : (state , action)=> {

            const product = action.payload;

            const existingItem = state.items.find(item => item.id === product.id);
            if(existingItem){

                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + action.payload.price.discounted;

            }else {
                state.items.push({...product , quantity : 1 , totalPrice: action.payload.price.discounted})
            }

            state.totalQuantity = state.totalQuantity + 1;
            state.totalPrice = state.totalPrice + action.payload.price.discounted;

        },
        removeFromCart : (state , action) => {

            const productId = action.payload;

            const itemToRemove = state.items.find(item => item.id === productId);

            if(itemToRemove){
                state.totalQuantity = state.totalQuantity - itemToRemove.quantity;
                state.totalPrice = state.totalPrice - itemToRemove.totalPrice;
                
            state.items.filter(item =>  item.id !== productId);
            }


        },
        increaseQuantity : (state , action)=> {

            const productId = action.payload;
            const existingItem = state.items.find(item => item.id === productId);
            if(existingItem){
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price.discounted;
                state.totalQuantity = state.totalQuantity + 1;
                state.totalPrice = state.totalPrice + existingItem.price.discounted
            }

        },
        decreaseQuantity : (state , action)=> {

            const productId = action.payload;

            const existingItem = state.items.find(item => item.id === productId);
              
            if(existingItem && existingItem.quantity > 1){

                existingItem.quantity = existingItem.quantity - 1;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price.discounted;
                state.totalQuantity = state.totalQuantity - 1;
                state.totalPrice = state.totalPrice - existingItem.price.discounted;
            }

        },
        calculateTotalPrice : (state)=>{

            state.totalQuantity = state.items.reduce((total , item) => total + item.quantity , 0);
            state.totalPrice = state.items.reduce((total , item) => total + item.totalPrice , 0);

        }
    }


})

export const{addToCart , removeFromCart , increaseQuantity , decreaseQuantity , calculateTotalPrice} = cartSlice.actions;
export default cartSlice.reducer;