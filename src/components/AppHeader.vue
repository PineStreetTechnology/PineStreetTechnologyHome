<script setup lang="ts">
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

function closeMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-40 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
    <nav class="container mx-auto px-4 py-4" aria-label="Main navigation">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center group">
          <img src="/pst-logo-2-rectangle.png" alt="Pine Street Technology" class="h-14 md:h-20 transition-all group-hover:brightness-110 group-hover:scale-105" />
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-6">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-slate-700 dark:text-slate-300 hover:text-pine-500 dark:hover:text-pine-400 font-medium transition-colors"
          >
            {{ link.label }}
          </a>
          <ThemeToggle />
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="mobileMenuOpen"
          >
            <i v-if="!mobileMenuOpen" class="fas fa-bars text-xl"></i>
            <i v-else class="fas fa-times text-xl"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden pt-4 pb-2 border-t border-slate-200 dark:border-slate-700 mt-4">
          <div class="flex flex-col gap-2">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              @click="closeMenu"
              class="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium transition-colors"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>
