import './assets/styles/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const DEFAULT_TITLE = 'Портфолио | Fullstack-developer';
const DEFAULT_DESCRIPTION =
  'Портфолио Fullstack-разработчика - VueJS | Laravel';

function setMetaDescription(content) {
  let description = document.querySelector('meta[name="description"]');
  if (!description) {
    description = document.createElement('meta');
    description.name = 'description';
    document.head.appendChild(description);
  }
  description.setAttribute('content', content);
}

router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  setMetaDescription(to.meta.description || DEFAULT_DESCRIPTION);

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

app.mount('#app');
