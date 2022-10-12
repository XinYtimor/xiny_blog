import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import crypto from "crypto-js";
Vue.prototype.$crypto = crypto; //加密，解密
Vue.config.productionTip = false;
import permiss from "./instruct/permiss";
Vue.directive("arrowBtn", permiss); //自定义全局指令注册方式（参数1：指令名，参数2：钩子函数）
new Vue({
  router,
  // mounted() {
  //   document.dispatchEvent(new Event('render-event'))
  // },
  render: (h) => h(App),
}).$mount("#app");
