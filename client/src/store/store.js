import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice";
import salesReducer from "./salesSlice";

const mainReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    sales: salesReducer
})

export const store = configureStore({
    reducer: mainReducer
})