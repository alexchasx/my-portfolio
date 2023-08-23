<script setup>
import { useContactsStore } from '@/stores/contacts';
import { storeToRefs } from 'pinia';

const contactsStore = useContactsStore();
const { table } = storeToRefs(contactsStore);
</script>

<template>
  <section class="contacts">
    <div class="container contacts__container">
      <h1 class="contacts__title gradient-text uppercase">Контакты</h1>

      <div class="contacts__table table">
        <div
          class="contacts__text gradient-text table__row"
          v-for="item in table"
          :key="item.col1"
        >
          <div class="table__col table__col--1" v-html="item.col1"></div>
          <div class="table__col table__col--2" v-html="item.col2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/contacts-view.scss';
</style>
