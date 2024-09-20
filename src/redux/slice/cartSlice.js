import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";



const initialState = {
    cart : localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    totalQuantity : localStorage.getItem("totalQuantity") ? JSON.parse(localStorage.getItem("totalQuantity")) : 0,
    totalPrice: localStorage.getItem("totalPrice") ? JSON.parse(localStorage.getItem("totalPrice")) : 0,
}

const cartSlice = createSlice({

    name : 'cart' ,
    initialState ,
    reducers: {

        addToCart : (state , action)=> {

            const product = action.payload;

            const existingItem = state.cart.find(item => item.id === product.id);

            if(existingItem){

                // existingItem.quantity = existingItem.quantity + 1;
                // existingItem.totalPrice = existingItem.totalPrice + action.payload.price.discounted;

                toast.success("Already added")

            }else {

                state.cart.push({...product , quantity : 1 , totalPrice: action.payload.price.discounted})
                localStorage.setItem("cart" , JSON.stringify(state.cart))
                toast.success("Added to Cart")


            }

            // state.totalQuantity = state.totalQuantity + 1;
            // state.totalPrice = state.totalPrice + action.payload.price.discounted;

        },
        removeFromCart : (state , action) => {

            const productId = action.payload;
          
            const itemToRemove = state.cart.find(item => item.id === productId);
            // console.log("Item remove: " , itemToRemove);

            if(itemToRemove){
                // state.totalQuantity = state.totalQuantity - itemToRemove.quantity;
                // state.totalPrice = state.totalPrice - itemToRemove.totalPrice;
                
            state.cart = state.cart.filter(item =>  item.id !== productId);
            localStorage.setItem("cart" , JSON.stringify(state.cart));
      
            toast.error("Product removed from cart")
            }


        },
        increaseQuantity : (state , action)=> {

            const productId = action.payload;
            const existingItem = state.cart.find(item => item.id === productId);
            if(existingItem){
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price.discounted;
                localStorage.setItem("cart" , JSON.stringify(state.cart));
                // state.totalQuantity = state.totalQuantity + 1;
                // state.totalPrice = state.totalPrice + existingItem.price.discounted
            }

        },
        decreaseQuantity : (state , action)=> {

            const productId = action.payload;

            const existingItem = state.cart.find(item => item.id === productId);
              
            if(existingItem && existingItem.quantity > 1){

                existingItem.quantity = existingItem.quantity - 1;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price.discounted;
                localStorage.setItem("cart" , JSON.stringify(state.cart));

                // state.totalQuantity = state.totalQuantity - 1;
                // state.totalPrice = state.totalPrice - existingItem.price.discounted;
            }

        },
        
    //   resetCart : (state) => {

    //     state.cart = [];
    //     state.totalItems = 0;
    //     state.totalPrice = 0;

    //     localStorage.removeItem("cart");
    //     localStorage.removeItem("totalItems");
    //     localStorage.removeItem("totalPrice");
    //   },

        calculateTotalPrice : (state)=>{
                
            if(state.cart.length !== 0){
                state.totalQuantity = state.cart.reduce((total , item) => total + item.quantity , 0);
                state.totalPrice = state.cart.reduce((total , item) => total + item.totalPrice , 0);
    
                localStorage.setItem("totalQuantity" , JSON.stringify(state.totalQuantity));
                localStorage.setItem("totalPrice" , JSON.stringify(state.totalPrice));
    
            }else{

                state.totalQuantity = 0;
                state.totalPrice = 0;
    
                localStorage.setItem("totalQuantity" , JSON.stringify(state.totalQuantity));
                localStorage.setItem("totalPrice" , JSON.stringify(state.totalPrice));

            }
      
        }
    }


})

export const{addToCart , removeFromCart , increaseQuantity , decreaseQuantity , calculateTotalPrice} = cartSlice.actions;
export default cartSlice.reducer;