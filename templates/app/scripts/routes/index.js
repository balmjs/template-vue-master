import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import baseRoutes from './base';
import demoRoutes from './demo';
import testRoutes from './test';

Vue.use(VueRouter);
Vue.use(VueMeta);

let routes = baseRoutes.concat(demoRoutes, testRoutes);

const router = new VueRouter({
  mode: 'history',
  // base: '/app/', // NOTE: for Back-end
  routes
});

export default router;
