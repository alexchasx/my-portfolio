import lagoona350webp from '@/assets/images/lagoona-350.webp';
import lagoona290webp from '@/assets/images/lagoona-290.webp';
import lionic350webp from '@/assets/images/lionic-350.webp';
import lionic290webp from '@/assets/images/lionic-290.webp';
import modelingCourses350webp from '@/assets/images/3Dmodeling-courses-350.webp';
import modelingCourses290webp from '@/assets/images/3Dmodeling-courses-290.webp';
import evklid350webp from '@/assets/images/evklid-350.webp';
import evklid290webp from '@/assets/images/evklid-290.webp';
import gamePairs350webp from '@/assets/images/js-game_pairs-350.webp';
import gamePairs290webp from '@/assets/images/js-game_pairs-290.webp';
import bankSystem350webp from '@/assets/images/bank-system-350.webp';
import bankSystem290webp from '@/assets/images/bank-system-290.webp';
import todoList350webp from '@/assets/images/todo-list-350.webp';
import todoList290webp from '@/assets/images/todo-list-290.webp';
import moire350webp from '@/assets/images/moire-350.webp';
import moire290webp from '@/assets/images/moire-290.webp';
import laravelOrchidBlog350webp from '@/assets/images/laravel-orchid-blog-350.webp';
import laravelOrchidBlog290webp from '@/assets/images/laravel-orchid-blog-290.webp';
import teamkraft350webp from '@/assets/images/teamkraft-350.webp';
import teamkraft290webp from '@/assets/images/teamkraft-290.webp';
import htmlEmail350webp from '@/assets/images/html-email-350.webp';
import htmlEmail290webp from '@/assets/images/html-email-290.webp';
import animation350webp from '@/assets/images/animation350.webp';
import animation290webp from '@/assets/images/animation290.webp';
import highPass350webp from '@/assets/images/high-pass350.webp';
import highPass290webp from '@/assets/images/high-pass290.webp';
import sitDownPls350 from '@/assets/images/sitDownPls350.webp';
import sitDownPls290 from '@/assets/images/sitDownPls290.webp';
import sitDownPlsProduct350 from '@/assets/images/sitDownPls-product350.webp';
import sitDownPlsProduct290 from '@/assets/images/sitDownPls-product290.webp';
import techozavrrr350 from '@/assets/images/techozavrrr350.webp';
import techozavrrr290 from '@/assets/images/techozavrrr290.webp';
import myPortfolio350 from '@/assets/images/my-portfolio350.webp';
import myPortfolio290 from '@/assets/images/my-portfolio290.webp';

import IconHTML5 from '@/components/icons/IconHTML5.vue';
import IconJS from '@/components/icons/IconJS.vue';
import IconVue from '@/components/icons/IconVue.vue';
import IconLaravel from '@/components/icons/IconLaravel.vue';

const WEB_LAYOUTS = 1;
const JAVASCRIPT = 2;
const VUE_JS = 3;
const LARAVEL = 4;
const SKILLBOX_LINK = `<a target="_blank" href="https://skillbox.ru"
  class="link">Skillbox</a>`;
const GITHUB_PAGES_LINK = 'https://alexchasx.github.io/';
const MY_GITHUB = 'https://github.com/alexchasx/';

