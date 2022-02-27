import Vue from "vue";
import VueRouter from "vue-router";
// Views
// home page
import Home from "@/views/Home";
// shop page
import Shop from "@/views/Shop";
// products profile page
import ProductProfile from "@/views/ProductProfile";
// categories page
import Categories from "@/views/Categories";
// brands page
import Brands from "@/views/Brands";

// Dashboard
import Dashboard from "@/views/dashboard/Dashboard";
    // Dashboard Overview
    import Overview from "@/components/pages/dashboard/pages/Overview.vue";

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
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        children: [
            {
                path: "",
                name: "Overview",
                component: Overview,
            },
        ]
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
