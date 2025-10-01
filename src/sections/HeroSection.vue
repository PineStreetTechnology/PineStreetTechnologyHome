<script setup lang="ts">
import { onMounted } from 'vue'
import siteData from '../content/site.json'

onMounted(() => {
  // Parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    const hero = document.querySelector('.hero-bg')
    if (hero) {
      ;(hero as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })
})
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-pine-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
    <!-- Animated gradient orbs -->
    <div class="hero-bg absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-20 w-96 h-96 bg-pine-500/20 dark:bg-pine-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-pine-400/20 dark:bg-pine-600/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pine-300/10 dark:bg-pine-700/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>

    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Logo with glow effect -->
        <div class="mb-12 flex justify-center">
          <div class="relative group">
            <div class="absolute inset-0 bg-pine-500/20 blur-2xl rounded-full group-hover:bg-pine-500/30 transition-all duration-500"></div>
            <img src="/pst-logo-1-square.png" alt="Pine Street Technology" class="relative h-32 md:h-40 w-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        <!-- Tagline with gradient text -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-center leading-tight">
          <span class="bg-gradient-to-r from-slate-900 via-pine-700 to-slate-900 dark:from-slate-100 dark:via-pine-400 dark:to-slate-100 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Build clean, ship fast
          </span>
          <br>
          <span class="text-pine-600 dark:text-pine-400">—from idea to impact.</span>
        </h1>

        <!-- Description with better typography -->
        <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          Modern engineering studio crafting <span class="text-pine-600 dark:text-pine-400 font-semibold">practical software</span> that ships fast and delivers real impact.
        </p>
        
        <!-- Key value props with icons -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div class="group relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-pine-500 dark:hover:border-pine-500 transition-all hover:scale-105 hover:shadow-xl">
            <div class="absolute inset-0 bg-gradient-to-br from-pine-500/0 to-pine-600/0 group-hover:from-pine-500/10 group-hover:to-pine-600/10 rounded-2xl transition-all"></div>
            <div class="relative">
              <div class="w-12 h-12 bg-pine-100 dark:bg-pine-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-rocket text-pine-600 dark:text-pine-400 text-xl"></i>
              </div>
              <h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Ship Fast</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400">Rapid development without compromising quality</p>
            </div>
          </div>
          
          <div class="group relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-pine-500 dark:hover:border-pine-500 transition-all hover:scale-105 hover:shadow-xl">
            <div class="absolute inset-0 bg-gradient-to-br from-pine-500/0 to-pine-600/0 group-hover:from-pine-500/10 group-hover:to-pine-600/10 rounded-2xl transition-all"></div>
            <div class="relative">
              <div class="w-12 h-12 bg-pine-100 dark:bg-pine-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-code text-pine-600 dark:text-pine-400 text-xl"></i>
              </div>
              <h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Clean Code</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400">Maintainable architecture built to last</p>
            </div>
          </div>
          
          <div class="group relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-pine-500 dark:hover:border-pine-500 transition-all hover:scale-105 hover:shadow-xl">
            <div class="absolute inset-0 bg-gradient-to-br from-pine-500/0 to-pine-600/0 group-hover:from-pine-500/10 group-hover:to-pine-600/10 rounded-2xl transition-all"></div>
            <div class="relative">
              <div class="w-12 h-12 bg-pine-100 dark:bg-pine-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-chart-line text-pine-600 dark:text-pine-400 text-xl"></i>
              </div>
              <h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Real Impact</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400">Solutions that drive measurable results</p>
            </div>
          </div>
        </div>

        <!-- CTA Buttons with enhanced styling -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#projects"
            class="group relative inline-flex items-center gap-3 px-8 py-4 bg-pine-600 hover:bg-pine-700 text-white font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pine-500/50 focus:outline-none focus:ring-4 focus:ring-pine-500/50 overflow-hidden"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-pine-500 to-pine-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span class="relative">View Projects</span>
            <i class="relative fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
          <a
            href="#contact"
            class="group inline-flex items-center gap-3 px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-xl border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-600"
          >
            <i class="far fa-envelope group-hover:rotate-12 transition-transform"></i>
            <span>Get in Touch</span>
          </a>
        </div>

        <!-- Tech stack badges -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <span class="px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Laravel</span>
          <span class="px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Vue</span>
          <span class="px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Python</span>
          <span class="px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Tailwind</span>
          <span class="px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">AWS</span>
        </div>

        <!-- Social Links with better styling -->
        <div class="flex justify-center gap-4">
          <a
            v-if="siteData.socials.github"
            :href="siteData.socials.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-12 h-12 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:bg-pine-500 dark:hover:bg-pine-600 hover:text-white transition-all hover:scale-110 border border-slate-200 dark:border-slate-700"
            aria-label="GitHub"
          >
            <i class="fab fa-github text-xl"></i>
          </a>
          <a
            v-if="siteData.socials.linkedin"
            :href="siteData.socials.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-12 h-12 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:bg-pine-500 dark:hover:bg-pine-600 hover:text-white transition-all hover:scale-110 border border-slate-200 dark:border-slate-700"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator with pulse -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Scroll</span>
      <i class="fas fa-chevron-down text-pine-500 dark:text-pine-400 text-xl"></i>
    </div>
  </section>
</template>

<style scoped>
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
}
</style>
