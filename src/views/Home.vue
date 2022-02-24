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
import Header from '@/components/layouts/Header';
import Slider from '@/components/pages/home/Slider';
import TopCollection from '@/components/pages/home/TopCollection';
import Products from '@/components/pages/home/Products';
import Benefits from '@/components/pages/home/Benefits';
import Footer from '@/components/layouts/Footer';

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
