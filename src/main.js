import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// axios progress bar
import "axios-progress-bar/dist/nprogress.css";
import { loadProgressBar } from "axios-progress-bar";
loadProgressBar();

// snotify alerts
import Snotify from "vue-snotify";
Vue.use(Snotify);

// jquery
import "jquery";
import "jquery/dist/jquery";

// font awesome
import "@fortawesome/fontawesome-free/js/all";

// normalize
import "normalize.css";

// scss
import "./scss/app.scss";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
