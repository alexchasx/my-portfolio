import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useCommonStore = defineStore('common', () => {
  const isDisabledStars = ref(false);
  const menu = reactive([
    { route: 'about', text: 'About' },
    { route: 'experience', text: 'Experience' },
    // { route: 'skills', text: 'Skills' },
    { route: 'portfolio', text: 'Portfolio' },
    { route: 'contacts', text: 'Contacts' },
  ]);

  const toggleStars = () => (isDisabledStars.value = !isDisabledStars.value);

  return { isDisabledStars, menu, toggleStars };
});
