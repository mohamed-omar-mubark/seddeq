<template>
    <div class="product-profile-page">
        <Header />
        <BreadCrumb :breadcrumbData="breadcrumbData" />
        <!-- Loading spinner -->
        <div class="spinner text-center p-t-20 p-b-20" v-if="!product">
            <pulse-loader />
        </div>
        <Product :product="product" />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/layouts/Header';
import BreadCrumb from '@/components/layouts/BreadCrumb';
import Product from '@/components/pages/product/Product';
import Footer from '@/components/layouts/Footer';

import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
    name: "ProductProfile",
    components: {
        Header,
        BreadCrumb,
        PulseLoader,
        Product,
        Footer
    },
    data() {
        return {
            // Product id from route params
            productId: this.$route.params.productId,

            // Product data
            product: null,

            // Breadcrumb data
            breadcrumbData: {
                pageName: null,
                lastPage: "Shop",
                lastPageLink: "Shop",
                currentPage: null,
            },
        }
    },
    mounted() {
        // Get single product data by id
        this.axios.get(process.env.VUE_APP_API_URL+`product/read_one.php?id=${this.productId}`).then((response) => {
            this.product = response.data;
            console.log(response.data);

            // Set breadcrumb data
            this.breadcrumbData.pageName = this.product.name;
            this.breadcrumbData.currentPage = this.product.name;
        })
        .catch((error) => {
            console.log(error);
        });
    }
};
</script>
