<script setup>
import { useAboutStore } from '@/stores/about';
import { storeToRefs } from 'pinia';

const aboutStore = useAboutStore();
const { table, frontEndSkills, backEndSkills } = storeToRefs(aboutStore);
</script>

<template>
  <section class="about section-offset">
    <div class="container about__container">
      <h1 lang="en" class="about__title gradient-text uppercase">
        FrontEnd/Fullstack
      </h1>

      <p lang="en" class="about__sub-title gradient-text uppercase typewriter">
        Developer detected
      </p>

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

  <hr>

  <section class="skills">
    <div class="container skills__container">
      <h2 class="section-title skills__title">Tech stack</h2>
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
