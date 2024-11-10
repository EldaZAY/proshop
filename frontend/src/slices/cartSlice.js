import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems: []};


const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existItem = state.cartItems.find((x) => x._id === newItem._id);
            if (existItem) {
                state.cartItems = state.cartItems.map((x) =>
                    x._id === existItem._id ? newItem : x);
            } else {
                state.cartItems = [...state.cartItems, newItem];
            }

            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
            state.shippingPrice = addDecimals(Number(state.itemsPrice) > 100 ? 0 : 10);
            state.taxPrice = addDecimals(0.15 * Number(state.itemsPrice));
            state.totalPrice = (Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2);
            
            localStorage.setItem("cart", JSON.stringify(state));
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;