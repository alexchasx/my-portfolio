import laravelOrchidBlog350webp from '@/assets/images/laravel-orchid-blog-350.webp';
import laravelOrchidBlog290webp from '@/assets/images/laravel-orchid-blog-290.webp';
import sonnen350webp from '@/assets/images/sonnen-350.webp';
import sonnen290webp from '@/assets/images/sonnen-290.webp';
import elcom_portal350webp from '@/assets/images/elcom_portal350.webp';
import elcom_portal290webp from '@/assets/images/elcom_portal290.webp';
import officemag350webp from '@/assets/images/officemag350.webp';
import officemag290webp from '@/assets/images/officemag290.webp';
import brauberg350webp from '@/assets/images/brauberg350.webp';
import brauberg290webp from '@/assets/images/brauberg290.webp';
import samson350webp from '@/assets/images/samson350.webp';
import samson290webp from '@/assets/images/samson290.webp';
import elcomspb350webp from '@/assets/images/elcomspb350.webp';
import elcomspb290webp from '@/assets/images/elcomspb290.webp';
import teamkraft350webp from '@/assets/images/teamkraft-350.webp';
import teamkraft290webp from '@/assets/images/teamkraft-290.webp';

import { DEFAULT_IS_OPEN, PHP, MY_GITHUB } from './constants';

export const phpProjects = [
  {
    id: PHP + 1,
    isOpen: DEFAULT_IS_OPEN,
    tabId: PHP,
    imgDesktop: laravelOrchidBlog350webp,
    imgMobile: laravelOrchidBlog290webp,
    title: 'laravel-orchid-blog',
    description: `Некоммерческий проект. Блог на Laravel`,
    link: 'https://alexchas-dev.ru/',
    github: MY_GITHUB + 'laravel-orchid-blog',
  },
  {
    id: PHP + 2,
    isOpen: DEFAULT_IS_OPEN,
    tabId: PHP,
    imgDesktop: teamkraft350webp,
    imgMobile: teamkraft290webp,
    title: 'Teamkraft',
    description: `Участвовал в разработке REST API(Swagger) в составе Веб-студии "Dymov.TECH" (Fingineers)`,
    link: 'https://www.teamkraft.net/',
    github: null,
  },
  {
    id: PHP + 3,
    isOpen: DEFAULT_IS_OPEN,
    tabId: PHP,
    imgDesktop: officemag350webp,
    imgMobile: officemag290webp,
    title: 'ОФИСМАГ',
    description: `Один из интернет-магазинов ГК САМСОН (ОФИСМАГ). Участвовал в доработке бекенда и фронтенда`,
    link: 'https://www.officemag.ru/',
    github: null,
  },
  {
    id: PHP + 4,
    isOpen: DEFAULT_IS_OPEN,
    tabId: PHP,
    imgDesktop: samson350webp,
    imgMobile: samson290webp,
    title: 'САМСОН',
    description: `Один из интернет-магазинов ГК САМСОН (ОФИСМАГ). Участвовал в доработке бекенда и фронтенда`,
    link: 'https://www.samsonopt.ru/',
    github: null,
  },
  {
    id: PHP + 5,
    isOpen: DEFAULT_IS_OPEN,
    tabId: PHP,
    imgDesktop: brauberg350webp,
    imgMobile: brauberg290webp,
    title: 'BRAUBERG',
    description: `Один из интернет-магазинов ГК САМСОН (ОФИСМАГ). Участвовал в доработке фронтенда`,
    link: 'https://brauberg.com/',
    github: null,
  },
  {
    id: PHP + 6,
    isOpen: DEFAULT_IS_OPEN,
    tabId: PHP,
    imgDesktop: sonnen350webp,
    imgMobile: sonnen290webp,
    title: 'SONNEN',
    description: `Один из интернет-магазинов ГК САМСОН (ОФИСМАГ). Участвовал в доработке фронтенда`,
    link: 'https://sonnen.me/',
    github: null,
  },
  {
    id: PHP + 7,
    isOpen: DEFAULT_IS_OPEN,
    tabId: PHP,
    imgDesktop: elcomspb350webp,
    imgMobile: elcomspb290webp,
    title: 'elcomspb.ru',
    description: `Действующий интернет-магазин компании ЭЛКОМ. Участвовал в доработке бекенда и фронтенда`,
    link: 'https://www.elcomspb.ru/',
    github: null,
  },
  {
    id: PHP + 8,
    isOpen: DEFAULT_IS_OPEN,
    tabId: PHP,
    imgDesktop: elcom_portal350webp,
    imgMobile: elcom_portal290webp,
    title: 'portal.elcomspb.ru',
    description: `Внутренний портал компании ЭЛКОМ. Участвовал в доработке бекенда и фронтенда`,
    link: 'https://portal.elcomspb.ru/#/',
    github: null,
  },
];
