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
  <section id="projects" class="py-20 bg-bg-light dark:bg-bg-dark scroll-mt-20">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100">
          Projects
        </h2>
        <p class="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          A selection of software solutions we've built for real businesses.
        </p>

        <!-- Tech Filter -->
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          <button
            v-for="tech in allTechs"
            :key="tech"
            @click="selectedTech = tech"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all',
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
          tag="div"
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <article
            v-for="project in filteredProjects"
            :key="project.title"
            class="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
          >
            <!-- Project Image -->
            <div v-if="project.image" class="aspect-video bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                {{ project.title }}
              </h3>
              <p class="text-slate-600 dark:text-slate-400 mb-4">
                {{ project.blurb }}
              </p>

              <!-- Tech Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-2 py-1 bg-pine-100 dark:bg-pine-900/30 text-pine-700 dark:text-pine-300 rounded text-xs font-medium"
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
                  class="inline-flex items-center gap-2 text-pine-600 dark:text-pine-400 hover:text-pine-700 dark:hover:text-pine-300 font-medium transition-colors"
                >
                  <i class="fas fa-external-link-alt"></i>
                  <span>Live Site</span>
                </a>
                <a
                  v-if="project.repoUrl"
                  :href="project.repoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-colors"
                >
                  <i class="fab fa-github"></i>
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
