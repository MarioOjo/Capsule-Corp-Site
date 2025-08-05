/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all React components
    "./public/index.html"         // Optional: For HTML content
  ],
  theme: {
    extend: {
      colors: {
        'saiyan-blue': '#3B4CCA',
        'saiyan-orange': '#FF9E00',
        'power-green': '#00FF00',
        'capsule-yellow': '#FFD700',
      },
      fontFamily: {
        saiyan: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin-slow 6s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
    },
  },
  plugins: [],
};
