import { defineStore } from 'pinia';
import { shallowReactive } from 'vue';
import resumePdf from '@/assets/files/Resume-Chasovnikov.pdf';
import diplomFrontend from '@/assets/files/Diplom-Frontend-Chasovnikov.pdf';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconTelegram from '@/components/icons/IconTelegram.vue';
import IconEmail from '@/components/icons/IconEmail.vue';
import IconPdf from '@/components/icons/IconPdf.vue';

export const useContactsStore = defineStore('contacts', () => {
  const contacts = shallowReactive([
    {
      title: 'alexchasx',
      icon: IconGitHub,
      href: 'https://github.com/alexchasx',
    },
    {
      title: '@a_chasovnikov',
      icon: IconTelegram,
      href: 'https://t.me/a_chasovnikov',
    },
    {
      title: 'a.s.chasovnikov@yandex.ru',
      icon: IconEmail,
      href: 'mailto:a.s.chasovnikov@yandex.ru',
    },
    {
      title: 'Скачать резюме',
      icon: IconPdf,
      href: resumePdf,
    },
    {
      title: 'Скачать диплом',
      icon: IconPdf,
      href: diplomFrontend,
    },
  ]);

  return { contacts };
});
