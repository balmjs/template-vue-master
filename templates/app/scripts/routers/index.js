import userRoutes from './user';

const Home = require('../views/home');
const About = require('../views/about');
const NotFound = require('../views/404');

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
