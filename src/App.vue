<template>
    <div id="app">
        <!-- <perfect-scrollbar ref="scroll"> -->
            <router-view />
        <!-- </perfect-scrollbar> -->

        <!-- Alerts -->
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
export default {
    // watch: {
    //     $route() {
    //         this.$refs.scroll.$el.scrollTop = 0;
    //     }
    // }
}
</script>
