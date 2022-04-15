<template>
    <div class="dashboard-page">
        <div class="row main">
            <div class="sidebar-container col-xl-2 col-lg-2 col-md-3">
                <Sidebar />
            </div>

            <div class="main-content col-xl-12 col-lg-12 col-md-12" id="main-content">
                <Header />

                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/admin/layouts/Sidebar';
import Header from '@/components/admin/layouts/Header';

export default {
    name: "Dashboard",
    components: {
        Sidebar,
        Header,
    },
};
</script>

<style lang="scss" scoped>
.dashboard-page {
    min-height: 100vh;
    background-color: var(--gray-background);

    .main {
        padding: 0;
        margin: 0;
        --bs-gutter-x: 0;

        .sidebar-container {
            position: relative;
        }

        .main-content {
            margin-left: 277px;
            width: calc(100% - 277px);
        }
    }
}
</style>
