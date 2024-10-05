/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E1C27',
        secondary: '#4A5E69',
        accentLight: '#5271FF',
        accentDark: '#5CE1E6',
      },

    },
  },
  plugins: [require('@tailwindcss/typography'), ],
}