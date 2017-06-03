import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import App from './views/layouts/app';
import routes from './routers';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.prototype.$http = axios;

const router = new VueRouter({
  // mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: new Vuex.Store(store)
});
