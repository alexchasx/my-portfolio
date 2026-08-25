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
      <h1 class="section-title experience__title typewriter">
        Опыт/Образование
      </h1>

      <p>Коммерческий опыт веб‑разработки: 5 лет</p>

      <div class="timeline-container">
        <!-- TODO? -->
        <!-- <base-preloader class="btn-spinner" v-if="cartLoading" /> -->

        <ul class="list-reset experience__list" v-if="works.length > 0">
          <li class="work" v-for="work in works" :key="work.id">
            <div class="timeline-dot" :class="work.type + '-icon'"></div>

            <button
              type="button"
              class="work__time-interval gradient-text"
              :aria-expanded="work.isOpen"
              :aria-controls="'work-content-' + work.id"
              @click="toggleWork(work)"
            >
              <time>{{ work.timeInterval }}</time>
            </button>
            <div
              class="work__content"
              :class="{ open: work.isOpen }"
              :id="'work-content-' + work.id"
            >
              <h2 class="work__title">
                <span class="work__position">{{ work.position }}</span>
                <a
                  target="_blank"
                  :href="work.companyLink"
                  class="work__company"
                  >{{ work.company }}</a
                >
              </h2>

              <p class="work__desc" v-html="work.description"></p>
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

button {
  text-align: left;
  border: none;
}
</style>
