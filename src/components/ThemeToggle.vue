<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true)

onMounted(() => {
  // Check localStorage or default to dark
  const stored = localStorage.getItem('theme')
  isDark.value = stored ? stored === 'dark' : true
  updateTheme()
})

function toggleTheme() {
  isDark.value = !isDark.value
  updateTheme()
}

function updateTheme() {
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pine-500"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <i v-if="isDark" class="fas fa-sun text-xl text-yellow-400"></i>
    <i v-else class="fas fa-moon text-xl text-slate-700"></i>
  </button>
</template>
