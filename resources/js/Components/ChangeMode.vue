<template>
       <div class="fixed top-1/4 -right-2 z-50">
            <span class="relative inline-block rotate-90">
                <input
                    type="checkbox"
                    class="checkbox opacity-0 absolute"
                    id="chk"
                    @click="toggleDarkMode"
                    :checked="isDarkMode"
                />
                <label
                    class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
                    for="chk"
                >
                    <i class="uil uil-moon text-[20px] text-yellow-500"></i>
                    <i class="uil uil-sun text-[20px] text-yellow-500"></i>
                    <span
                        class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"
                    ></span>
                </label>
            </span>
        </div>
</template>

<script setup>
import { computed } from 'vue';
import { useDarkModeStore } from '../store/darkMode.js';

const store = useDarkModeStore();
const isDarkMode = computed(() => store.isDarkMode);

function toggleDarkMode() {
  store.toggleDarkMode();
  document.documentElement.classList.toggle('dark', isDarkMode.value);
}

</script>
<style>

</style>