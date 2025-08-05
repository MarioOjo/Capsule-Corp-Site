/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
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
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.85' },
        },
      },
      boxShadow: {
        'custom-hover': '0 20px 25px -5px rgba(59, 76, 202, 0.3), 0 10px 10px -5px rgba(59, 76, 202, 0.04)',
      },
      transitionProperty: {
        'transform-shadow': 'transform, box-shadow',
      },
      textShadow: {
        // Tailwind doesn't support text-shadow by default, so you'll need a plugin or inline style for this.
      },
    },
  },
  plugins: [
    // For text-shadow you might add a plugin like tailwindcss-textshadow or handle inline styles
  ],
};
