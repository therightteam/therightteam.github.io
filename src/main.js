import Vue from 'vue'
import App from './App.vue'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN';
// import api from 'api/api'
import Router from './router/index';

Vue.use(ElementUI,{locale});
Vue.use(Router);
// Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:Router
}).$mount('#app')
