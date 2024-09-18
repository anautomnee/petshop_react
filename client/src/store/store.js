import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice";

const mainReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer
})

export const store = configureStore({
    reducer: mainReducer
})