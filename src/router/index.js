import { createRouter, createWebHistory } from 'vue-router';
// import store from '../store';
// import { useCommonStore } from '@/stores/common';
// import { capitalizeFirstLetter } from '@/helpers';
import HomeView from '@/views/HomeView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import ContactsView from '@/views/ContactsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  ],
});

export default router;
