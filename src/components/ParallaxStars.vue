<script setup>
import { useCommonStore } from '@/stores/common';
import { storeToRefs } from 'pinia';
import IconStarOff from '@/components/icons/IconStarOff.vue';

const commonStore = useCommonStore();
const { isDisabledStars } = storeToRefs(commonStore);
const toggleStars = commonStore.toggleStars;
</script>

<template>
  <div class="parallax-stars">
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
      <IconStarOff />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/parallax-stars.scss';

.parallax-stars {
  display: contents;
}
</style>

