<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ParallaxStars from '@/components/ParallaxStars.vue';
import { ref } from 'vue';
import IconSpaceShip from '@/components/icons/IconSpaceShip.vue';

const cursor = ref(null);
const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  console.log('mouseY', mouseY);
  console.log('mouseX', mouseX);

  const cursorStyle = cursor.value.style;

  if (mouseY > 76) {
    cursorStyle.display = 'none';
  } else {
    cursorStyle.display = 'block';
  }
  cursorStyle.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};
</script>

<template>
  <parallax-stars />

  <div class="site-container" @mousemove="moveCursor">
    <header-component />

    <main>
      <router-view />
    </main>
  </div>

  <!-- TODO: custom cursor? -->
  <div class="custom-cursor" ref="cursor">
    <IconSpaceShip />
  </div>
</template>
