<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<template>
  <section class="hero">
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
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  &__content {
    margin-top: 150px;
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
}
</style>
