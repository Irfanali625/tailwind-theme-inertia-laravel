import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('dark', {
    id: 'darkMode',
    state: () => ({
      isDarkMode: false,
    }),
    actions: {
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
      },
    },
})