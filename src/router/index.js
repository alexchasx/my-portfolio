import {
  createRouter,
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
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Портфолио Fullstack-разработчика | Александр Часовников',
        description:
          'Личное портфолио Fullstack-разработчика. Вёрстка, JavaScript, VueJS, Laravel, PHP. Примеры проектов, опыт и контакты.',
      },
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
      meta: {
        title: 'Опыт и навыки | Александр Часовников',
        description:
          'Опыт работы и профессиональные навыки Fullstack-разработчика: HTML, CSS, JavaScript, VueJS, PHP, Laravel, PostgreSQL, MySQL.',
      },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
      meta: {
        title: 'Портфолио проектов | Александр Часовников',
        description:
          'Примеры реализованных проектов: адаптивная вёрстка, JavaScript-приложения, проекты на VueJS, Laravel и PHP. Реализованные кейсы разработчика.',
      },
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
      meta: {
        title: 'Контакты | Александр Часовников',
        description:
          'Связаться с Fullstack-разработчиком Александром Часовниковым: email, Telegram, GitHub и другие контакты для сотрудничества.',
      },
    },
    {
      path: '/:any(.*)',
      component: E404View,
      meta: {
        title: 'Страница не найдена (404) | Александр Часовников',
        description:
          'Запрашиваемая страница не найдена. Перейдите на главную страницу портфолио Fullstack-разработчика.',
      },
    },
  ],
});

export default router;
