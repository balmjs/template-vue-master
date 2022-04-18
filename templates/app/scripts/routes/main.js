import demoRoutes from './demo';
const Home = () => import('@/views/home');
const NotFound = () => import('@/views/not-found');

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    alias: '/'
  },
  ...demoRoutes,
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
