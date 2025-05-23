import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/lan',
  name: 'Lan',
  component: () => import('../views/Lan.vue')
}];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;