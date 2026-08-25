<script setup>
import { useCommonStore } from '@/stores/common';
import { storeToRefs } from 'pinia';
import { ref, nextTick } from 'vue';

const TABLET_BREAK_POINT = 768;
const commonStore = useCommonStore();
const { menu } = storeToRefs(commonStore);

const isMobileDevice = () => window.innerWidth < TABLET_BREAK_POINT;

let isOpenMenu = ref(true);
if (isMobileDevice()) {
  isOpenMenu.value = false;
}

const burgerBtn = ref(null);
const navEl = ref(null);

function openMenu() {
  if (isMobileDevice()) {
    isOpenMenu.value = !isOpenMenu.value;
  }
}

function closeMenu() {
  isOpenMenu.value = false;
}

async function handleMenuToggle() {
  const wasOpen = isOpenMenu.value;
  openMenu();

  if (isMobileDevice()) {
    if (!wasOpen) {
      // Меню открылось — переносим фокус на кнопку закрытия
      await nextTick();
      navEl.value?.querySelector('.nav__close')?.focus();
    } else {
      // Меню закрылось — возвращаем фокус на бургер
      burgerBtn.value?.focus();
    }
  }
}

function handleMenuClose() {
  if (!isMobileDevice() || !isOpenMenu.value) return;
  closeMenu();
  burgerBtn.value?.focus();
}
</script>

<template>
  <header class="header section-offset">
    <div class="container header__container">
      <div class="burger-wrap">
        <button
          ref="burgerBtn"
          class="btn-reset burger"
          :class="{ 'open-menu': isOpenMenu }"
          type="button"
          aria-label="Меню"
          :aria-expanded="isOpenMenu"
          aria-controls="main-menu"
          @click="handleMenuToggle"
        >
          <span
            class="burger__line"
            :class="{ 'open-menu': isOpenMenu }"
          ></span>
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <nav
          ref="navEl"
          id="main-menu"
          class="nav"
          aria-label="Главное меню"
          v-if="isOpenMenu"
          @keydown.esc="handleMenuClose"
        >
          <button
            class="btn-reset nav__close"
            type="button"
            aria-label="Закрыть меню"
            @click="handleMenuClose"
          ></button>

          <ul class="list-reset nav__list" @click="handleMenuClose">
            <li class="nav__item" v-for="item in menu" :key="item.route">
              <router-link
                class="nav__link gradient-text uppercase link"
                :to="{ name: item.route }"
              >
                {{ item.text }}
              </router-link>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/header-component.scss';
</style>
