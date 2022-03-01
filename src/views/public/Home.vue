<template>
    <div class="home-page">
        <Header />
        <Slider />
        <TopCollection />
        <Products />
        <Benefits />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/public/layouts/Header';
import Slider from '@/components/public/pages/home/Slider';
import TopCollection from '@/components/public/pages/home/TopCollection';
import Products from '@/components/public/pages/home/Products';
import Benefits from '@/components/public/pages/home/Benefits';
import Footer from '@/components/public/layouts/Footer';

export default {
    name: "Home",
    components: {
        Header,
        Slider,
        TopCollection,
        Products,
        Benefits,
        Footer
    },
};
</script>
