import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pine: {
          50: '#eef6f0',
          100: '#d8eadd',
          200: '#b4d3bd',
          300: '#8fbb9d',
          400: '#64a07a',
          500: '#2f6d3a',
          600: '#285c32',
          700: '#214c2a',
          800: '#1a3d22',
          900: '#142f1a'
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1E293B'
        },
        bg: {
          light: '#F8FAF8',
          dark: '#0F172A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      }
    }
  },
  plugins: [],
} satisfies Config
