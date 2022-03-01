<template>
    <section class="top-collection p-b-50">
        <div class="container">
            <div class="section-heading p-t-50 p-b-50">
                <span class="title">Explore Our Top Collection</span>
                <span class="description">Explore and enjoy up to 40% off on selected collection</span>
            </div>

            <div class="row">
                <div class="first col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="content">
                        <router-link :to="{ name: 'Shop' }">Accessories</router-link>
                    </div>
                </div>
                <div class="second col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="content">
                        <router-link :to="{ name: 'Categories' }">Women</router-link>
                    </div>
                </div>
                <div class="third col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="content">
                        <router-link :to="{ name: 'Categories' }">Men</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "TopCollection",
}
</script>