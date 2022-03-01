<template>
    <div class="overview">
        <Statistics />
        <Orders />
    </div>
</template>

<script>
import Statistics from "@/components/admin/pages/overview/Statistics";
import Orders from "@/components/admin/pages/overview/Orders";
export default {
    name: "Overview",
    components: {
        Statistics,
        Orders
    },
}
</script>