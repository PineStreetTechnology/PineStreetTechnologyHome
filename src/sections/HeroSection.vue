<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import siteData from '../content/site.json'

onMounted(() => {
  // Parallax effect on scroll
  const handleScroll = () => {
    const scrolled = window.scrollY
    const hero = document.querySelector('.hero-bg')
    if (hero) {
      ;(hero as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  
  // Mouse-following orb
  const mouseOrb = document.getElementById('mouse-orb')
  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let currentX = mouseX
  let currentY = mouseY
  
  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }
  
  window.addEventListener('mousemove', handleMouseMove)
  
  // Smooth follow animation
  const animateOrb = () => {
    const dx = mouseX - currentX
    const dy = mouseY - currentY
    
    currentX += dx * 0.1
    currentY += dy * 0.1
    
    if (mouseOrb) {
      mouseOrb.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`
    }
    
    requestAnimationFrame(animateOrb)
  }
  
  animateOrb()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', () => {})
  window.removeEventListener('scroll', () => {})
})
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-pine-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
    <!-- Smooth gradient background with animated orbs -->
    <div class="hero-bg absolute inset-0 overflow-hidden">
      <!-- Pine gradient orbs -->
      <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-pine-400/30 to-pine-600/20 dark:from-pine-500/20 dark:to-pine-700/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-pine-500/25 to-pine-400/15 dark:from-pine-600/15 dark:to-pine-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s; animation-duration: 4s;"></div>
      <div class="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-pine-300/20 to-transparent dark:from-pine-700/10 dark:to-transparent rounded-full blur-3xl animate-pulse" style="animation-delay: 0.8s; animation-duration: 5s;"></div>
      
      <!-- Teal/Cyan accent orbs -->
      <div class="absolute top-20 left-1/3 w-[350px] h-[350px] bg-gradient-to-br from-teal-400/20 to-cyan-500/15 dark:from-teal-600/15 dark:to-cyan-700/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s; animation-duration: 6s;"></div>
      <div class="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-gradient-to-tl from-cyan-400/18 to-teal-500/12 dark:from-cyan-600/12 dark:to-teal-700/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 3s; animation-duration: 5.5s;"></div>
      
      <!-- Emerald accent orbs -->
      <div class="absolute top-1/2 left-20 w-[280px] h-[280px] bg-gradient-to-br from-emerald-400/15 to-emerald-500/10 dark:from-emerald-600/10 dark:to-emerald-700/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s; animation-duration: 7s;"></div>
      <div class="absolute bottom-20 left-1/2 w-[320px] h-[320px] bg-gradient-to-tr from-emerald-400/18 to-emerald-500/12 dark:from-emerald-600/12 dark:to-emerald-700/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 2.5s; animation-duration: 6.5s;"></div>

      <!-- React accent orbs -->
      <div class="absolute top-1/2 left-20 w-[280px] h-[280px] bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 dark:from-yellow-600/10 dark:to-yellow-700/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s; animation-duration: 7s;"></div>
      <div class="absolute bottom-20 left-1/2 w-[320px] h-[320px] bg-gradient-to-tr from-yellow-400/20 to-yellow-500/20 dark:from-yellow-600/12 dark:to-yellow-700/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 2.5s; animation-duration: 6.5s;"></div>

      <!-- Python accent orbs -->
      <div class="absolute top-1/2 -left-20 w-[280px] h-[280px] bg-gradient-to-br from-blue-400/20 to-blue-500/20 dark:from-blue-600/10 dark:to-blue-700/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s; animation-duration: 7s;"></div>
      <div class="absolute bottom-20 -left-20 w-[320px] h-[320px] bg-gradient-to-tr from-blue-400/20 to-blue-500/20 dark:from-blue-600/12 dark:to-blue-700/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 2.5s; animation-duration: 6.5s;"></div>
    </div>

    <!-- Mouse-following interactive orb -->
    <div 
      id="mouse-orb" 
      class="absolute top-0 left-0 w-[200px] h-[200px] pointer-events-none z-0 transition-opacity duration-300"
    >
      <div class="relative w-full h-full">
        <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/25 via-yellow-400/15 to-yellow-500/15 dark:from-yellow-500/15 dark:via-yellow-600/15 dark:to-yellow-700/15 rounded-full blur-xl animate-pulse" style="animation-duration: 2s;"></div>
        <div class="absolute inset-4 bg-gradient-to-tr from-blue-400/15 to-blue-500/15 dark:from-blue-600/15 dark:to-blue-700/15 rounded-full blur-xl"></div>
      </div>
    </div>

    <!-- Subtle radial gradient overlay for depth -->
    <div class="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/50 dark:to-slate-950/50"></div>
    
    <!-- Soft spotlight effect from top -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-pine-100/30 to-transparent dark:from-pine-900/20 dark:to-transparent blur-3xl"></div>

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

        <!-- Tech stack badges with hover effects -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <span class="group px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-pine-500 dark:hover:border-pine-500 hover:bg-pine-50 dark:hover:bg-pine-900/30 transition-all cursor-default">
            <i class="fab fa-laravel text-red-500 mr-1"></i>Laravel
          </span>
          <span class="group px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-pine-500 dark:hover:border-pine-500 hover:bg-pine-50 dark:hover:bg-pine-900/30 transition-all cursor-default">
            <i class="fab fa-vuejs text-green-500 mr-1"></i>Vue
          </span>
          <span class="group px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-pine-500 dark:hover:border-pine-500 hover:bg-pine-50 dark:hover:bg-pine-900/30 transition-all cursor-default">
            <i class="fab fa-react text-blue-500 mr-1"></i>React
          </span>
          <span class="group px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-pine-500 dark:hover:border-pine-500 hover:bg-pine-50 dark:hover:bg-pine-900/30 transition-all cursor-default">
            <i class="fab fa-python text-blue-600 mr-1"></i>Python
          </span>
          <span class="group px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-pine-500 dark:hover:border-pine-500 hover:bg-pine-50 dark:hover:bg-pine-900/30 transition-all cursor-default">
            <i class="fas fa-wind text-cyan-500 mr-1"></i>Tailwind
          </span>
        </div>

        <!-- Social Links with better styling -->
        <div class="flex justify-center gap-4 mb-8">
          <a
            v-if="siteData.socials.github"
            :href="siteData.socials.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-12 h-12 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:bg-pine-500 dark:hover:bg-pine-600 hover:text-white transition-all hover:scale-110 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-pine-500/50"
            aria-label="GitHub"
          >
            <i class="fab fa-github text-xl"></i>
          </a>
          <a
            v-if="siteData.socials.linkedin"
            :href="siteData.socials.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-12 h-12 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:bg-pine-500 dark:hover:bg-pine-600 hover:text-white transition-all hover:scale-110 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-pine-500/50"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin text-xl"></i>
          </a>
        </div>
        
        <!-- Quick stats -->
        <div class="flex justify-center gap-8 text-center">
          <div class="group">
            <div class="text-2xl font-bold text-pine-600 dark:text-pine-400 group-hover:scale-110 transition-transform">5+</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">Projects</div>
          </div>
          <div class="w-px bg-slate-300 dark:bg-slate-700"></div>
          <div class="group">
            <div class="text-2xl font-bold text-pine-600 dark:text-pine-400 group-hover:scale-110 transition-transform">100%</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">Committed</div>
          </div>
          <div class="w-px bg-slate-300 dark:bg-slate-700"></div>
          <div class="group">
            <div class="text-2xl font-bold text-pine-600 dark:text-pine-400 group-hover:scale-110 transition-transform">Fast</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">Delivery</div>
          </div>
        </div>
      </div>
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
