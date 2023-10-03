import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import ContactsView from '@/views/ContactsView.vue';
import E404View from '@/views/E404View.vue';

const PUBLIC_PATH = '/my-portfolio/';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(PUBLIC_PATH),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    },
    {
      path: '/:any(.*)',
      component: E404View,
    },
  ],
});

export default router;
