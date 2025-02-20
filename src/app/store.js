import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "../features/todo/todoSlice.js";
import {counterReducer} from "../features/todo/countSlice.js";


export const store = configureStore({
    reducer: {
        todo:todoReducer,
        counter:counterReducer
    }

})