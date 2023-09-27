import gamePairs350webp from '@/assets/images/js-game_pairs-350.webp';
import gamePairs290webp from '@/assets/images/js-game_pairs-290.webp';
import bankSystem350webp from '@/assets/images/bank-system-350.webp';
import bankSystem290webp from '@/assets/images/bank-system-290.webp';
import todoList350webp from '@/assets/images/todo-list-350.webp';
import todoList290webp from '@/assets/images/todo-list-290.webp';

import {
  DEFAULT_IS_OPEN,
  GITHUB_PAGES_LINK,
  JAVASCRIPT,
  MY_GITHUB,
  SKILLBOX_LINK,
} from './constants';

export const javascriptProjects = [
  {
    id: JAVASCRIPT + 1,
    isOpen: DEFAULT_IS_OPEN,
    tabId: JAVASCRIPT,
    imgDesktop: gamePairs350webp,
    imgMobile: gamePairs290webp,
    title: 'Игра "Пары"',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'js-game_pairs/',
    github: MY_GITHUB + 'js-game_pairs',
  },
  {
    id: JAVASCRIPT + 2,
    isOpen: DEFAULT_IS_OPEN,
    tabId: JAVASCRIPT,
    imgDesktop: bankSystem350webp,
    imgMobile: bankSystem290webp,
    title: 'Банковская система на JavaScript',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: null,
    github: MY_GITHUB + 'js-project_bank-system--client',
  },
  {
    id: JAVASCRIPT + 3,
    isOpen: DEFAULT_IS_OPEN,
    tabId: JAVASCRIPT,
    imgDesktop: todoList350webp,
    imgMobile: todoList290webp,
    title: 'ToDo-List',
    description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от ${SKILLBOX_LINK}. Описание в README.md`,
    link: GITHUB_PAGES_LINK + 'js-project_todo--client/',
    github: MY_GITHUB + 'js-project_todo--client',
  },
];
