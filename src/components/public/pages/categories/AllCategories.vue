<template>
    <section class="all-categories p-t-50 p-b-50">
        <div class="container">
            <div class="row justify-content-center">
                <!-- Loading spinner -->
                <div class="spinner text-center p-t-20 p-b-20" v-if="!categories">
                    <pulse-loader />
                </div>
                <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6" v-for="category in categories" :key="category.id">
                            <div class="category">
                                <div class="category-image">
                                    <img :src="'http://localhost/api/uploads/categories/'+category.image" :alt="category.name">
                                </div>
                                <router-link :to="{ name: 'Home' }" class="category-link">
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
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
    name: "AllCategories",
    data() {
        return {
            // Categories
            categories: null,
        }
    },
    components: {
        PulseLoader
    },
    mounted() {
        // Get all categories
        this.axios.get(process.env.VUE_APP_API_URL+`category/read.php`).then((response) => {
            this.categories = response.data.categories;
            console.log(response.data.categories);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
</script>