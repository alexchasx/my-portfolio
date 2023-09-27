import moire350webp from '@/assets/images/moire-350.webp';
import moire290webp from '@/assets/images/moire-290.webp';
import techozavrrr350 from '@/assets/images/techozavrrr350.webp';
import techozavrrr290 from '@/assets/images/techozavrrr290.webp';
import myPortfolio350 from '@/assets/images/my-portfolio350.webp';
import myPortfolio290 from '@/assets/images/my-portfolio290.webp';
import todos350 from '@/assets/images/todos-350.webp';
import todos290 from '@/assets/images/todos-290.webp';

import {
  DEFAULT_IS_OPEN,
  GITHUB_PAGES_LINK,
  MY_GITHUB,
  SKILLBOX_LINK,
  VUE_JS,
} from './constants';

export const vueProjects = [
  {
    id: VUE_JS + 1,
    isOpen: DEFAULT_IS_OPEN,
    tabId: VUE_JS,
    imgDesktop: techozavrrr350,
    imgMobile: techozavrrr290,
    title: 'ТЕХНОЗАВРРР',
    description: `Учебный проект на Vue 2. Создан в процессе прохождения курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'vue-2_shop-technozavrrr/#/',
    github: MY_GITHUB + 'vue-2_shop-technozavrrr',
  },
  {
    id: VUE_JS + 2,
    isOpen: DEFAULT_IS_OPEN,
    tabId: VUE_JS,
    imgDesktop: myPortfolio350,
    imgMobile: myPortfolio290,
    title: 'Сайт-портфолио на Vue 3',
    description: `Пет-проект на Vue 3 (Composition API)`,
    link: GITHUB_PAGES_LINK + 'my-portfolio--vue/',
    github: MY_GITHUB + 'my-portfolio--vue',
  },
  {
    id: VUE_JS + 3,
    isOpen: DEFAULT_IS_OPEN,
    tabId: VUE_JS,
    imgDesktop: todos350,
    imgMobile: todos290,
    title: 'Todos',
    description: `Список задач на Vue 3 (Options API) и TypeScript. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'todos--vue/',
    github: MY_GITHUB + 'todos--vue',
  },
  {
    id: VUE_JS + 4,
    isOpen: DEFAULT_IS_OPEN,
    tabId: VUE_JS,
    imgDesktop: moire350webp,
    imgMobile: moire290webp,
    title: 'Moire',
    description: `Дипломный проект на Vue 3 курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'vue-3_shop-moire/#/',
    github: MY_GITHUB + 'vue-3_shop-moire',
  },
];
