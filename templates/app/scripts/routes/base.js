const Home = () => import('@/views/home');
const NotFound = () => import('@/views/not-found');

let baseRoutes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    alias: '/'
  },
  {
    path: '*',
    component: NotFound
  }
];

export default baseRoutes;
