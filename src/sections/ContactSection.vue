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
  <section id="contact" class="py-20 bg-surface-light dark:bg-surface-dark scroll-mt-20">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100">
          Get in Touch
        </h2>
        <p class="text-center text-slate-600 dark:text-slate-400 mb-12">
          Have a project in mind? Let's talk about how we can help bring your ideas to life.
        </p>

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

        <!-- Contact Form -->
        <form ref="formRef" @submit="submit" class="space-y-6">
          <!-- Honeypot for spam protection -->
          <input
            type="text"
            name="company"
            class="hidden"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
          />

          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
              Name <span class="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
              Email <span class="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
              Message <span class="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <!-- Privacy Notice -->
          <p class="text-xs text-slate-500 dark:text-slate-400">
            We only use your information to respond to your message. We don't sell or share your details with third parties. 
            By submitting, you consent to this processing.
          </p>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="status === 'sending'"
            class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-pine-500 hover:bg-pine-600 disabled:bg-pine-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-pine-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
          >
            <i v-if="status === 'idle' || status === 'error'" class="far fa-paper-plane"></i>
            <i v-else-if="status === 'sending'" class="fas fa-spinner fa-spin"></i>
            <i v-else-if="status === 'sent'" class="fas fa-check"></i>

            <span v-if="status === 'idle' || status === 'error'">Send Message</span>
            <span v-else-if="status === 'sending'">Sending...</span>
            <span v-else-if="status === 'sent'">Sent!</span>
          </button>

          <!-- Mailto Fallback -->
          <p class="text-center text-sm text-slate-600 dark:text-slate-400">
            Or email us directly at 
            <a
              :href="`mailto:${siteData.email}`"
              class="text-pine-600 dark:text-pine-400 hover:underline font-medium"
            >
              {{ siteData.email }}
            </a>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
