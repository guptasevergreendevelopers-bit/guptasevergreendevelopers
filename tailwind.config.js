/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f4f6f2',
          100: '#e6ece2',
          200: '#cfdcc8',
          300: '#b0c5a6',
          400: '#8fa883',
          500: '#6e8d62',
          600: '#537048',
          700: '#405737',
          800: '#31432b',
          900: '#263421',
          950: '#141c12',
        },
        brown: {
          50: '#faf6f3',
          100: '#f3eae3',
          200: '#e7d5c7',
          300: '#d5baa6',
          400: '#bf997f',
          500: '#a87b5c',
          600: '#8e6144',
          700: '#724c35',
          800: '#5c3d2b',
          900: '#4b3224',
          950: '#231710',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        cinzel: ['Cinzel', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};