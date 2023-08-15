<script>
import ParallaxStars from '@/components/ParallaxStars';
import { menu } from '@/constants';

export default {
  components: {
    ParallaxStars,
  },

  data() {
    return {
      menu,
    };
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<template>
  <section class="hero">
    <parallax-stars />

    <div class="hero__content">
      <h1 class="hero__title">
        <div class="hero__text gradient-text uppercase typewriter">
          FrontEnd-Developer
        </div>
        <div class="hero__text gradient-text uppercase">Detected</div>
      </h1>

      <div class="hero__table table">
        <div class="hero__text gradient-text table__row">
          <div class="table__col--1">Full name:</div>
          <div class="table__col--2">Chasovnikov Alexander</div>
        </div>

        <div class="hero__text gradient-text table__row">
          <div class="table__col--1">Birthday:</div>
          <div class="table__col--2">December 24, 1985</div>
        </div>

        <div class="hero__text gradient-text table__row">
          <div class="table__col--1">Residence:</div>
          <div class="table__col--2">Russia, Voronezh Region</div>
        </div>

        <div class="hero__text gradient-text table__row">
          <div class="table__col--1">Motivation:</div>
          <div class="table__col--2">High</div>
        </div>
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
  </section>
</template>

<style lang="scss">
.hero {
  &__content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
  }

  &__title {
    margin-bottom: 42px;
    padding-left: 10px;
    font-weight: 300;
    font-size: 46px;
    letter-spacing: 5px;
    line-height: 1.2;
    text-align: center;
    color: #fff;
  }

  .table {
    margin-bottom: 42px;

    &__row {
      display: flex;
      flex-direction: row;
    }

    &__col {
      &--1 {
        min-width: 180px;
      }
    }
  }

  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 540px;
  }
}
</style>
