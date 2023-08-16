import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import { capitalizeFirstLetter } from '@/helpers';

const menuRoutes = store.getters.getMenu.map((item) => {
  return {
    path: '/' + item.route,
    name: item.route,
    component: import('@/views/' + capitalizeFirstLetter(item.route) + 'View'),
  };
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...menuRoutes],
});

export default router;
