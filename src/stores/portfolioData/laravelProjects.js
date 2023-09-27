import laravelOrchidBlog350webp from '@/assets/images/laravel-orchid-blog-350.webp';
import laravelOrchidBlog290webp from '@/assets/images/laravel-orchid-blog-290.webp';
import teamkraft350webp from '@/assets/images/teamkraft-350.webp';
import teamkraft290webp from '@/assets/images/teamkraft-290.webp';

import { DEFAULT_IS_OPEN, LARAVEL, MY_GITHUB } from './constants';

export const laravelProjects = [
  {
    id: LARAVEL + 1,
    isOpen: DEFAULT_IS_OPEN,
    tabId: LARAVEL,
    imgDesktop: laravelOrchidBlog350webp,
    imgMobile: laravelOrchidBlog290webp,
    title: 'laravel-orchid-blog',
    description: `Пет-проект на Laravel`,
    link: 'https://alexchas-dev.ru/',
    github: MY_GITHUB + 'laravel-orchid-blog',
  },
  {
    id: LARAVEL + 2,
    isOpen: DEFAULT_IS_OPEN,
    tabId: LARAVEL,
    imgDesktop: teamkraft350webp,
    imgMobile: teamkraft290webp,
    title: 'Teamkraft',
    description: `Коммерческий проект. Принимал участие в разаработке данного
      проекта в составе Веб-студии "Dymov.TECH" (Fingineers)`,
    link: 'https://www.teamkraft.net/',
    github: null,
  },
];
