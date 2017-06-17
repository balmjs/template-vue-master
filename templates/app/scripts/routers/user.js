const UserIndex = resolve => require(['../views/user/index'], resolve);
const UserList = resolve => require(['../views/user/list'], resolve);
const UserCreate = resolve => require(['../views/user/create'], resolve);
const UserDetail = resolve => require(['../views/user/detail'], resolve);

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
    path: ':id/edit',
    name: 'user.edit',
    component: UserDetail
  }]
}];

export default userRoutes;
