<template>
    <section class="products-page p-40">
        <b-table responsive striped hover :items="products" :fields="fields"></b-table>
    </section>
</template>

<script>
export default {
    name: "Products",
    data() {
        return {
            fields: ["id", "name", "code", "price", "brand_name", "category_name", "created", "Actions"],
            // Products array from response
            products: null,
        }
    },
    mounted() {
        // All products
        this.axios.get(process.env.VUE_APP_API_URL+`product/read.php`).then((response) => {
            this.products = response.data.products;
            console.log(this.products);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
</script>

<style lang="scss" scoped>
.products-page {
    
}
</style>