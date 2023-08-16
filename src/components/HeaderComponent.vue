<script>
import { menu } from '@/constants';

export default {
  data() {
    return {
      menu,
    };
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

        <ul class="list-reset nav__list menu">
          <li
            class="nav__item menu__item"
            v-for="item in menu"
            :key="item.route"
          >
            <router-link href="#" class="nav__link" :to="{ name: item.route }">
              <button class="btn-reset btn menu__btn gradient-text">
                {{ item.text }}
              </button>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: absolute;
  z-index: 100;
  width: 100%;

  &__container {
    margin: auto;
  }

  .menu {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 1040px;
  }

  .router-link-exact-active > .btn {
    box-shadow: 1px 1px 25px 10px var(--color-ultramarine);
  }
}
</style>
