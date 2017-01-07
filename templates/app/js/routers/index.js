import userRoutes from './user';

const Home = require('../views/home');
const About = require('../views/about');

let baseRoutes = [{
  path: '/home',
  name: 'home',
  component: Home,
  alias: '/'
}, {
  path: '/about',
  name: 'about',
  component: About
}];

let routes = baseRoutes.concat(userRoutes);

export default routes;
