import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "./actionCreators";

const initialState = {
    status: "IDLE",
    products: [],
    error: null,
    productsInCart: [],
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.productsInCart = [...state.productsInCart, action.payload];
        },
        removeFromCart(state, action) {
            state.productsInCart = state.productsInCart.filter(item => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.status = "PENDING";
            state.error = null;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = "FAILED";
            state.error = action.payload;
            state.products = [];
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.status = "SUCCESS";
            state.error = null;
            state.products = action.payload;
        })
    }
})

export default productsSlice.reducer;
export const {addToCart, removeFromCart} = productsSlice.actions;