<script setup lang="ts">
import { ref } from 'vue'
import siteData from '../content/site.json'

const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const formRef = ref<HTMLFormElement | null>(null)
const errorMessage = ref('')

async function submit(e: Event) {
  e.preventDefault()
  if (!formRef.value) return

  status.value = 'sending'
  errorMessage.value = ''

  try {
    const res = await fetch(siteData.formspree, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(formRef.value)
    })

    if (res.ok) {
      status.value = 'sent'
      formRef.value.reset()
      // Reset status after 5 seconds
      setTimeout(() => {
        status.value = 'idle'
      }, 5000)
    } else {
      throw new Error('Send failed')
    }
  } catch (e) {
    status.value = 'error'
    errorMessage.value = 'Failed to send message. Please try again or email us directly.'
  }
}
</script>

<template>
  <section id="contact" class="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 scroll-mt-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-pine-700 dark:from-slate-100 dark:to-pine-400 bg-clip-text text-transparent">
            Let's Build Something
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-pine-500 to-pine-600 mx-auto rounded-full mb-3"></div>
          <p class="text-base text-slate-600 dark:text-slate-400">
            Have a project in mind? Let's make it happen.
          </p>
        </div>

        <!-- Success Message -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="status === 'sent'"
            class="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg text-green-800 dark:text-green-200"
          >
            <div class="flex items-center gap-2">
              <i class="fas fa-check-circle"></i>
              <span class="font-medium">Message sent successfully! We'll get back to you soon.</span>
            </div>
          </div>
        </Transition>

        <!-- Error Message -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="status === 'error'"
            class="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg text-red-800 dark:text-red-200"
          >
            <div class="flex items-start gap-2">
              <i class="fas fa-exclamation-circle mt-0.5"></i>
              <div>
                <p class="font-medium">{{ errorMessage }}</p>
                <a
                  :href="`mailto:${siteData.email}`"
                  class="underline hover:no-underline"
                >
                  {{ siteData.email }}
                </a>
              </div>
            </div>
          </div>
        </Transition>

        <!-- Contact Form Card -->
        <div class="relative">
          <!-- Decorative elements -->
          <div class="absolute -top-6 -right-6 w-32 h-32 bg-pine-500/10 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-pine-400/10 rounded-full blur-3xl"></div>
          
          <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 md:p-8">
            <form ref="formRef" @submit="submit" class="space-y-4">
              <!-- Honeypot for spam protection -->
              <input
                type="text"
                name="company"
                class="hidden"
                tabindex="-1"
                autocomplete="off"
                aria-hidden="true"
              />

              <div class="grid md:grid-cols-2 gap-4">
                <!-- Name -->
                <div>
                  <label for="name" class="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">
                    Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    class="w-full px-3 py-2 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-pine-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">
                    Email <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    class="w-full px-3 py-2 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-pine-500 transition-all"
                    placeholder="john@example.com"
                </div>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">
                  Message <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  class="w-full px-3 py-2 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-pine-500 transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <!-- Privacy Notice -->
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                We respect your privacy. Your information is only used to respond to your message.
              </p>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="status === 'sending'"
                class="group w-full relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-pine-600 hover:bg-pine-700 disabled:bg-pine-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-pine-500/50 focus:outline-none focus:ring-4 focus:ring-pine-500/50 overflow-hidden text-sm"
              >
                <span class="absolute inset-0 bg-gradient-to-r from-pine-500 to-pine-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <i v-if="status === 'idle' || status === 'error'" class="relative far fa-paper-plane"></i>
                <i v-else-if="status === 'sending'" class="relative fas fa-spinner fa-spin"></i>
                <i v-else-if="status === 'sent'" class="relative fas fa-check"></i>
                <span v-if="status === 'idle' || status === 'error'" class="relative">Send Message</span>
                <span v-else-if="status === 'sending'" class="relative">Sending...</span>
                <span v-else-if="status === 'sent'" class="relative">Sent!</span>
              </button>

              <!-- Mailto Fallback -->
              <p class="text-center text-sm text-slate-600 dark:text-slate-400">
                Or email us at 
                <a
                  :href="`mailto:${siteData.email}`"
                  class="text-pine-600 dark:text-pine-400 hover:text-pine-700 dark:hover:text-pine-300 font-semibold transition-colors"
                >
                  {{ siteData.email }}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
