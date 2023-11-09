/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#00FF0A',
      },
      backdropFilter: { 
        'blur-gray': 'blur(5px) grayscale(0.5)',
      },
    },
  },
  plugins: [],
}
