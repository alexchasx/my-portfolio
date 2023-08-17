<script setup>
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

const table = [
  { col1: 'Full name:', col2: 'Chasovnikov Alexander' },
  { col1: 'Birthday:', col2: 'December 24, 1985' },
  { col1: 'Residence:', col2: 'Russia, Voronezh Region' },
  { col1: 'Motivation:', col2: 'High' },
];

const frontEndSkills = [
  { label: 'Vue', component: IconVue },
  { label: 'JavaScript', component: IconJS },
  { label: 'HTML5', component: IconHTML5 },
  { label: 'CSS3', component: IconCSS3 },
  { label: 'Sass', component: IconSCSS },
  { label: 'Bootstrap', component: IconBootstrap },
  { label: 'JQuery', component: IconJQuery },
  { label: 'Jest', component: IconJest },
];

const backEndSkills = [
  { label: 'PHP', component: IconPHP },
  { label: 'Laravel', component: IconLaravel },
  { label: 'MySQL', component: IconMySQL },
  { label: 'Swagger', component: IconSwagger },
  { label: 'Nginx', component: IconNginx },
  { label: 'Apache', component: IconApache },
];
</script>

<template>
  <section class="about">
    <div class="about__container">
      <h1 class="about__title">
        <div class="about__text gradient-text uppercase typewriter">
          FrontEnd/Fullstack
        </div>
        <div class="about__text gradient-text uppercase">
          Developer detected
        </div>
      </h1>

      <div class="about__table table">
        <div
          class="about__text gradient-text table__row"
          v-for="item in table"
          :key="item.col1"
        >
          <div class="table__col--1">{{ item.col1 }}</div>
          <div class="table__col--2">{{ item.col2 }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="skills">
    <div class="skills__container">
      <h2 class="skills__title gradient-text uppercase">Skills</h2>
      <ul class="list-reset skills__list">
        <li
          class="skills__item"
          v-for="skill in frontEndSkills"
          :key="skill.label"
        >
          <component :is="skill.component"></component>
          <div class="skills__label gradient-text">{{ skill.label }}</div>
        </li>
      </ul>

      <ul class="list-reset skills__list">
        <li
          class="skills__item"
          v-for="skill in backEndSkills"
          :key="skill.label"
        >
          <component :is="skill.component"></component>
          <div class="skills__label gradient-text">{{ skill.label }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/about-view.scss';
</style>
