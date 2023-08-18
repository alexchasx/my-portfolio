<script setup>
import { useExperienceStore } from '@/stores/experience';
import { storeToRefs } from 'pinia';

const experienceStore = useExperienceStore();
const { works } = storeToRefs(experienceStore);

function toggleWork(work) {
  experienceStore.toggleWork(work);
}
</script>

<template>
  <section class="experience">
    <div class="container experience__container">
      <h1 class="section-title experience__title typewriter">Experience</h1>

      <div class="timeline-container">
        <!-- <base-preloader class="btn-spinner" v-if="cartLoading" /> -->

        <ul class="list-reset experience__list" v-if="works.length > 0">
          <li
            class="work"
            v-for="work in works"
            :key="work.id"
            @click="toggleWork(work)"
          >
            <div class="timeline-dot"></div>

            <time class="work__time-interval">{{ work.timeInterval }}</time>
            <div class="work__content" :class="{ open: work.isOpen }">
              <h3 class="work__title">
                <span class="gradient-text">{{ work.position }}</span>
                <span>{{ work.company }}</span>
              </h3>

              <p class="work__desc">{{ work.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/experience-view.scss';
</style>
