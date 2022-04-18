import Vue from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import store from '@/store';
import $http from '@/plugins/http';

Vue.config.productionTip = false;

Vue.use($http);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>',
  router,
  store
});
