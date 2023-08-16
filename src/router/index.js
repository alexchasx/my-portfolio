import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import { capitalizeFirstLetter } from '@/helpers';

const menuRoutes = store.getters.getMenu.map((item) => {
  const path = item.route === 'home' ? '/' : '/' + item.route;

  return {
    path,
    name: item.route,
    component: () =>
      import('@/views/' + capitalizeFirstLetter(item.route) + 'View.vue'),
  };
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...menuRoutes],
});

export default router;