export const portfolioProjects = [
  {
    id: 1,
    tabId: WEB_LAYOUTS,
    imgDesktop: lagoona350webp,
    imgMobile: lagoona290webp,
    title: 'Lagoona',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-1/',
    github: MY_GITHUB + 'web-layout_project-1',
  },
  {
    id: 2,
    tabId: WEB_LAYOUTS,
    imgDesktop: lionic350webp,
    imgMobile: lionic290webp,
    title: 'Lionic',
    description: `Учебный проект. Создан в процессе прохождения курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-2/',
    github: MY_GITHUB + 'web-layout_project-2',
  },
  {
    id: 3,
    tabId: WEB_LAYOUTS,
    imgDesktop: modelingCourses350webp,
    imgMobile: modelingCourses290webp,
    title: 'Курсы 3D моделирования',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-3/',
    github: MY_GITHUB + 'web-layout_project-3',
  },
  {
    id: 4,
    tabId: WEB_LAYOUTS,
    imgDesktop: evklid350webp,
    imgMobile: evklid290webp,
    title: 'Евклид - проектные системы',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-4/',
    github: MY_GITHUB + 'web-layout_project-4',
  },
  {
    id: 5,
    tabId: JAVASCRIPT,
    imgDesktop: gamePairs350webp,
    imgMobile: gamePairs290webp,
    title: 'Игра "Пары"',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'js-game_pairs/',
    github: MY_GITHUB + 'js-game_pairs',
  },
  {
    id: 6,
    tabId: JAVASCRIPT,
    imgDesktop: bankSystem350webp,
    imgMobile: bankSystem290webp,
    title: 'Банковская система на JavaScript',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: null,
    github: MY_GITHUB + 'js-project_bank-system--client',
  },
  {
    id: 7,
    tabId: JAVASCRIPT,
    imgDesktop: todoList350webp,
    imgMobile: todoList290webp,
    title: 'ToDo-List',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'js-project_todo--client/',
    github: MY_GITHUB + 'js-project_todo--client',
  },
  {
    id: 8,
    tabId: VUE_JS,
    imgDesktop: moire350webp,
    imgMobile: moire290webp,
    title: 'Moire',
    description: `Дипломный проект на Vue 3 курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'vue-3_shop-moire/#/',
    github: MY_GITHUB + 'vue-3_shop-moire',
  },
  {
    id: 9,
    tabId: LARAVEL,
    imgDesktop: laravelOrchidBlog350webp,
    imgMobile: laravelOrchidBlog290webp,
    title: 'laravel-orchid-blog',
    description: `Пет-проект на Laravel`,
    link: 'https://alexchas-dev.ru/',
    github: MY_GITHUB + 'laravel-orchid-blog',
  },
  {
    id: 10,
    tabId: LARAVEL,
    imgDesktop: teamkraft350webp,
    imgMobile: teamkraft290webp,
    title: 'Teamkraft',
    description: `Коммерческий проект. Принимал участие в разаработке данного
      проекта в составе Веб-студии "Dymov.TECH" (Fingineers)`,
    link: 'https://www.teamkraft.net/',
    github: null,
  },
  {
    id: 11,
    tabId: WEB_LAYOUTS,
    imgDesktop: htmlEmail350webp,
    imgMobile: htmlEmail290webp,
    title: 'Вёрстка HTML-письма',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-6/',
    github: MY_GITHUB + 'web-layout_project-6',
  },
  {
    id: 12,
    tabId: WEB_LAYOUTS,
    imgDesktop: animation350webp,
    imgMobile: animation290webp,
    title: 'Animation',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-9/',
    github: MY_GITHUB + 'web-layout_project-9',
  },
  {
    id: 13,
    tabId: WEB_LAYOUTS,
    imgDesktop: highPass350webp,
    imgMobile: highPass290webp,
    title: 'High pass',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-13/',
    github: MY_GITHUB + 'web-layout_project-13',
  },
  {
    id: 14,
    tabId: WEB_LAYOUTS,
    imgDesktop: sitDownPls350,
    imgMobile: sitDownPls290,
    title: 'SitDownPls',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-14/',
    github: MY_GITHUB + 'web-layout_project-14',
  },
  {
    id: 15,
    tabId: WEB_LAYOUTS,
    imgDesktop: sitDownPlsProduct350,
    imgMobile: sitDownPlsProduct290,
    title: 'SitDownPls - страница продукта',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-14--product/',
    github: MY_GITHUB + 'web-layout_project-14--product',
  },
  {
    id: 16,
    tabId: VUE_JS,
    imgDesktop: techozavrrr350,
    imgMobile: techozavrrr290,
    title: 'ТЕХНОЗАВРРР',
    description: `Учебный проект на Vue 2. Создан в процессе прохождения курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: GITHUB_PAGES_LINK + 'vue-2_shop-technozavrrr/#/',
    github: MY_GITHUB + 'vue-2_shop-technozavrrr',
  },
  {
    id: 17,
    tabId: VUE_JS,
    imgDesktop: myPortfolio350,
    imgMobile: myPortfolio290,
    title: 'Сайт-портфолио на Vue 3',
    description: `Пет-проект на Vue 3 (Composition API)`,
    link: GITHUB_PAGES_LINK + 'my-portfolio--vue/',
    github: MY_GITHUB + 'my-portfolio--vue',
  },
];

export const portfolioTabs = [
  {
    id: WEB_LAYOUTS,
    isActive: true,
    title: 'Вёрстка',
    icon: IconHTML5,
    content: null,
  },
  {
    id: JAVASCRIPT,
    isActive: false,
    title: 'JavaScript',
    icon: IconJS,
    content: null,
  },
  {
    id: VUE_JS,
    isActive: false,
    title: 'Vue.js',
    icon: IconVue,
    content: null,
  },
  {
    id: LARAVEL,
    isActive: false,
    title: 'Laravel',
    icon: IconLaravel,
    content: null,
  },
];
