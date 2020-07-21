const UserIndex = () => import('@/views/demo/index');
const UserList = () => import('@/views/demo/list');
const UserCreate = () => import('@/views/demo/create');
const UserDetail = () => import('@/views/demo/detail');

let userRoutes = [
  {
    path: '/demo',
    name: 'demo',
    component: UserIndex,
    redirect: '/demo/list',
    children: [
      {
        path: 'list',
        name: 'demo.list',
        component: UserList
      },
      {
        path: 'create',
        name: 'demo.create',
        component: UserCreate
      },
      {
        path: ':id/edit',
        name: 'demo.edit',
        component: UserDetail
      }
    ]
  }
];

export default userRoutes;
