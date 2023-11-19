import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "car",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action)=>{
            state.items.push(action.payload)
        },
        clearcart: (state,action)=>{
            state.items.length=0
        }
    }
})

    
export const {addItem,clearcart}= cartSlice.actions;
export default cartSlice.reducer;