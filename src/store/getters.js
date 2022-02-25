// export const cartItemCount = (state) => {
//     return state.cart.length;
// }

// Count products in shopping cart
export const cartItemCount = (state) => {
    return state.shoppingCart.length;
}

// Count total price in shopping cart
export const cartTotalPrice = (state) => {
    let total = 0;

    state.shoppingCart.forEach(item => {
        total += item.product.price * item.quantity;
    });

    return total;
}

// Count products in wish list
export const wishListCount = (state) => {
    return state.wishList.length;
}