/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        primary: {
          DEFAULT: '#4D9CFF',
          light: '#7AB7FF',
          dark: '#2D3B4E',
        },
        light: {
          DEFAULT: '#FFFFFF',
          darker: '#F5F7FA',
        },
        dark: {
          DEFAULT: '#1B2737',
          darker: '#141E2C',
        },
      },
    },
  },
  plugins: [],
};