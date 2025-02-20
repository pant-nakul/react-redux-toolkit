
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "count",
    initialState,
    reducers:{
        increment:(state) =>{
            state.count = state.count + 1;
        },
        decrement : (state) =>{
            state.count = state.count - 1;
        }
    }
})


export const {increment,decrement} = counterSlice.actions

export const counterReducer =  counterSlice.reducer