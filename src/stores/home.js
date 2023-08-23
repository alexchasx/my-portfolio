import { defineStore } from 'pinia';
import { shallowReactive } from 'vue';
import resumePdf from '@/assets/files/Resume-Chasovnikov.pdf';

import IconVue from '@/components/icons/IconVue.vue';
import IconJS from '@/components/icons/IconJS.vue';
import IconHTML5 from '@/components/icons/IconHTML5.vue';
import IconCSS3 from '@/components/icons/IconCSS3.vue';
import IconSCSS from '@/components/icons/IconSCSS.vue';
import IconBootstrap from '@/components/icons/IconBootstrap.vue';
import IconJQuery from '@/components/icons/IconJQuery.vue';
import IconJest from '@/components/icons/IconJest.vue';
import IconPHP from '@/components/icons/IconPHP.vue';
import IconLaravel from '@/components/icons/IconLaravel.vue';
import IconMySQL from '@/components/icons/IconMySQL.vue';
import IconSwagger from '@/components/icons/IconSwagger.vue';
import IconNginx from '@/components/icons/IconNginx.vue';
import IconApache from '@/components/icons/IconApache.vue';
import IconSQL from '@/components/icons/IconSQL.vue';


export const useHomeStore = defineStore('home', () => {
  const table = shallowReactive([
    { col1: 'Фамилия, имя:', col2: 'Часовников Александр' },
    { col1: 'День рождения:', col2: '24.12.1985' },
    { col1: 'Проживает:', col2: 'Россия, Острогожск' },
    { col1: 'Мотивация:', col2: 'Высокая' },
    {
      col1: 'Резюме (pdf):',
      col2: `<a class="link link-md"
        href="${resumePdf}" download>Скачать</a>`,
    },

    // TODO: translations?
    // { col1: 'Full name:', col2: 'Chasovnikov Alexander' },
    // { col1: 'Birthday:', col2: 'December 24, 1985' },
    // { col1: 'Residence:', col2: 'Russia, Voronezh Region' },
    // { col1: 'Motivation:', col2: 'High' },
  ]);

  const frontEndSkills = shallowReactive([
    { label: 'Vue', component: IconVue },
    { label: 'JavaScript', component: IconJS },
    { label: 'HTML5', component: IconHTML5 },
    { label: 'CSS3', component: IconCSS3 },
    { label: 'Sass', component: IconSCSS },
    { label: 'Bootstrap', component: IconBootstrap },
    { label: 'JQuery', component: IconJQuery },
    { label: 'Jest', component: IconJest },
  ]);

  const backEndSkills = shallowReactive([
    { label: 'PHP', component: IconPHP },
    { label: 'Laravel', component: IconLaravel },
    { label: 'SQL', component: IconSQL },
    { label: 'MySQL', component: IconMySQL },
    { label: 'Swagger', component: IconSwagger },
    { label: 'Nginx', component: IconNginx },
    { label: 'Apache', component: IconApache },
  ]);

  // TODO tools
  // const tools = [
  //   { label: 'Git', component: IconLaravel },
  //   { label: 'Docker', component: IconPHP },
  //   { label: 'Postman', component: IconLaravel },
  //   { label: 'Ubuntu', component: IconLaravel },
  // ];

  return { table, frontEndSkills, backEndSkills };
});
