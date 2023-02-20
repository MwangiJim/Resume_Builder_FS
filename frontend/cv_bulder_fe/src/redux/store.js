import { configureStore } from "@reduxjs/toolkit";
import { CanvasCvSlice } from "./SliceReducer";

const store = configureStore({
    reducer:{
        CV_Canvas:CanvasCvSlice.reducer
    }
})
export default store;