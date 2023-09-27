import lagoona350webp from '@/assets/images/lagoona-350.webp';
import lagoona290webp from '@/assets/images/lagoona-290.webp';
import lionic350webp from '@/assets/images/lionic-350.webp';
import lionic290webp from '@/assets/images/lionic-290.webp';
import modelingCourses350webp from '@/assets/images/3Dmodeling-courses-350.webp';
import modelingCourses290webp from '@/assets/images/3Dmodeling-courses-290.webp';
import evklid350webp from '@/assets/images/evklid-350.webp';
import evklid290webp from '@/assets/images/evklid-290.webp';
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

import {
  DEFAULT_IS_OPEN,
  GITHUB_PAGES_LINK,
  MY_GITHUB,
  SKILLBOX_LINK,
  WEB_LAYOUTS,
} from './constants';

export const webLayoutProjects = [
  {
    id: WEB_LAYOUTS + 1,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: lagoona350webp,
    imgMobile: lagoona290webp,
    title: 'Lagoona',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-1/',
    github: MY_GITHUB + 'web-layout_project-1',
  },
  {
    id: WEB_LAYOUTS + 2,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: lionic350webp,
    imgMobile: lionic290webp,
    title: 'Lionic',
    description: `Учебный проект. Создан в процессе прохождения курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-2/',
    github: MY_GITHUB + 'web-layout_project-2',
  },
  {
    id: WEB_LAYOUTS + 3,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: modelingCourses350webp,
    imgMobile: modelingCourses290webp,
    title: 'Курсы 3D моделирования',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-3/',
    github: MY_GITHUB + 'web-layout_project-3',
  },
  {
    id: WEB_LAYOUTS + 4,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: evklid350webp,
    imgMobile: evklid290webp,
    title: 'Евклид - проектные системы',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-4/',
    github: MY_GITHUB + 'web-layout_project-4',
  },
  {
    id: WEB_LAYOUTS + 5,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: htmlEmail350webp,
    imgMobile: htmlEmail290webp,
    title: 'Вёрстка HTML-письма',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-6/',
    github: MY_GITHUB + 'web-layout_project-6',
  },
  {
    id: WEB_LAYOUTS + 6,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: animation350webp,
    imgMobile: animation290webp,
    title: 'Animation',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-9/',
    github: MY_GITHUB + 'web-layout_project-9',
  },
  {
    id: WEB_LAYOUTS + 7,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: highPass350webp,
    imgMobile: highPass290webp,
    title: 'High pass',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-13/',
    github: MY_GITHUB + 'web-layout_project-13',
  },
  {
    id: WEB_LAYOUTS + 8,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: sitDownPls350,
    imgMobile: sitDownPls290,
    title: 'SitDownPls',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-14/',
    github: MY_GITHUB + 'web-layout_project-14',
  },
  {
    id: WEB_LAYOUTS + 9,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: sitDownPlsProduct350,
    imgMobile: sitDownPlsProduct290,
    title: 'SitDownPls - страница продукта',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'web-layout_project-14--product/',
    github: MY_GITHUB + 'web-layout_project-14--product',
  },
];
