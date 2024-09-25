import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsInCart: JSON.parse(localStorage.getItem("productsInCart")) || [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            // Check if item in cart
            const duplicate = state.productsInCart.find(product => product.id === action.payload.id);
            if(duplicate) {
                const new_cart = state.productsInCart.map(product => {
                    if(product.id === action.payload.id) {
                        return {...product, quantity: action.payload.quantity}
                    }
                    return product
                });
                state.productsInCart = new_cart;
                localStorage.setItem("productsInCart", JSON.stringify(new_cart));
            } else {
                const new_cart = [...state.productsInCart, action.payload];
                state.productsInCart = new_cart;
                localStorage.setItem("productsInCart", JSON.stringify(new_cart));
            }
        },
        removeFromCart(state, action) {
            const new_cart = state.productsInCart.filter(item => item.id !== action.payload);
            state.productsInCart = new_cart;
            localStorage.setItem("productsInCart", JSON.stringify(new_cart));
        },
        changeQuantity(state, action) {
            const new_cart = state.productsInCart.map(product => {
                if(product.id === action.payload.id) {
                    return {...product, quantity: action.payload.quantity}
                }
                return product
            });
            state.productsInCart = new_cart;
            localStorage.setItem("productsInCart", JSON.stringify(new_cart));
        },
        getTotal(state) {
            state.total = state.productsInCart.reduce((acc, product) => {
                if (product.discont_price) {
                    return acc + product.discont_price * product.quantity
                }
                return acc + product.price * product.quantity
            }, 0)
        }
    },
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart, changeQuantity, getTotal} = cartSlice.actions;