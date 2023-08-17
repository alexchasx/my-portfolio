<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ParallaxStars from '@/components/ParallaxStars.vue';
</script>

<template>
  <parallax-stars />

  <div class="site-container">
    <header-component />

    <main>
      <router-view />
    </main>
  </div>
</template>
