<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ParallaxStars from '@/components/ParallaxStars.vue';
</script>

<template>
  <div class="site-container">
    <parallax-stars />

    <header-component />

    <main>
      <router-view />
    </main>
  </div>
</template>
