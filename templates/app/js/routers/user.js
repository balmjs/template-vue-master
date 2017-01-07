const UserIndex = r => require.ensure([], () => r(require('../views/user/index')), '/user');
const UserList = r => require.ensure([], () => r(require('../views/user/list')), '/user');
const UserCreate = r => require.ensure([], () => r(require('../views/user/create')), '/user');
const UserDetail = r => require.ensure([], () => r(require('../views/user/detail')), '/user');

let userRoutes = [{
  path: '/user',
  name: 'user',
  component: UserIndex,
  children: [{
    path: 'list',
    name: 'user.list',
    component: UserList
  }, {
    path: 'create',
    name: 'user.create',
    component: UserCreate
  }, {
    path: 'detail/:id',
    name: 'user.detail',
    component: UserDetail
  }]
}];

export default userRoutes;
