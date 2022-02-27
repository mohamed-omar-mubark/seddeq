<template>
    <div class="dashboard-page">
        <div class="row main">
            <div class="sidebar-container col-xl-2 col-lg-2 col-md-3">
                <DashboardSidebar />
            </div>

            <div class="main-content col-xl-12 col-lg-12 col-md-12" id="main-content">
                <DashboardHeader />

                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import DashboardSidebar from '@/components/layouts/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/layouts/dashboard/DashboardHeader';

export default {
    name: "Dashboard",
    components: {
        DashboardSidebar,
        DashboardHeader,
    },
};
</script>
