<script>
import { menu } from '@/constants';

export default {
  computed: {
    menu() {
      return Object.values(menu);
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="burger-wrap">
        <button class="btn-reset burger" aria-label="Открыть меню">
          <span class="burger__line"></span>
          <span class="burger__line"></span>
          <span class="burger__line"></span>
        </button>
      </div>

      <nav class="nav header__nav" title="Главное меню">
        <button class="btn-reset nav__close" aria-label="Закрыть меню"></button>

        <ul class="list-reset nav__list">
          <li class="nav__item" v-for="item in menu" :key="item.route">
            {{ item.route }}
            <!-- <router-link
              href="#"
              class="nav__link"
              :to="{ name: item.route }"
              >{{ item.text }}</router-link
            > -->
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
