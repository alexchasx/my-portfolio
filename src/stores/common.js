import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

// export const useCommonStore = defineStore('common', {
//   state: () => ({
//     isDisabledStars: false,
//     menu: [
//       { route: 'home', text: 'Home' },
//       { route: 'skills', text: 'Skills' },
//       { route: 'portfolio', text: 'Portfolio' },
//       { route: 'contacts', text: 'Contacts' },
//     ],
//   }),

//   actions: {
//     toggleStars() {
//       this.isDisabledStars = !this.isDisabledStars;
//     },
//   },
// });

export const useCommonStore = defineStore('common', () => {
  const isDisabledStars = ref(false);
  const menu = reactive([
    { route: 'home', text: 'Home' },
    { route: 'skills', text: 'Skills' },
    { route: 'portfolio', text: 'Portfolio' },
    { route: 'contacts', text: 'Contacts' },
  ]);

  const toggleStars = () => (isDisabledStars = !isDisabledStars);

  return { isDisabledStars, menu, toggleStars };
});
