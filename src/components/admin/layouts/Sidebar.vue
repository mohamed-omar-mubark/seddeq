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
                    <router-link :to="{ name: 'Products' }">
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
        </div>
    </section>
</template>

<script>
export default {
    name: "Sidebar",
}
</script>

<style lang="scss" scoped>
.dashboard-sidebar {
    position: fixed;
    width: 277px;
    height: 100vh;
    z-index: 999;
    overflow-y: auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: transform 0.2s, left 0.2s;
    background-color: #fff;

    .logo {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;

        padding: 16px;

        img {
            width: 60px;
            height: auto;
        }

        span {
            font-size: 18px;
            font-weight: 600;
            color: var(--black-color);
        }
    }

    .main-menu {
        padding-top: 30px;

        .main-list {
            li {
                padding: 0 10px;
                margin-bottom: 10px;

                &.active {
                    a {
                        background-color: var(--dark-blue-color);
                        color: #fff;

                        span {
                            font-weight: 500;
                        }
                    }
                }

                a {
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    gap: 10px;

                    color: #414141;
                    border-radius: 8px;
                    padding: 20px;
                    font-size: 20px;

                    &:hover {
                        background-color: var(--dark-blue-color);
                        color: #fff;
                    }

                    span {
                        font-size: 14px;
                        font-weight: 400;
                    }
                }
            }
        }

        .list-title {
            padding: 20px 40px;

            span {
                font-size: 14px;
                font-weight: 400;
            }
        }
    }
}
</style>