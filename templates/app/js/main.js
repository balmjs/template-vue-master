import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import App from './app';
import routes from './routers';
import store from './store';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.prototype.$http = axios;

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store: new Vuex.Store(store)
});
