import { defineStore } from 'pinia';
import { reactive } from 'vue';
import diplomFrontend from '@/assets/files/Diplom-Frontend-Chasovnikov.pdf';

export const useExperienceStore = defineStore('experience', () => {
  const works = reactive(
    [
      {
        id: 1,
        isOpen: false,
        timeInterval: 'Июнь 2017 — февраль 2018 (8 месяцев)',
        position: 'PHP-developer',
        company: ' в веб-студии "Dymov.TECH" (Fingineers)',
        companyLink: 'https://fingineers.ru/',
        description: `Участие в разработке серверной части приложения
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.teamkraft.net">
            Teamkraft
          </a>`,
      },
      {
        id: 2,
        isOpen: false,
        timeInterval: 'Февраль 2018 — август 2019 (1 год 7 месяцев)',
        position: 'Программист PHP (и JS по факту)',
        company: ' в "ООО ОФИСМАГ"',
        companyLink: 'https://www.officemag.ru/',
        description: `Интеграция вёрстки, создание и правка функционала на PHP и JS,
          составление SQL-запросов для выгрузки данных из БД`,
      },
      {
        id: 3,
        isOpen: true,
        timeInterval: 'Декабрь 2022 — август 2023 (8 месяцев)',
        position: 'Обучающийся',
        company: ' в "Skillbox"',
        companyLink: 'https://skillbox.ru/',
        description: `Прохождение курса "Frontend-разработчик".
          <br>
          <br>
          <a class="btn-reset btn download-link"
            href="${diplomFrontend}" download>Скачать диплом</a>`,
      },
    ].reverse()
  );

  function toggleWork(currentWork) {
    currentWork.isOpen = !currentWork.isOpen;
    works.forEach((work) => {
      if (work.id !== currentWork.id) {
        work.isOpen = false;
      }
    });
  }

  return { works, toggleWork };
});
