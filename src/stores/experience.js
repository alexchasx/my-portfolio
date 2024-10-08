import { defineStore } from 'pinia';
import { reactive } from 'vue';
import diplomFrontend from '@/assets/files/Diplom-Frontend-Chasovnikov.pdf';

const LEARNING = 'education';
const WORK = 'work';

export const useExperienceStore = defineStore('experience', () => {
  const works = reactive(
    [
      {
        id: 1,
        isOpen: false,
        type: LEARNING,
        timeInterval: 'Сентябрь 2003 — июль 2008 (5 лет)',
        position: 'Студент',
        company: ' в Воронежском государственном техническом университете',
        companyLink: 'https://cchgeu.ru/',
        description: `Получил высшее образование на факультете "Автоматика и
          электромеханика" по специальности "Электропривод и автоматика
          ПУ и ТК"`,
      },
      {
        id: 2,
        isOpen: false,
        type: WORK,
        timeInterval: 'Июнь 2017 — февраль 2018 (8 месяцев)',
        position: 'PHP Developer',
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
        id: 3,
        isOpen: false,
        type: WORK,
        timeInterval: 'Февраль 2018 — август 2019 (1 год 7 месяцев)',
        position: 'Программист PHP (и JS по факту)',
        company: ' в "ООО ОФИСМАГ"',
        companyLink: 'https://www.officemag.ru/',
        description: `Интеграция вёрстки, создание и правка функционала на PHP и JS,
          составление SQL-запросов для выгрузки данных из БД`,
      },
      {
        id: 4,
        isOpen: false,
        type: LEARNING,
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
      {
        id: 5,
        isOpen: true,
        type: LEARNING,
        timeInterval: 'Октябрь 2023 — ...',
        position: 'Веб-разработчик',
        company: ' в ООО "Элком"',
        companyLink: 'https://www.elcomspb.ru/',
        description: ``,
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
