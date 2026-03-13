/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold:  { DEFAULT: '#C9A84C', light: '#E2C97E', dark: '#9E7A2A' },
        ebony: { DEFAULT: '#0E0B0F', soft: '#1A151E', mid: '#241D2A' },
        blush: { DEFAULT: '#D4A5A5', light: '#F0DADA' },
        cream: '#F8F3EE',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"Cairo"', 'sans-serif'],
      },
      animation: {
        fadeUp:   'fadeUp .8s ease forwards',
        shimmer:  'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '.55' },
        },
      },
    },
  },
  plugins: [],
}
