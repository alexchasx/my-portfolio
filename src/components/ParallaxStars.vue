<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getVisibleStars']),
  },

  methods: {
    ...mapActions(['toggleStars']),
  },
};
</script>

<template>
  <template v-if="getVisibleStars">
    <div class="stars-small"></div>
    <div class="stars-medium"></div>
    <div class="stars-big"></div>
  </template>

  <button
    class="btn-reset btn stars-toggle-btn"
    :class="{ 'btn-active': !getVisibleStars }"
    @click="toggleStars"
  >
    Disable Stars
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/components/parallax-stars.scss';
</style>
