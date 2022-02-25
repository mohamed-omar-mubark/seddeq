<template>
    <div class="shop-page">
        <Header />
        
        <div class="container p-t-50 p-b-50">
            <div class="row">
                <!-- Sidebar -->
                <div class="sidebar col-xl-3 col-lg-3 d-xl-block d-lg-block d-md-none">
                    Sidebar
                </div>

                <!-- Main shop -->
                <div class="main-shop col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div class="row">
                        <!-- Loading spinner -->
                        <div class="spinner text-center p-t-20 p-b-20" v-if="!allProducts">
                            <pulse-loader />
                        </div>
                        
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6" v-for="product in allProducts" :key="product.id">
                            <div class="product">
                                <div class="product-image">
                                    <img :src="'http://localhost/api/uploads/products/'+product.image" :alt="product.name">

                                    <div class="product-actions">
                                        <button type="button" class="add-to-wish-list-btn" @click="addToWishList(product)">
                                            <i class="fa-regular fa-heart"></i>
                                        </button>
                                        <router-link :to="{ name: 'ProductProfile', params: {productId: product.id} }" class="view-product-btn">
                                            <i class="fa-solid fa-eye"></i>
                                        </router-link>
                                        <button type="button" class="add-to-shopping-cart-btn" @click="addToShoppingCart(product)">
                                            <i class="fa-solid fa-cart-shopping"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="product-data">
                                    <div class="product-name">
                                        <router-link :to="{ name: 'Home' }">
                                            <span>{{ product.name }}</span>
                                        </router-link>
                                    </div>
                                    <div class="product-price">
                                        <span>${{ product.price }}</span>
                                    </div>
                                    <div class="product-brand">
                                        <span>{{ product.brand_name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
    name: "Shop",
    data() {
        return {
            allProducts: null,
        }
    },
    components: {
        Header,
        PulseLoader,
        Footer,
    },
    mounted() {
        // Get all products
        this.axios.get(process.env.VUE_APP_API_URL+`product/read.php`).then((response) => {
            this.allProducts = response.data.all_products;
            console.log(response.data.all_products);
        })
        .catch((error) => {
            console.log(error);
        });
    },
    methods: {
        addToShoppingCart(item) {
            this.$store.dispatch("addToShoppingCart", {
                product: item,
                quantity: 1
            });
            // Message
            this.$snotify.success("Added to shopping cart");
        },
        addToWishList(item) {
            this.$store.dispatch('addProductToWishList', {
                product: item,
            });
            // Message
            this.$snotify.success("Added to wish list");
        }
    }
};
</script>
