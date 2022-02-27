<template>
    <div class="overview">
        <Statistics />
        <Orders />
    </div>
</template>

<script>
import Statistics from "../components/overview/Statistics";
import Orders from "../components/overview/Orders";
export default {
    name: "Overview",
    components: {
        Statistics,
        Orders
    },
}
</script>