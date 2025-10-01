<script setup lang="ts">
import { ref, computed } from 'vue'
import projectsData from '../content/projects.json'

interface Project {
  title: string
  blurb: string
  liveUrl?: string
  repoUrl?: string
  tech: string[]
  image?: string
}

const projects = ref<Project[]>(projectsData)
const selectedTech = ref<string>('All')

// Get all unique tech tags
const allTechs = computed(() => {
  const techs = new Set<string>()
  projects.value.forEach(p => p.tech.forEach(t => techs.add(t)))
  return ['All', ...Array.from(techs).sort()]
})

// Filter projects by selected tech
const filteredProjects = computed(() => {
  if (selectedTech.value === 'All') return projects.value
  return projects.value.filter(p => p.tech.includes(selectedTech.value))
})
</script>

<template>
  <section id="projects" class="py-20 bg-slate-50 dark:bg-slate-900 scroll-mt-20">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-pine-700 dark:from-slate-100 dark:to-pine-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-pine-500 to-pine-600 mx-auto rounded-full mb-3"></div>
          <p class="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real software solutions delivering measurable impact for businesses.
          </p>
        </div>

        <!-- Tech Filter -->
        <div class="flex flex-wrap justify-center gap-2 mb-10">
          <button
            v-for="tech in allTechs"
            :key="tech"
            @click="selectedTech = tech"
            :class="[
              'px-3 py-1.5 rounded-lg font-medium transition-all text-sm',
              selectedTech === tech
                ? 'bg-pine-500 text-white shadow-lg'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
            ]"
          >
            {{ tech }}
          </button>
        </div>

        <!-- Projects Grid -->
        <TransitionGroup
          name="list"
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <article
            v-for="project in filteredProjects"
            :key="project.title"
            class="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
          >
            <!-- Gradient overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-pine-500/0 to-pine-600/0 group-hover:from-pine-500/5 group-hover:to-pine-600/10 transition-all duration-300 pointer-events-none z-10"></div>
            
            <!-- Project Image -->
            <div v-if="project.image" class="relative aspect-video bg-gradient-to-br from-pine-100 to-pine-200 dark:from-pine-900/20 dark:to-pine-800/20 overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <!-- Live badge -->
              <div v-if="project.liveUrl" class="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg">
                <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                LIVE
              </div>
            </div>

            <!-- Project Content -->
            <div class="relative p-5 z-20">
              <h3 class="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-pine-600 dark:group-hover:text-pine-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                {{ project.blurb }}
              </p>

              <!-- Tech Tags -->
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-2 py-0.5 bg-pine-50 dark:bg-pine-900/30 text-pine-700 dark:text-pine-300 rounded text-xs font-medium border border-pine-200 dark:border-pine-800"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex gap-3">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 bg-pine-600 hover:bg-pine-700 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <i class="fas fa-external-link-alt text-sm"></i>
                  <span>Visit Site</span>
                </a>
                <a
                  v-if="project.repoUrl"
                  :href="project.repoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 font-semibold rounded-lg transition-all hover:scale-105"
                >
                  <i class="fab fa-github text-sm"></i>
                  <span>Code</span>
                </a>
              </div>
            </div>
          </article>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.list-move {
  transition: transform 0.3s ease;
}
</style>
