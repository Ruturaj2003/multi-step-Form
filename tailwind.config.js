/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#18988B', // Teal Green
        accent: '#A0D995', // Soft Green
        background: '#d4edda', // Pale Green
        text: '#264653', // Deep Forest Green
      },
    },
  },
  plugins: [],
};
