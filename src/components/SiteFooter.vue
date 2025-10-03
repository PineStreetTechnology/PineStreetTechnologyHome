<script setup lang="ts">
import siteData from '../content/site.json'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-700 py-8">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-3 gap-6 mb-6">
          <!-- Brand -->
          <div>
            <div class="mb-3">
              <img src="/pst-logo-2-rectangle.png" alt="Pine Street Technology" class="h-8" />
            </div>
            <p class="text-slate-600 dark:text-slate-400 text-sm max-w-xs">
              {{ siteData.tagline }}
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold mb-3 text-slate-900 dark:text-slate-100 text-sm">Quick Links</h3>
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
            <h3 class="font-semibold mb-3 text-slate-900 dark:text-slate-100 text-sm">Connect</h3>
            <div class="flex gap-3 mb-3">
              <a
                v-if="siteData.socials.github"
                :href="siteData.socials.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-600 dark:text-slate-400 hover:text-pine-500 dark:hover:text-pine-400 transition-colors "
                aria-label="GitHub"
              >
                <i class="fab fa-github"></i> <span class="text-md text-slate-600 dark:text-slate-400">GitHub</span>
              </a>
              <a
                v-if="siteData.socials.linkedin"
                :href="siteData.socials.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-600 dark:text-slate-400 hover:text-pine-500 dark:hover:text-pine-400 transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin"></i> <span>LinkedIn</span>
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
        <div class="pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
          <p class="text-slate-600 dark:text-slate-400 text-sm">
            &copy; {{ currentYear }} Pine Street Technology. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
