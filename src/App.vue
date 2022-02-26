<template>
    <div id="app">
        <!-- <perfect-scrollbar ref="scroll"> -->
            <transition @before-enter="openInTop" mode="out-in" appear>
                <router-view />
            </transition>
        <!-- </perfect-scrollbar> -->

        <!-- Alerts -->
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    // watch: {
    //     $route() {
    //         this.$refs.scroll.$el.scrollTop = 0;
    //     }
    // }
    methods: {
        openInTop(){
            document.getElementById("app").scrollIntoView();
            $("body").css("overflow", "auto");
        }
    }
}
</script>
