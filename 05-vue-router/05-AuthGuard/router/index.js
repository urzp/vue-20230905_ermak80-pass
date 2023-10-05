import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticated } from '../services/authService.js';

const router = createRouter({
  history: createWebHistory('/05-vue-router/05-AuthGuard'),
  routes: [
    {
      path: '/',
      alias: '/meetups',
      component: () => import('../views/PageMeetups.vue'),
    },
    {
      path: '/login',
      meta: {
        requireGuest: true,
      },
      beforeEnter: (to, from) => {
        console.log(from)
        return isAuthenticated()?'/':true
      },
      component: () => import('../views/PageLogin.vue'),
    },
    {
      path: '/register',
      meta: {
        requireGuest: true,
      },
      beforeEnter: (to, from) => {
        return isAuthenticated()?'/':true
      },
      component: () => import('../views/PageRegister.vue'),
    },
    {
      path: '/meetups/create',
      query: {from:'/meetups/create'},
      meta: {
        requireAuth: true,
      },
      beforeEnter: (to, from) => {
        return isAuthenticated()?true:'/login'
      },
      component: () => import('../views/PageCreateMeetup.vue'),
    },
    {
      path: '/meetups/:meetupId(\\d+)/edit',
      meta: {
        requireAuth: true,
      },
      beforeEnter: (to, from) => {
        return isAuthenticated()?true:'/login'
      },
      component: () => import('../views/PageEditMeetup.vue'),
    },
  ],
});

export { router };
