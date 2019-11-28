import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// @ts-ignore
import vueScrollactive from "vue-scrollactive";

Vue.config.productionTip = false;

Vue.use(vueScrollactive);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
