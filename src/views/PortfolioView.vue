<script setup>
import IconLink from '@/components/icons/IconLink.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import { usePortfolioStore } from '@/stores/portfolio';
import { storeToRefs } from 'pinia';
import { ref, reactive } from 'vue';

const portfolioStore = usePortfolioStore();
const { tabs } = storeToRefs(portfolioStore);

const isActivatedTabId = ref(1);
const activeProjects = portfolioStore.getActiveProjects(isActivatedTabId.value);

function activateTab(tabId) {
  isActivatedTabId.value = tabId;
  activeProjects.value = ref(portfolioStore.getActiveProjects(tabId));
}

console.log('activeProjects', activeProjects);

// function getActiveProjects(tabId = 1) {
//   // return portfolioStore.getActiveProjects(tabId);
//   activeProjects.value = portfolioStore.getActiveProjects(tabId);
// }
</script>

<template>
  <section class="portfolio">
    <div class="container portfolio__container">
      <h1 class="section-title portfolio__title typewriter">Portfolio</h1>

      <div class="portfolio__tabs">
        <button
          class="btn-reset btn btn-tab"
          :class="{ 'btn-active': tab.id === isActivatedTabId }"
          v-for="tab in tabs"
          :key="tab.id"
          @click="activateTab(tab.id)"
        >
          {{ tab.title }}
        </button>
      </div>

      <div class="portfolio__content">
        <TransitionGroup name="cards">
          <template v-for="project in activeProjects" :key="project.id">
            <article class="portfolio__item card">
              <div class="card__front">
                <img
                  class="card__img"
                  :src="project.imageUrl"
                  :alt="project.title"
                />
              </div>

              <div class="card__back">
                <div class="card__content">
                  <h2 class="card__title">Проект "{{ project.title }}"</h2>

                  <p class="card__desc" v-html="project.description"></p>

                  <div class="card__icons">
                    <IconLink />
                    <IconGitHub />
                  </div>
                </div>
              </div>
            </article>
          </template>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/portfolio-view.scss';
</style>
