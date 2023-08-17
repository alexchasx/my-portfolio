<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ParallaxStars from '@/components/ParallaxStars.vue';
</script>

<template>
  <header-component />

  <parallax-stars />

  <main><router-view /></main>
</template>

