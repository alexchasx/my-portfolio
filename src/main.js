import './assets/styles/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { applySeoMeta } from './utils/seo';
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from './utils/seo-data';
import { initAnalytics, trackPageView } from './utils/analytics';

// Применяем SEO-метаданные на старте (для пре-рендера и первого рендера SPA)
applySeoMeta(
  router.resolve(router.currentRoute.value),
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION
);

router.afterEach((to) => {
  // SEO: title, description, canonical, Open Graph
  applySeoMeta(to, DEFAULT_TITLE, DEFAULT_DESCRIPTION);

  // Аналитика: отправляем просмотр страницы
  trackPageView(to);

  // Доступность: переносим фокус на контент при навигации,
  // чтобы скринридер сообщал о смене страницы.
  requestAnimationFrame(() => {
    const main = document.querySelector('#main');
    if (main && to.name !== undefined) {
      main.focus({ preventScroll: true });
    }
  });
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

initAnalytics();

app.mount('#app');
