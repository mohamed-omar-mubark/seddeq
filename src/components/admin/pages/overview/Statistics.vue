<template>
    <section class="statistics">
        <div class="dashboard-section-heading">
            <span class="title">Dashboard</span>
        </div>

        <div class="boxs">
            <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="box">
                        <div class="icon">
                            <i class="fa-brands fa-product-hunt"></i>
                        </div>

                        <div class="content">
                            <div class="number">
                                <span>106</span>
                            </div>

                            <div class="text">
                                <span>Products</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="box">
                        <div class="icon icon-2">
                            <i class="fa-solid fa-bolt"></i>
                        </div>

                        <div class="content">
                            <div class="number">
                                <span>{{ ordersCount }}</span>
                            </div>

                            <div class="text">
                                <span>Orders</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="box">
                        <div class="icon icon-3">
                        <i class="fa-solid fa-chart-gantt"></i>
                        </div>

                        <div class="content">
                            <div class="number">
                                <span>7</span>
                            </div>

                            <div class="text">
                                <span>Categories</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="box">
                        <div class="icon icon-4">
                        <i class="fa-solid fa-copyright"></i>
                        </div>

                        <div class="content">
                            <div class="number">
                                <span>21</span>
                            </div>

                            <div class="text">
                                <span>Brands</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Statistics",
    computed: {
        ordersCount() {
            return this.$store.state.dashboardOverview.orders;
        }
    }
}
</script>