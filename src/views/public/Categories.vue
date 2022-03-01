<template>
    <div class="categories-page">
        <Header />
        <BreadCrumb :breadcrumbData="breadcrumbData" />
        <AllCategories />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/public/layouts/Header';
import BreadCrumb from '@/components/public/layouts/BreadCrumb';
import AllCategories from '@/components/public/pages/categories/AllCategories';
import Footer from '@/components/public/layouts/Footer';

export default {
    name: "Categories",
    components: {
        Header,
        BreadCrumb,
        AllCategories,
        Footer
    },
    data() {
        return {
            // Breadcrumb data
            breadcrumbData: {
                pageName: "Categories",
                lastPage: "Shop",
                lastPageLink: "Shop",
                currentPage: "Categories",
            },
        }
    },
};
</script>
