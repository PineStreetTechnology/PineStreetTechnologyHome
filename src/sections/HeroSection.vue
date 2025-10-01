<script setup lang="ts">
import siteData from '../content/site.json'
</script>

<template>
  <section class="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-bg-light to-slate-100 dark:from-bg-dark dark:to-slate-900">
    <!-- Decorative background pattern -->
    <div class="absolute inset-0 opacity-5 dark:opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Logo -->
        <div class="mb-8 flex justify-center">
          <img src="/logo.svg" alt="Pine Street Technology" class="h-24 md:h-32 w-auto" />
        </div>

        <!-- Tagline -->
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-slate-100 text-balance">
          {{ siteData.tagline }}
        </h1>

        <!-- Description -->
        <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 text-balance">
          {{ siteData.description }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 px-6 py-3 bg-pine-500 hover:bg-pine-600 text-white font-semibold rounded-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <span>View Projects</span>
            <i class="fas fa-arrow-right"></i>
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <i class="far fa-envelope"></i>
            <span>Get in Touch</span>
          </a>
        </div>

        <!-- Social Links -->
        <div class="mt-12 flex justify-center gap-6">
          <a
            v-if="siteData.socials.github"
            :href="siteData.socials.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-600 dark:text-slate-400 hover:text-pine-500 dark:hover:text-pine-400 transition-colors text-2xl"
            aria-label="GitHub"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            v-if="siteData.socials.linkedin"
            :href="siteData.socials.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-600 dark:text-slate-400 hover:text-pine-500 dark:hover:text-pine-400 transition-colors text-2xl"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <i class="fas fa-chevron-down text-slate-400 text-2xl"></i>
    </div>
  </section>
</template>
