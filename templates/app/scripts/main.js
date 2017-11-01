import Vue from 'vue';
import $http from './plugins/$http';
import $newWindow from './plugins/$newWindow';
import app from './views/layouts/app';
import router from './routes';
import store from './store';

Vue.config.productionTip = false;
Vue.use($http);
Vue.use($newWindow);

new Vue({
  el: '#app',
  components: { app },
  template: '<app/>',
  router,
  store
});
