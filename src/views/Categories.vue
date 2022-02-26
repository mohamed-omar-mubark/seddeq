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
import Header from '@/components/layouts/Header';
import BreadCrumb from '@/components/layouts/BreadCrumb';
import AllCategories from '@/components/pages/categories/AllCategories';
import Footer from '@/components/layouts/Footer';

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
