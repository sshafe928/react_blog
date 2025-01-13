/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Cairo': ['Cairo', 'ui-sans-serif', 'system-ui'],
        'Cactus': ['Cactus Classical Serif', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}

