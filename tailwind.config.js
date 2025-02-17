
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(5deg)",
          },
        },
      },
      fontFamily: {
        'Cairo': ['Cairo', 'ui-sans-serif', 'system-ui'],
        'Cactus': ['Cactus Classical Serif', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}

