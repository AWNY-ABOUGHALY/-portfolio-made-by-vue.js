import Vue from "vue";
import App from "./App.vue";

// router
import router from "./router";

// vuex store
import store from "./store";

// axios config
import axios from "./plugins/axios";

// vuetify
import vuetify from "./plugins/vuetify";

// roboto font
import "roboto-fontface/css/roboto/roboto-fontface.css";

// material icons
import "@mdi/font/css/materialdesignicons.css";

// i18n
import i18n from "./plugins/i18n";

import AOS from 'aos'
import 'aos/dist/aos.css'

// styles
import "./assets/scss/main.scss";

new Vue({
  router,
  store,
  axios,
  vuetify,
  i18n,
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
}).$mount("#app");
