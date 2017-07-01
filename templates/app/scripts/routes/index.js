import userRoutes from './user';
const Home = () => import('../views/home');
const About = () => import('../views/about');
const NotFound = () => import('../views/not-found');

let baseRoutes = [{
  path: '/home',
  name: 'home',
  component: Home,
  alias: '/'
}, {
  path: '/about',
  name: 'about',
  component: About
}, {
  path: '*',
  component: NotFound
}];

let routes = baseRoutes.concat(userRoutes);

export default routes;
