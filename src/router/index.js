import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Shop from "@/views/Shop";
import ProductProfile from "@/views/ProductProfile";
import Categories from "@/views/Categories";
import Brands from "@/views/Brands";

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
    {
        path: "/categories",
        name: "Categories",
        component: Categories,
    },
    {
        path: "/brands",
        name: "Brands",
        component: Brands,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
