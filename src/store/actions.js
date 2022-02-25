// export const actionName = ({commit}, { ..., ... }) => {
//     commit("MUTATION_NAME", { ..., ... });
// }

// (addToShoppingCart) Action take product data as array and quantity of product, And set all this data in localStorage("shoppingCart") by mutation called (ADD_TO_SHOPPING_CART)
export const addToShoppingCart = ({commit}, { product, quantity }) => {
    commit("ADD_TO_SHOPPING_CART", { product, quantity });
}

// (Remove product from shopping cart) Action pass product data to mutation called "REMOVE_PRODUCT_FROM_CART"
export const removeProductFromShoppingCart = ({ commit }, product) => {
    commit("REMOVE_PRODUCT_FROM_SHOPPING_CART", product);
}

// (Remove product from localstorage) Action pass product data to mutation called "REMOVE_PRODUCT_FROM_STORAGE"
export const removeProductFromStorage = ({commit}, product) => {
    commit("REMOVE_PRODUCT_FROM_STORAGE", product);
}

// (emptyShoppingCart) Action dekete all of products from shopping cart by mutation called (EMPTY_SHOPPING_CART)
export const emptyShoppingCart = ({commit}) => {
    commit("EMPTY_SHOPPING_CART");
}



// Wish List
// (Add product to wish list) action pass product data to mutation called "ADD_TO_WISH_LIST"
export const addProductToWishList = ({commit}, { product }) => {
    commit('ADD_TO_WISH_LIST', { product });
}

// (Remove product from wish list) action pass product data to mutation called "REMOVE_PRODUCT_FROM_WISH_LIST"
export const removeProductFromWishList = ({ commit }, product) => {
    commit('REMOVE_PRODUCT_FROM_WISH_LIST', product);
}

// (Remove product from localStorage wish list) action pass product data to mutation called "REMOVE_PRODUCT_FROM_WISH_LIST_STORAGE"
export const removeProductFromWishListStorage = ({commit}, product) => {
    commit('REMOVE_PRODUCT_FROM_WISH_LIST_STORAGE', product);
}

// (Remove product from wish list and localStorage) Action by mutation called "EMPTY_WISH_LIST"
export const emptyWishList = ({commit}) => {
    commit('EMPTY_WISH_LIST');
}