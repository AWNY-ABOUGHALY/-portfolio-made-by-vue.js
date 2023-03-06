import Vue from "vue";
import App from "./App.vue";

// router
import router from "./router";

// vuetify
import vuetify from "./plugins/vuetify";

// roboto font
import "roboto-fontface/css/roboto/roboto-fontface.css";

// material icons
import "@mdi/font/css/materialdesignicons.css";

import AOS from 'aos'
import 'aos/dist/aos.css'

// styles
import "./assets/scss/main.scss";

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
}).$mount("#app");
