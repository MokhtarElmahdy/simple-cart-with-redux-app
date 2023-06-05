import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "productsSlice/fetchProducts",
    async () => {
        // const response = await fetch("https://fakestoreapi.com/products");
        // const data = await response.json();
        const response = await axios.get("https://fakestoreapi.com/products")
        const data = await response.data
        // console.log(axD);
        // console.log(data);
        return data
    }
)

export const productsSlice = createSlice({
    name : 'productsSlice',
    initialState : [],
    extraReducers: (build) => {
        build.addCase(fetchProducts.fulfilled, (state , action) => {
            // console.log(action);
            return action.payload;
        })
    }
})

export default productsSlice.reducer