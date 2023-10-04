import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory('/05-vue-router/02-NotFound'),
  routes: [
    {
      path: '/page-a',
      alias: '/',
      component: () => import('../views/PageA'),
    },
    {
      path: '/page-b',
      component: () => import('../views/PageB'),
    },
    { path: '/page-:pathMatch(.*)*', name: 'page-NotFound', component: () => import('../views/PageNotFound.vue')},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/PageNotFound.vue')},
  ],
});
