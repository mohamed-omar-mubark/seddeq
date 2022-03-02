// Set "shoppingCart" var from localStorage to cart state
let shoppingCart = window.localStorage.getItem("shoppingCart");

// Set "wishList" var from localStorage to wishList state
let wishList = window.localStorage.getItem("wishList");

export default {

    // Website name 
    websiteName: "Seddeq",

    // shoppingCart state array []
    shoppingCart: shoppingCart ? JSON.parse(shoppingCart) : [],

    // wishList state array[]
    wishList: wishList ? JSON.parse(wishList) : [],

    username: "",

    userData: [],

    uploading: "",

    // Dashboard overview statistics
    dashboardOverview: {
        products: null,
        orders: null,
        categories: null,
        brands: null
    }
}