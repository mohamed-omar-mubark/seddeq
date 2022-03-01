<template>
    <section class="dashboard-sidebar">
        <div class="logo">
            <img src="@/assets/images/logo/seddeq.png" alt="Seddeq">
            <span>Seddeq</span>
        </div>

        <div class="main-menu">
            <ul class="main-list">
                <li class="active">
                    <router-link :to="{ name: 'Overview' }">
                        <i class="fa-solid fa-gauge-high"></i>
                        <span>Dashboard</span>
                    </router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'Dashboard' }">
                        <i class="fa-brands fa-product-hunt"></i>
                        <span>Products</span>
                    </router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'Dashboard' }">
                        <i class="fa-solid fa-bolt"></i>
                        <span>Orders</span>
                    </router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'Dashboard' }">
                        <i class="fa-solid fa-chart-gantt"></i>
                        <span>Categories</span>
                    </router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'Dashboard' }">
                        <i class="fa-solid fa-copyright"></i>
                        <span>Brands</span>
                    </router-link>
                </li>
            </ul>

            <div class="list-title">
                <span>more</span>
            </div>

            <ul class="main-list">
                <li>
                    <router-link :to="{ name: 'Dashboard' }">
                        <i class="fa-solid fa-users"></i>
                        <span>Manage users</span>
                    </router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'Dashboard' }">
                        <i class="fa-solid fa-circle-plus"></i>
                        <span>Add new product</span>
                    </router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'Dashboard' }">
                        <i class="fa-solid fa-circle-plus"></i>
                        <span>Add new category</span>
                    </router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'Dashboard' }">
                        <i class="fa-solid fa-circle-plus"></i>
                        <span>Add new brand</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "Sidebar",
}
</script>