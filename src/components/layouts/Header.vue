<template>
    <header class="app-header" id="app-haeder">
        <div class="container">
            <router-link :to="{ name: 'Home' }" class="logo">
                <img src="@/assets/images/logo/seddeq.png" alt="Seddeq logo">
                <span>Seddeq</span>
            </router-link>

            <button class="menu-btn d-xl-none d-lg-none d-md-block d-sm-block d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-main-menu" aria-controls="offcanvasExample">
                <img src="@/assets/images/layouts/header/home.gif" alt="Main menu list">
            </button>

            <div class="main-menu d-xl-block d-lg-block" tabindex="-1" id="offcanvas-main-menu" aria-labelledby="offcanvasExampleLabel">
                <ul class="pages">
                    <li>
                        <router-link :to="{ name: 'Home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Shop' }">Shop</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Categories' }">Categories</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Brands' }">Brands</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Home' }">Blog</router-link>
                    </li>
                </ul>
            </div>

            <div class="shopping">
                <div class="wish-list" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-wish-list" aria-controls="offcanvasExample">
                    <i class="far fa-heart"></i>
                    <span>{{ wishListCount }}</span>
                </div>
                <!-- Offcanvas wish-list -->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="#offcanvas-wish-list" aria-labelledby="offcanvasExampleLabel">
                    My wish list here
                </div>
                <!-- Offcanvas wish-list -->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas-wish-list" aria-labelledby="offcanvasExampleLabel">
                    <div class="title">
                        <span>Wish list</span>
                    </div>
                    <div class="shopping-cart-product" v-for="item in wishList" :key="item.product.id">
                        <div class="product-image">
                            <img :src="'http://localhost/api/uploads/products/'+item.product.image" alt="Product Image">
                        </div>
                        <div class="product-data">
                            <div class="product-name">
                                <router-link :to="{ name: 'Home' }">{{ item.product.name }}</router-link>
                            </div>
                            <div class="product-price">
                                <span>${{ item.product.price }}</span>
                            </div>
                        </div>
                        <div class="product-actions">
                            <button type="button" @click="removeProductFromWishList(item.product)">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>

                    <div class="empty-shopping-cart">
                        <button type="button" @click="emptyWishList()">
                            <i class="fa-solid fa-trash-can"></i>
                            <span>Empty wish list</span>
                        </button>
                    </div>
                </div>

                <div class="shopping-cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-shopping-cart" aria-controls="offcanvasExample">
                    <i class="fas fa-shopping-cart"></i>
                    <span>{{ cartItemCount }}</span>
                </div>
                <!-- Offcanvas shopping-cart -->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas-shopping-cart" aria-labelledby="offcanvasExampleLabel">
                    <div class="title">
                        <span>Shopping cart</span>
                    </div>
                    <div class="shopping-cart-product" v-for="item in shoppingCart" :key="item.product.id">
                        <div class="product-image">
                            <img :src="'http://localhost/api/uploads/products/'+item.product.image" alt="Product Image">
                        </div>
                        <div class="product-data">
                            <div class="product-name">
                                <router-link :to="{ name: 'Home' }">{{ item.product.name }}</router-link>
                            </div>
                            <div class="product-price">
                                <span>{{ item.quantity }} X ${{ item.product.price }}</span>
                            </div>
                        </div>
                        <div class="product-actions">
                            <button type="button" @click="removeProductFromShoppingCart(item.product)">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>

                    <div class="total">
                        <div class="info">
                            <label>Total: </label> <span>${{ cartTotalPrice }}</span>
                        </div>
                        <div class="checkout">
                            <router-link :to="{ name: 'Shop' }">Checkout</router-link>
                        </div>
                    </div>

                    <div class="empty-shopping-cart">
                        <button type="button" @click="emptyShoppingCart()">
                            <i class="fa-solid fa-trash-can"></i>
                            <span>Empty shopping cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import $ from "jquery";
export default {
    name: "Header",
    mounted() {
        // Sticky header in scroll
        let header = document.getElementById("app-haeder");

        window.addEventListener("scroll", function() {

            if(window.scrollY > 50) {

                header.classList.add("sticky-header");
                document.getElementById("app").style.paddingTop = "50px";
            } 
            if(window.scrollY <= 1) {

                header.classList.remove("sticky-header");
                document.getElementById("app").style.paddingTop = "0";
            }
            
        })

        // Main menu in small screens
        function myFunction(screenWidth) {
            if (screenWidth.matches) { // If media query matches
                $(".main-menu").addClass("offcanvas offcanvas-start");
            } else {
                $(".main-menu").removeClass("offcanvas offcanvas-start");
                $(".main-menu").css("display", "block");
            }
        }
        let screenWidth = window.matchMedia("(max-width: 991px)");
        myFunction(screenWidth) // Call listener function at run time
        screenWidth.addListener(myFunction) // Attach listener function on state changes
    },
    computed: {
        shoppingCart() {
            return this.$store.state.shoppingCart;
        },
        cartTotalPrice() {
            return this.$store.getters.cartTotalPrice;
        },
        cartItemCount() {
            return this.$store.getters.cartItemCount;
        },
        wishList() {
            return this.$store.state.wishList;
        },
        wishListCount() {
            return this.$store.getters.wishListCount;
        }
    },
    methods: {
        removeProductFromShoppingCart(product) {
            this.$store.dispatch('removeProductFromShoppingCart', product);
            this.$store.dispatch('removeProductFromStorage', product);
        },
        emptyShoppingCart() {
            this.$store.dispatch("emptyShoppingCart");
        },
        removeProductFromWishList(product) {
            this.$store.dispatch('removeProductFromWishList', product);
            this.$store.dispatch('removeProductFromWishListStorage', product);
        },
        emptyWishList() {
            this.$store.dispatch('emptyWishList');
        }
    }
}
</script>