<template>
    <section class="products">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="column">
                        <div class="title">
                            <span>New Arrivals</span>
                        </div>
                        <div class="box" v-for="product in latestFourProducts" :key="product.id">
                            <div class="product-image">
                                <router-link :to="{ name: 'ProductProfile', params: {productId: product.id} }">
                                    <img :src="'http://localhost/api/uploads/products/'+product.image" :alt="product.name">
                                </router-link>
                            </div>
                            <div class="product-data">
                                <div class="product-name">
                                    <router-link :to="{ name: 'ProductProfile', params: {productId: product.id} }">
                                        <span>{{ product.name }}</span>
                                    </router-link>
                                </div>
                                <div class="product-price">
                                    <span>{{ product.price }}</span>
                                </div>
                                <div class="product-brand">
                                    <span>{{ product.brand_name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="column">
                        <div class="title">
                            <span>Weekly Top Seller</span>
                        </div>
                        <div class="box" v-for="product in latestFourProducts" :key="product.id">
                            <div class="product-image">
                                <router-link :to="{ name: 'ProductProfile', params: {productId: product.id} }">
                                    <img :src="'http://localhost/api/uploads/products/'+product.image" :alt="product.name">
                                </router-link>
                            </div>
                            <div class="product-data">
                                <div class="product-name">
                                    <router-link :to="{ name: 'ProductProfile', params: {productId: product.id} }">
                                        <span>{{ product.name }}</span>
                                    </router-link>
                                </div>
                                <div class="product-price">
                                    <span>{{ product.price }}</span>
                                </div>
                                <div class="product-brand">
                                    <span>{{ product.brand_name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="column">
                        <div class="title">
                            <span>Best Rated</span>
                        </div>
                        <div class="box" v-for="product in latestFourProducts" :key="product.id">
                            <div class="product-image">
                                <router-link :to="{ name: 'ProductProfile', params: {productId: product.id} }">
                                    <img :src="'http://localhost/api/uploads/products/'+product.image" :alt="product.name">
                                </router-link>
                            </div>
                            <div class="product-data">
                                <div class="product-name">
                                    <router-link :to="{ name: 'ProductProfile', params: {productId: product.id} }">
                                        <span>{{ product.name }}</span>
                                    </router-link>
                                </div>
                                <div class="product-price">
                                    <span>{{ product.price }}</span>
                                </div>
                                <div class="product-brand">
                                    <span>{{ product.brand_name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="column">
                        <div class="title">
                            <span>Sale</span>
                        </div>
                        <div class="box" v-for="product in latestFourProducts" :key="product.id">
                            <div class="product-image">
                                <router-link :to="{ name: 'ProductProfile', params: {productId: product.id} }">
                                    <img :src="'http://localhost/api/uploads/products/'+product.image" :alt="product.name">
                                </router-link>
                            </div>
                            <div class="product-data">
                                <div class="product-name">
                                    <router-link :to="{ name: 'ProductProfile', params: {productId: product.id} }">
                                        <span>{{ product.name }}</span>
                                    </router-link>
                                </div>
                                <div class="product-price">
                                    <span>{{ product.price }}</span>
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
    </section>
</template>

<script>
export default {
    name: "Products",
    data() {
        return {
            // Latest four products
            latestFourProducts: null,
        }
    },
    mounted() {
        // Get latest four products
        this.axios.get(process.env.VUE_APP_API_URL+`product/latest_four.php`).then((response) => {
            this.latestFourProducts = response.data.latest_products;
            console.log(response.data.latest_products);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
</script>