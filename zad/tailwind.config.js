/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/ZAD-Hero-Icon-v1.png')",
      }
    },
  },
  plugins: [],
}
