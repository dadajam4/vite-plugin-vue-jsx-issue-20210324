import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/index'),
    name: 'home',
  },
  // {
  //   path: '/a',
  //   component: () => import('./pages/PageA.vue'),
  //   name: 'a',
  // },
  // {
  //   path: '/b',
  //   component: () => import('./pages/PageB.vue'),
  //   name: 'b',
  // },
  // {
  //   path: '/:catchAll(.*)',
  //   name: 'not-found',
  //   component: () => import('./pages/404'),
  // },
];
