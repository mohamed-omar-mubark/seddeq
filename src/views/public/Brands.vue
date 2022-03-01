<template>
    <div class="brands-page">
        <Header />
        <BreadCrumb :breadcrumbData="breadcrumbData" />
        <AllBrands />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/public/layouts/Header';
import BreadCrumb from '@/components/public/layouts/BreadCrumb';
import AllBrands from '@/components/public/pages/brands/AllBrands';
import Footer from '@/components/public/layouts/Footer';

export default {
    name: "Brands",
    components: {
        Header,
        BreadCrumb,
        AllBrands,
        Footer
    },
    data() {
        return {
            // Breadcrumb data
            breadcrumbData: {
                pageName: "Brands",
                lastPage: "Shop",
                lastPageLink: "Shop",
                currentPage: "Brands",
            },
        }
    },
};
</script>
