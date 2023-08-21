import { defineStore } from 'pinia';
import { reactive } from 'vue';
import imageUrl from '@/assets/images/lagoona-340.jpg';

export const usePortfolioStore = defineStore('portfolio', () => {
  const projects = reactive(
    [
      {
        id: 1,
        tabId: 1,
        imageUrl,
        title: 'Lagoona',
        description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
      },
      {
        id: 2,
        tabId: 1,
        imageUrl,
        title: 'Lagoona2',
        description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
      },
      {
        id: 3,
        tabId: 1,
        imageUrl,
        title: 'Lagoona3',
        description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
      },
      {
        id: 4,
        tabId: 2,
        imageUrl,
        title: 'Lagoona31221',
        description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
      },
      {
        id: 5,
        tabId: 2,
        imageUrl,
        title: 'Laввв1221',
        description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
      },
      {
        id: 6,
        tabId: 2,
        imageUrl,
        title: 'Lagoыввв221',
        description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
      },
    ].reverse()
  );

  // const filterById = (id) => projects.filter((project) => project.tabId === id);

  const tabs = reactive([
    {
      id: 1,
      isActive: true,
      title: 'Вёрстка',
      content: [
        {
          id: 1,
          imageUrl,
          title: 'Lagoona',
          description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
        {
          id: 2,
          imageUrl,
          title: 'Lagoona2',
          description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
        {
          id: 3,
          imageUrl,
          title: 'Lagoona3',
          description: `Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
        {
          id: 4,
          imageUrl,
          title: 'Lagoona31221',
          description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
        {
          id: 10,
          imageUrl,
          title: 'Lagoona31221',
          description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
        {
          id: 11,
          imageUrl,
          title: 'Lagoona31221',
          description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
        {
          id: 12,
          imageUrl,
          title: 'Lagoona31221',
          description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
      ],
    },
    {
      id: 2,
      isActive: false,
      title: 'JavaScript',
      content: [
        {
          id: 5,
          imageUrl,
          title: 'Laввв1221',
          description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
        {
          id: 6,
          imageUrl,
          title: 'Lagoыввв221',
          description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
      ],
    },
    {
      id: 3,
      isActive: false,
      title: 'Vue.js',
      content: [
        {
          id: 7,
          imageUrl,
          title: 'Lagoona31221',
          description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
      ],
    },
    {
      id: 4,
      isActive: false,
      title: 'Laravel',
      content: [
        {
          id: 8,
          imageUrl,
          title: 'Lagoona31221',
          description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
        {
          id: 9,
          imageUrl,
          title: 'Laввв1221',
          description: `122Учебный проект. Практическое задание курса
          "Frontend-разработчик" от
          <a target="_blank" href="https://skillbox.ru" class="link"
            >Skillbox</a
          >`,
        },
      ],
    },
  ]);

  // function getActiveProjects(tabId = 1) {
  //   // console.log('projects', projects);
  //   const ddd = projects.filter((project) => project.tabId == tabId);
  //   // console.log('ddd', ddd);

  //   return ddd;
  // }

  return { tabs, projects };
});
