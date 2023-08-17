import { createRouter, createWebHistory } from 'vue-router';
// import store from '../store';
// import { useCommonStore } from '@/stores/common';
// import { capitalizeFirstLetter } from '@/helpers';
import AboutView from '@/views/AboutView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import ContactsView from '@/views/ContactsView.vue';

// const commonStore = useCommonStore();

// console.log('commonStore', commonStore);

// const menuRoutes = store.getters.getMenu.map((item) => {
//   const path = item.route === 'about' ? '/' : '/' + item.route;

//   return {
//     path,
//     name: item.route,
//     component: () =>
//       import('@/views/' + capitalizeFirstLetter(item.route) + 'View.vue'),
//   };
// });

// const menuRoutes = commonStore.menu.map((item) => {
//   const path = item.route === 'about' ? '/' : '/' + item.route;

//   return {
//     path,
//     name: item.route,
//     component: () =>
//       import('./views/' + capitalizeFirstLetter(item.route) + 'View.vue'),
//   };
// });

// const menu = commonStore.menu;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
    },
    // {
    //   path: '/skills',
    //   name: 'skills',
    //   component: SkillsView,
    // },
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
