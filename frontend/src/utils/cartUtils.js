export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
    state.shippingPrice = addDecimals(Number(state.itemsPrice) > 100 ? 0 : 10);
    state.taxPrice = addDecimals(0.15 * Number(state.itemsPrice));
    state.totalPrice = (Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2);
    
    localStorage.setItem("cart", JSON.stringify(state));
    return state;
}
