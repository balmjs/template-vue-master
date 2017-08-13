import Vue from 'vue';
import VueRouter from 'vue-router';
import baseRoutes from './base';
import userRoutes from './user';

Vue.use(VueRouter);

let routes = baseRoutes.concat(userRoutes);

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
