import Vue from 'vue';
import axios from 'axios';
import App from './views/layouts/app';
import router from './routes';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$http = axios; // TODO: error handler

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
});
