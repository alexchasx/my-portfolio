<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ParallaxStars from '@/components/ParallaxStars.vue';
// import { ref } from 'vue';
// import IconSpaceShip from '@/components/icons/IconSpaceShip.vue';

// TODO: custom cursor?
// const cursor = ref(null);
// const moveCursor = (e) => {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
//   const cursorStyle = cursor.value.style;

//   if (mouseY > 76) {
//     cursorStyle.display = 'none';
//   } else {
//     cursorStyle.display = 'block';
//   }
//   cursorStyle.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
// };
</script>

<template>
  <div class="site-container">
    <parallax-stars />

    <header-component />
    <!-- <header-component @mousemove="moveCursor" /> -->

    <main>
      <router-view />
    </main>
  </div>

  <!-- TODO: custom cursor? -->
  <!-- <div class="custom-cursor" ref="cursor">
    <IconSpaceShip />
  </div> -->
</template>
