<script setup lang="ts">
import siteData from '../content/site.json'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-700 py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <!-- Brand -->
          <div>
            <div class="mb-4">
              <img src="/pst-logo-2-rectangle.png" alt="Pine Street Technology" class="h-10" />
            </div>
            <p class="text-slate-600 dark:text-slate-400 text-sm max-w-xs">
              {{ siteData.tagline }}
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold mb-4 text-slate-900 dark:text-slate-100">Quick Links</h3>
            <nav class="flex flex-col gap-2">
              <a href="#about" class="text-slate-600 dark:text-slate-400 hover:text-pine-500 dark:hover:text-pine-400 transition-colors text-sm">
                About
              </a>
              <a href="#projects" class="text-slate-600 dark:text-slate-400 hover:text-pine-500 dark:hover:text-pine-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" class="text-slate-600 dark:text-slate-400 hover:text-pine-500 dark:hover:text-pine-400 transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          <!-- Connect -->
          <div>
            <h3 class="font-semibold mb-4 text-slate-900 dark:text-slate-100">Connect</h3>
            <div class="flex gap-4 mb-4">
              <a
                v-if="siteData.socials.github"
                :href="siteData.socials.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-600 dark:text-slate-400 hover:text-pine-500 dark:hover:text-pine-400 transition-colors text-xl"
                aria-label="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                v-if="siteData.socials.linkedin"
                :href="siteData.socials.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-600 dark:text-slate-400 hover:text-pine-500 dark:hover:text-pine-400 transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <a
              :href="`mailto:${siteData.email}`"
              class="text-slate-600 dark:text-slate-400 hover:text-pine-500 dark:hover:text-pine-400 transition-colors text-sm inline-flex items-center gap-2"
            >
              <i class="far fa-envelope"></i>
              <span>{{ siteData.email }}</span>
            </a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p class="text-slate-600 dark:text-slate-400 text-sm">
            &copy; {{ currentYear }} Pine Street Technology. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
