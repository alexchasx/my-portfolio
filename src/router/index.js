import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import { routesMeta } from '@/utils/seo-data';

// Ленивая загрузка представлений — code-splitting по маршрутам
const HomeView = () => import('@/views/HomeView.vue');
const ExperienceView = () => import('@/views/ExperienceView.vue');
const PortfolioView = () => import('@/views/PortfolioView.vue');
const ContactsView = () => import('@/views/ContactsView.vue');
const E404View = () => import('@/views/E404View.vue');

const PUBLIC_PATH = '/my-portfolio/';

const E404_META = {
  title: 'Страница не найдена (404) | Александр Часовников',
  description:
    'Запрашиваемая страница не найдена. Перейдите на главную страницу портфолио Fullstack-разработчика.',
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { ...routesMeta['/'] },
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
      meta: { ...routesMeta['/experience'] },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
      meta: { ...routesMeta['/portfolio'] },
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
      meta: { ...routesMeta['/contacts'] },
    },
    {
      path: '/:any(.*)',
      component: E404View,
      meta: { ...E404_META },
    },
  ],
});

export default router;
