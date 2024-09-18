import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    try {
        const response = await axios.get("http://localhost:3333/products/all");
        console.log(response.data);
        return response.data;
    } catch(error){
        console.log(error.message);
        return error.message;
    }
});

export const getCategories = createAsyncThunk("categories/getCategories", async () => {
    try {
        const response = await axios.get("http://localhost:3333/categories/all");
        console.log(response.data);
        return response.data;
    } catch(error){
        console.log(error.message);
        return error.message;
    }
});