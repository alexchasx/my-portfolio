<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ParallaxStars from '@/components/ParallaxStars';

export default {
  components: {
    HeaderComponent,
    ParallaxStars,
  },
};
</script>

<template>
  <header-component />

  <parallax-stars />

  <main><router-view /></main>
</template>

