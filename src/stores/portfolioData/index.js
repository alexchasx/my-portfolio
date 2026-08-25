import { markRaw } from 'vue';

import IconHTML5 from '@/components/icons/IconHTML5.vue';
import IconJS from '@/components/icons/IconJS.vue';
import IconVue from '@/components/icons/IconVue.vue';
// import IconLaravel from '@/components/icons/IconLaravel.vue';
import IconPHP from '@/components/icons/IconPHP.vue';

import { webLayoutProjects } from './webLayoutsProjects';
import { javascriptProjects } from './javascriptProjects';
import { vueProjects } from './vueProjects';
// import { laravelProjects } from './laravelProjects';
import { phpProjects } from './phpProjects';

import { JAVASCRIPT, PHP, VUE_JS, WEB_LAYOUTS } from './constants';

export const portfolioProjects = [
  ...webLayoutProjects,
  ...javascriptProjects,
  ...vueProjects,
  ...phpProjects,
];

export const portfolioTabs = [
  {
    id: PHP,
    isActive: true, // по умолчанию активная вкладка
    title: 'PHP',
    icon: markRaw(IconPHP),
    content: null,
  },
  {
    id: VUE_JS,
    isActive: false,
    title: 'Vue.js',
    icon: markRaw(IconVue),
    content: null,
  },
  {
    id: JAVASCRIPT,
    isActive: false,
    title: 'JavaScript',
    icon: markRaw(IconJS),
    content: null,
  },
  {
    id: WEB_LAYOUTS,
    isActive: false,
    title: 'Вёрстка',
    icon: markRaw(IconHTML5),
    content: null,
  },
];
