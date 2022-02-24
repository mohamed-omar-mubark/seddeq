import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vue perfect scrollbar
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
Vue.use(PerfectScrollbar);

// Axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// Axios progress bar
import "axios-progress-bar/dist/nprogress.css";
import { loadProgressBar } from "axios-progress-bar";
loadProgressBar();

// Snotify Alerts
import Snotify from "vue-snotify";
Vue.use(Snotify);

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Jquery
import "jquery";
import "jquery/dist/jquery";

// Font Awesome
import "@fortawesome/fontawesome-free/js/all";

// Normalize
import "normalize.css";

// Scss
import "./scss/app.scss";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
