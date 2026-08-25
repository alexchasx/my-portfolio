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
        timeInterval: 'Сентябрь 2003 — июль 2008 [УЧЁБА]',
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
        description: `Разработка серверной части приложения
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.teamkraft.net">
            Teamkraft
          </a> на базе фреймворка Laravel.
          Используемые технологии: PHP, Laravel, PostgreSQL, Swagger, REST API, Eloquent
          `,
      },
      {
        id: 3,
        isOpen: false,
        type: WORK,
        timeInterval: 'Февраль 2018 — август 2019 (1 год 7 месяцев)',
        position: 'Программист PHP',
        company: ' в "ООО ОФИСМАГ"',
        companyLink: 'https://www.officemag.ru/',
        description: `
        Доработка сайтов:
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.officemag.ru/">
            officemag.ru
          </a>,
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.samsonopt.ru/">
            samsonopt.ru
          </a>,
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.brauberg.com/">
            brauberg.com
          </a>,
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.laima.info/">
            laima.info/
          </a>,
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.sonnen.me/">
            sonnen.me/
          </a> и другие.
          <br>
        Используемые технологии: PHP, Laravel, 1C-Битрикс, MySQL, SQL, JavaScript, jQuery, HTML, CSS, unit-тесты`,
      },
      {
        id: 4,
        isOpen: false,
        type: LEARNING,
        timeInterval: 'Декабрь 2022 — август 2023 [УЧЁБА]',
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
        type: WORK,
        timeInterval: 'Октябрь 2023 — Июнь 2026 (2 года 9 месяцев)',
        position: 'Веб-разработчик',
        company: ' в ООО "Элком"',
        companyLink: 'https://www.elcomspb.ru/',
        description: `
        Доработка внутреннего портала
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://portal.elcomspb.ru/">
            portal.elcomspb.ru/
          </a> и основного сайта кампании
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.elcomspb.ru">
            elcomspb.ru
          </a>.
          <br>
        Технологии: PHP, Laravel, OpenCart, MySQL, PostgreSQL, VueJS2, JavaScript, HTML, CSS
        `,
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
