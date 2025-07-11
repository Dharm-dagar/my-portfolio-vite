// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0ea5e9',
        dark: '#0f172a',
      },
    },
  },
  darkMode: 'class', // ✅ Optional: enable dark mode toggle via class
  plugins: [],
};
