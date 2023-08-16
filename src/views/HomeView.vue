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
@import '@/assets/styles/components/home-view.scss';
</style>
