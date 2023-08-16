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
  <parallax-stars />
  <header-component />


  <main><router-view /></main>
</template>

