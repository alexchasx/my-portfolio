import { defineStore } from 'pinia';
import { shallowReactive } from 'vue';
import resumePdf from '@/assets/files/Resume-Chasovnikov.pdf';
import diplomFrontend from '@/assets/files/Diplom-Frontend-Chasovnikov.pdf';

// const TEL = '8 (951) 878-52-89';
const EMAIL = 'a.s.chasovnikov@yandex.ru';
const TELEGRAM = 'https://t.me/a_chasovnikov';
const GIT_HUB = 'https://github.com/alexchasx';
// const HH_LINK = 'https://hh.ru/resume/f84687adff050670210039ed1f4f4a33624241';

export const useContactsStore = defineStore('contacts', () => {
  const table = shallowReactive([
    // {
    //   col1: 'Телефон:',
    //   col2: `<a target="_blank" class="link link-md"
    //     href="tel:${TEL}">${TEL}</a>`,
    // },
    {
      col1: 'Email:',
      col2: `<a target="_blank" class="link link-md"
        href="mailto:${EMAIL}">${EMAIL}</a>`,
    },
    {
      col1: 'Telegram:',
      col2: `<a target="_blank" class="link link-md"
        href="${TELEGRAM}">@a_chasovnikov</a>`,
    },
    {
      col1: 'GitHub:',
      col2: `<a target="_blank" class="link link-md"
        href="${GIT_HUB}">alexchasx</a>`,
    },
    {
      col1: 'Резюме (pdf):',
      col2: `<a target="_blank" class="link link-md"
        href="${resumePdf}" download>Скачать</a>`,
    },
    {
      col1: 'Диплом Frontend-разработчика:',
      col2: `<a target="_blank" class="link link-md"
        href="${diplomFrontend}" download>Скачать</a>`,
    },
    // {
    //   col1: 'На hh.ru:',
    //   col2: `<a target="_blank" class="link link-md"
    //     href="${HH_LINK}">Перейти</a>`,
    // },
  ]);

  return { table };
});
