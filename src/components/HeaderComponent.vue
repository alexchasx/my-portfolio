<script setup>
import { useCommonStore } from '@/stores/common';
import { storeToRefs } from 'pinia';

const commonStore = useCommonStore();
const { menu } = storeToRefs(commonStore);
</script>

<template>
  <header class="header section-offset">
    <div class="container header__container">
      <div class="burger-wrap">
        <button class="btn-reset burger" aria-label="Открыть меню">
          <span class="burger__line"></span>
          <span class="burger__line"></span>
          <span class="burger__line"></span>
        </button>
      </div>

      <nav class="nav" title="Главное меню">
        <button class="btn-reset nav__close" aria-label="Закрыть меню"></button>

        <ul class="list-reset nav__list">
          <li class="nav__item" v-for="item in menu" :key="item.route">
            <router-link
              href="#"
              class="nav__link gradient-text uppercase"
              :to="{ name: item.route }"
            >
              {{ item.text }}
              <!-- <button class="btn-reset btn menu__btn gradient-text">
                {{ item.text }}
              </button> -->
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/header-component.scss';
</style>
