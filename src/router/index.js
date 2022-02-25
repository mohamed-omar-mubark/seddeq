import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Shop from "@/views/Shop";
import ProductProfile from "@/views/ProductProfile";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/shop",
        name: "Shop",
        component: Shop,
    },
    {
        path: "/product/:productId",
        name: "ProductProfile",
        component: ProductProfile,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
