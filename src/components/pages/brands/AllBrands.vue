<template>
    <section class="all-brands p-t-50 p-b-50">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6" v-for="brand in brands" :key="brand.id">
                            <div class="brand">
                                <div class="brand-image">
                                    <img :src="'http://localhost/api/uploads/brands/'+brand.image" :alt="brand.name">
                                </div>
                                <router-link :to="{ name: 'Home' }" class="brand-link">
                                    <span>Discover</span>
                                    <i class="fa-solid fa-right-long"></i>
                                </router-link>
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
    name: "AllBrands",
    data() {
        return {
            // Brands
            brands: null,
        }
    },
    mounted() {
        // Get all brands
        this.axios.get(process.env.VUE_APP_API_URL+`brand/read.php`).then((response) => {
            this.brands = response.data.brands;
            console.log(response.data.brands);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
</script>