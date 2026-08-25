<script setup>
import { ref, nextTick } from 'vue';

const { tabs } = defineProps({
  tabs: Array,
});

const selectedIndex = ref(0);

function activateTab(index) {
  selectedIndex.value = index;

  tabs.forEach((tab) => {
    tab.isActive = tab.id === tabs[index].id;
  });
}

function onKeydown(event) {
  const currentIndex = tabs.findIndex((tab) => tab.isActive);
  let nextIndex;

  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      nextIndex = (currentIndex + 1) % tabs.length;
      event.preventDefault();
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      event.preventDefault();
      break;
    case 'Home':
      nextIndex = 0;
      event.preventDefault();
      break;
    case 'End':
      nextIndex = tabs.length - 1;
      event.preventDefault();
      break;
    default:
      return;
  }

  activateTab(nextIndex);
  nextTick(() => {
    document.getElementById(`tab-${tabs[nextIndex].id}`)?.focus();
  });
}
</script>

<template>
  <div
    class="tabs"
    role="tablist"
    aria-label="Категории проектов"
    @keydown="onKeydown"
  >
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :id="`tab-${tab.id}`"
      type="button"
      role="tab"
      class="btn-reset btn tabs__btn"
      :class="{ 'btn-active': tab.isActive }"
      :aria-selected="tab.isActive"
      :aria-controls="`panel-${tab.id}`"
      :tabindex="tab.isActive ? 0 : -1"
      @click="activateTab(tabs.indexOf(tab))"
      @focus="!tab.isActive && activateTab(tabs.indexOf(tab))"
    >
      <component :is="tab.icon"></component>
      <span class="tabs__title">{{ tab.title }}</span>&nbsp; [{{
        tab.content.length
      }}]
    </button>
  </div>
  <slot></slot>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/tabs-component.scss';
</style>
