<script setup lang="ts">
import aboutData from '../content/about.json'
</script>

<template>
  <section id="about" class="py-20 bg-surface-light dark:bg-surface-dark scroll-mt-20">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
          About
        </h2>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="order-2 md:order-1">
            <div class="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                :src="aboutData.photoUrl"
                alt="Pine Street Technology"
                class="w-full h-full object-cover"
              />
              <!-- Tron-style overlay effect -->
              <div class="absolute inset-0 bg-gradient-to-tr from-pine-500/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <!-- Content -->
          <div class="order-1 md:order-2 space-y-6">
            <p class="text-2xl font-semibold text-pine-600 dark:text-pine-400">
              {{ aboutData.short }}
            </p>
            <p class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ aboutData.long }}
            </p>

            <!-- Tech Stack Pills -->
            <div class="flex flex-wrap gap-3 pt-4">
              <span
                v-for="tech in ['Laravel', 'Vue', 'Python', 'Tailwind', 'MySQL', 'AWS']"
                :key="tech"
                class="px-4 py-2 bg-pine-100 dark:bg-pine-900/30 text-pine-700 dark:text-pine-300 rounded-full text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
