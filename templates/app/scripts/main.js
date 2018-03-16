import Vue from 'vue';
import App from './views/layouts/app';
import router from './routes';
import store from './store';
import $http from './plugins/$http';
import $bus from './plugins/$bus';
import $newWindow from './plugins/$new-window';

Vue.config.productionTip = false;
Vue.use($http);
Vue.use($bus);
Vue.use($newWindow);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>',
  router,
  store
});
