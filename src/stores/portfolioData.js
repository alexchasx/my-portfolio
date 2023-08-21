import lagoona350 from '@/assets/images/lagoona-350.jpg';
import lionic350 from '@/assets/images/lionic-350.jpg';
import modelingCourses350 from '@/assets/images/3Dmodeling-courses-350.jpg';
import evklid350 from '@/assets/images/evklid-350.jpg';
import gamePairs350 from '@/assets/images/js-game_pairs-350.jpg';
import bankSystem350 from '@/assets/images/bank-system-350.jpg';
import todoList350 from '@/assets/images/todo-list-350.jpg';
import moire350 from '@/assets/images/moire-350.jpg';
import laravelOrchidBlog350 from '@/assets/images/laravel-orchid-blog-350.jpg';
import teamkraft350 from '@/assets/images/teamkraft-350.jpg';

const WEB_LAYOUTS = 1;
const JAVASCRIPT = 2;
const VUE_JS = 3;
const LARAVEL = 4;
const SKILLBOX_LINK = `<a target="_blank" href="https://skillbox.ru"
  class="link">Skillbox</a>`;

export const portfolioProjects = [
  {
    id: 1,
    tabId: WEB_LAYOUTS,
    imgDesktop: lagoona350,
    title: 'Lagoona',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: 'https://alexchasx.github.io/web-layout_project-1/',
    github: 'https://github.com/alexchasx/web-layout_project-1',
  },
  {
    id: 2,
    tabId: WEB_LAYOUTS,
    imgDesktop: lionic350,
    title: 'Lionic',
    description: `Учебный проект. Создан в процессе прохождения курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: 'https://alexchasx.github.io/web-layout_project-2/',
    github: 'https://github.com/alexchasx/web-layout_project-2',
  },
  {
    id: 3,
    tabId: WEB_LAYOUTS,
    imgDesktop: modelingCourses350,
    title: 'Курсы 3D моделирования',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: 'https://alexchasx.github.io/web-layout_project-3/',
    github: 'https://github.com/alexchasx/web-layout_project-3',
  },
  {
    id: 4,
    tabId: WEB_LAYOUTS,
    imgDesktop: evklid350,
    title: 'Евклид - проектные системы',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: 'https://alexchasx.github.io/web-layout_project-4/',
    github: 'https://github.com/alexchasx/web-layout_project-4',
  },
  {
    id: 5,
    tabId: JAVASCRIPT,
    imgDesktop: gamePairs350,
    title: 'Игра "Пары"',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: 'https://alexchasx.github.io/js-game_pairs/',
    github: 'https://github.com/alexchasx/js-game_pairs',
  },
  {
    id: 6,
    tabId: JAVASCRIPT,
    imgDesktop: bankSystem350,
    title: 'Банковская система на JavaScript',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: null,
    github: 'https://github.com/alexchasx/js-project_bank-system--client',
  },
  {
    id: 7,
    tabId: JAVASCRIPT,
    imgDesktop: todoList350,
    title: 'ToDo-List',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: 'https://alexchasx.github.io/js-project_todo--client/',
    github: 'https://github.com/alexchasx/js-project_todo--client',
  },
  {
    id: 8,
    tabId: VUE_JS,
    imgDesktop: moire350,
    title: 'Moire',
    description: `Дипломный проект на Vue 3 курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}`,
    link: 'https://alexchasx.github.io/vue-3_shop-moire/#/',
    github: 'https://github.com/alexchasx/vue-3_shop-moire',
  },
  {
    id: 9,
    tabId: LARAVEL,
    imgDesktop: laravelOrchidBlog350,
    title: 'laravel-orchid-blog',
    description: `Пет-проект на Laravel`,
    link: 'https://alexchas-dev.ru/',
    github: 'https://github.com/alexchasx/laravel-orchid-blog',
  },
  {
    id: 10,
    tabId: LARAVEL,
    imgDesktop: teamkraft350,
    title: 'Teamkraft',
    description: `Комммерческий проект (принимал участие в разаработке данного
      проекта в составе Веб-студии "Dymov.TECH" (Fingineers))`,
    link: 'https://www.teamkraft.net/',
    github: null,
  },
];

export const portfolioTabs = [
  {
    id: WEB_LAYOUTS,
    isActive: true,
    title: 'Вёрстка',
    content: null,
  },
  {
    id: JAVASCRIPT,
    isActive: false,
    title: 'JavaScript',
    content: null,
  },
  {
    id: VUE_JS,
    isActive: false,
    title: 'Vue.js',
    content: null,
  },
  {
    id: LARAVEL,
    isActive: false,
    title: 'Laravel',
    content: null,
  },
];
