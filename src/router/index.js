import Vue from "vue";
import VueRouter from "vue-router";
// Views
// home page
import Home from "@/views/public/Home";
// shop page
import Shop from "@/views/public/Shop";
// products profile page
import ProductProfile from "@/views/public/ProductProfile";
// categories page
import Categories from "@/views/public/Categories";
// brands page
import Brands from "@/views/public/Brands";

// Admin dashboard
import Dashboard from "@/views/admin/Dashboard";
    // Dashboard Overview
    import Overview from "@/views/admin/childs/Overview.vue";

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
