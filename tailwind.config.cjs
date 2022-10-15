/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        poppins: "'Poppins', sans-serif",
        michroma: "'Michroma', sans-serif",
      }
    },
  },
  plugins: [],
}
