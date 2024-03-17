import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/router/permisson.js'
import store from "@/store";

import 'normalize.css'
//自定义全局css
import '@/assets/css/global.css'
//导入axios
import request from "@/utils/request";

Vue.config.productionTip = false
Vue.use(ElementUI);


//挂载全局
Vue.prototype.$request = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
