<script setup lang="ts">
import aboutData from '../content/about.json'
</script>

<template>
  <section id="about" class="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 scroll-mt-20">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-pine-700 dark:from-slate-100 dark:to-pine-400 bg-clip-text text-transparent">
            About Us
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-pine-500 to-pine-600 mx-auto rounded-full"></div>
        </div>

        <!-- Content Card -->
        <div class="relative">
          <!-- Decorative elements -->
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-pine-500/10 rounded-full blur-2xl"></div>
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-pine-400/10 rounded-full blur-2xl"></div>
          
          <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 md:p-8">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <!-- Visual Element -->
              <div class="order-2 md:order-1">
                <div class="relative">
                  <!-- Code-style decoration -->
                  <div class="bg-gradient-to-br from-pine-500/10 to-pine-600/10 dark:from-pine-500/20 dark:to-pine-600/20 rounded-2xl p-8 border border-pine-200 dark:border-pine-800">
                    <div class="space-y-4">
                      <div class="flex items-center gap-3">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div class="font-mono text-sm space-y-2 text-slate-700 dark:text-slate-300">
                        <div class="flex gap-2">
                          <span class="text-pine-600 dark:text-pine-400">const</span>
                          <span>approach = {</span>
                        </div>
                        <div class="pl-4 space-y-1">
                          <div><span class="text-pine-600 dark:text-pine-400">architecture:</span> 'clean',</div>
                          <div><span class="text-pine-600 dark:text-pine-400">execution:</span> 'rapid',</div>
                          <div><span class="text-pine-600 dark:text-pine-400">focus:</span> 'outcomes',</div>
                          <div><span class="text-pine-600 dark:text-pine-400">delivery:</span> 'fast'</div>
                        </div>
                        <div>};</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Floating tech icons -->
                  <div class="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 animate-bounce" style="animation-duration: 3s;">
                    <i class="fab fa-laravel text-2xl text-red-500"></i>
                  </div>
                  <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 animate-bounce" style="animation-duration: 2.5s; animation-delay: 0.5s;">
                    <i class="fab fa-vuejs text-2xl text-green-500"></i>
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="order-1 md:order-2 space-y-6">
                <p class="text-xl md:text-2xl font-bold text-pine-600 dark:text-pine-400 leading-snug">
                  {{ aboutData.short }}
                </p>
                <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {{ aboutData.long }}
                </p>

                <!-- Stats -->
                <div class="grid grid-cols-3 gap-3 pt-4">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-pine-600 dark:text-pine-400">5+</div>
                    <div class="text-xs text-slate-600 dark:text-slate-400">Projects</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-pine-600 dark:text-pine-400">Fast</div>
                    <div class="text-xs text-slate-600 dark:text-slate-400">Delivery</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-pine-600 dark:text-pine-400">100%</div>
                    <div class="text-xs text-slate-600 dark:text-slate-400">Committed</div>
                  </div>
                </div>

                <!-- Tech Stack Pills -->
                <div class="flex flex-wrap gap-1.5 pt-3">
                  <span
                    v-for="tech in ['Laravel', 'Vue', 'Python', 'Tailwind', 'MySQL', 'React']"
                    :key="tech"
                    class="px-2.5 py-1 bg-pine-50 dark:bg-pine-900/30 text-pine-700 dark:text-pine-300 rounded-lg text-xs font-medium border border-pine-200 dark:border-pine-800 hover:scale-105 transition-transform"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
