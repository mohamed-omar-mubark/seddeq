<template>
    <div class="shop-page">
        <Header />
        <BreadCrumb :breadcrumbData="breadcrumbData" />
        
        <div class="container p-t-50 p-b-50">
            <div class="row">
                <!-- Sidebar -->
                <div class="sidebar col-xl-3 col-lg-3 d-xl-block d-lg-block d-md-none">
                    <div class="title">
                        <i class="fa-solid fa-filter"></i>
                        <span>Filters</span>
                    </div>

                    <div class="filter">
                        <div class="filter-head">
                            <i class="fa-solid fa-filter-circle-dollar"></i>
                            <span>By price</span>
                        </div>

                        <div class="filter-body">
                            <ul>
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="default-price" checked @change="defaultPrice()">
                                        <label class="form-check-label" for="default-price">
                                            Default
                                        </label>
                                    </div>
                                </li>

                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="high-to-low-price" @change="highToLowPrice()">
                                        <label class="form-check-label" for="high-to-low-price">
                                            High to low
                                        </label>
                                    </div>
                                </li>

                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="low-to-high-price" @change="lowToHighPrice()">
                                        <label class="form-check-label" for="low-to-high-price">
                                            Low to high
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="filter">
                        <div class="filter-head">
                            <i class="fa-solid fa-filter"></i>
                            <span>By category</span>
                        </div>

                        <div class="filter-body">
                            <ul>
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="categoryFilter" id="category-filter" checked>
                                        <label class="form-check-label" for="category-filter">
                                            All
                                        </label>
                                    </div>
                                </li>

                                <li v-for="category in categories" :key="category.id">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="categoryFilter" :id="'category-filter'+category.id">
                                        <label class="form-check-label" :for="'category-filter'+category.id">
                                            {{ category.name }}
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="filter">
                        <div class="filter-head">
                            <i class="fa-solid fa-filter"></i>
                            <span>By brand</span>
                        </div>

                        <div class="filter-body">
                            <ul>
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="brandFilter" id="brand-filter" checked>
                                        <label class="form-check-label" for="brand-filter">
                                            All
                                        </label>
                                    </div>
                                </li>

                                <li v-for="brand in brands" :key="brand.id">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="brandFilter" :id="'brand-filter'+brand.id">
                                        <label class="form-check-label" :for="'brand-filter'+brand.id">
                                            {{ brand.name }}
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
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
                                        <router-link :to="{ name: 'ProductProfile', params: {productId: product.id} }">
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
import Header from '@/components/public/layouts/Header';
import BreadCrumb from '@/components/public/layouts/BreadCrumb';
import Footer from '@/components/public/layouts/Footer';

import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
    name: "Shop",
    data() {
        return {
            // All products
            allProducts: null,

            // Categories
            categories: null,

            // Brands
            brands: null,

            // Breadcrumb data
            breadcrumbData: {
                pageName: "Shop",
                lastPage: "Home",
                lastPageLink: "Home",
                currentPage: "Shop",
            },
        }
    },
    components: {
        Header,
        BreadCrumb,
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

        // Get all categories
        this.axios.get(process.env.VUE_APP_API_URL+`category/read.php`).then((response) => {
            this.categories = response.data.categories;
            console.log(response.data.categories);
        })
        .catch((error) => {
            console.log(error);
        });

        // Get all brands
        this.axios.get(process.env.VUE_APP_API_URL+`brand/read.php`).then((response) => {
            this.brands = response.data.brands;
            console.log(response.data.brands);
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
        },

        // Filters
        defaultPrice() {
            if(document.querySelector('input[id="default-price"]:checked').value === 'on') {
                this.allProducts.sort(function(a, b) {
                    return parseFloat(b.id) - parseFloat(a.id);
                });
            }
        },
        highToLowPrice() {
            if(document.querySelector('input[id="high-to-low-price"]:checked').value === 'on') {
                this.allProducts.sort(function(a, b) {
                    return parseFloat(b.price) - parseFloat(a.price);
                });
            }
        },
        lowToHighPrice() {
            if(document.querySelector('input[id="low-to-high-price"]:checked').value === 'on') {
                this.allProducts.sort(function(a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);
                });
            }
        }
    }
};
</script>
