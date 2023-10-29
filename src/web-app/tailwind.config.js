/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          'whatsapp-green': '#00A884',
          "whatsapp-green-button": "#00BF63",
          "blue-link": "#4495FA"
        }
      },
      backdropFilter: {
        '20': 'blur(20px)',
      },
    },
  },
  plugins: [],
}

