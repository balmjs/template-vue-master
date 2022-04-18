import DemoIndex from '@/views/demo/index';
const DemoList = () => import('@/views/demo/list');
const DemoCreate = () => import('@/views/demo/create');
const DemoDetail = () => import('@/views/demo/detail');

const demoRoutes = [
  {
    path: '/demo',
    name: 'demo',
    component: DemoIndex,
    redirect: '/demo/list',
    children: [
      {
        path: 'list',
        name: 'demo.list',
        component: DemoList
      },
      {
        path: 'create',
        name: 'demo.create',
        component: DemoCreate
      },
      {
        path: ':id/edit',
        name: 'demo.edit',
        component: DemoDetail
      }
    ]
  }
];

export default demoRoutes;
