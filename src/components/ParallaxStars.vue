<script setup>
import { useCommonStore } from '@/stores/common';
import { storeToRefs } from 'pinia';

const commonStore = useCommonStore();
const { isDisabledStars } = storeToRefs(commonStore);
const toggleStars = commonStore.toggleStars;
</script>

<template>
  <template v-if="!isDisabledStars">
    <div class="stars stars-small"></div>
    <div class="stars stars-medium"></div>
    <div class="stars stars-big"></div>
  </template>

  <button
    class="btn-reset btn stars-toggle-btn"
    :class="{ 'btn-active': isDisabledStars }"
    @click="toggleStars"
  >
    Disable Stars
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/parallax-stars.scss';
</style>
