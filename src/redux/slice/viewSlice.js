import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    product : ""
}

const  viewSlice = createSlice({

    name : "view",
    initialState,
    reducers : {
        addInView : (state , action) => {
         
              state.product = action.payload;

        },
        removeInView : (state) => {
            state.product = "";

        }
    }

})

export const{ addInView  , removeInView} = viewSlice.actions;
export default viewSlice.reducer;