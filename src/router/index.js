import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { menu } from '@/constants';

const routes = [
  {
    path: '/',
    name: menu.home.route,
    component: HomeView,
  },
  {
    path: '/' + menu.skills.route,
    name: menu.skills.route,
    component: HomeView,
  },
  {
    path: '/' + menu.experience.route,
    name: menu.experience.route,
    component: HomeView,
  },
  {
    path: '/' + menu.education.route,
    name: menu.education.route,
    component: HomeView,
  },
  {
    path: '/' + menu.portfolio.route,
    name: menu.portfolio.route,
    component: HomeView,
  },
  {
    path: '/' + menu.contacts.route,
    name: menu.contacts.route,
    component: HomeView,
  },
  {
    path: '/' + menu.pdf.route,
    name: menu.pdf.route,
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
