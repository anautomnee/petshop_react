import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice";
import salesReducer from "./salesSlice";
import filterReducer from "./filterSlice";
import cartReducer from "./cartSlice";

const mainReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    sales: salesReducer,
    filter: filterReducer,
    cart: cartReducer
})

export const store = configureStore({
    reducer: mainReducer
})