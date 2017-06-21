import userRoutes from './user';

const Home = async () => await import('../views/home');
const About = async () => await import('../views/about');
const NotFound = async () => await import('../views/not-found');

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
