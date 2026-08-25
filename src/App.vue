<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ParallaxStars from '@/components/ParallaxStars.vue';
</script>

<template>
  <div class="site-container">
    <a class="skip-link" href="#main">Перейти к содержимому</a>

    <parallax-stars />

    <header-component />

    <main id="main" tabindex="-1">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <div class="container footer__container">
        <span class="copyright">© 2023 - {{ new Date().getFullYear() }} Александр Часовников</span>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active {
  animation: fadeIn 0.4s;
}

.fade-leave-active {
  animation: fadeOut 0.4s;
}

.footer {
  margin-top: auto;
  padding-top: 24px;
  padding-bottom: 24px;
}

.copyright {
  font-size: 16px;
  color: #fff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100px);
  }
}
</style>
