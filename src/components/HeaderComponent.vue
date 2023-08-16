<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getMenu']),
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

      <nav class="nav" title="Главное меню">
        <button class="btn-reset nav__close" aria-label="Закрыть меню"></button>

        <ul class="list-reset nav__list">
          <li
            class="nav__item"
            v-for="item in getMenu"
            :key="item.route"
          >
            <router-link href="#" class="nav__link gradient-text" :to="{ name: item.route }">
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
@import '@/assets/styles/components/header-component.scss';
</style>
