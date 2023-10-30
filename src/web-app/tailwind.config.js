/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gpt-gray": "#343541",
        "gpt-lightgray": "#40414f",
        "what-gray": "#E6E4DF",
        "what-grenn": "#00A884",
        "what-gree-darker": "#018266",
        "what-chat-bg": "#D1F4CC",
        "whatsapp-green-button": "#00BF63",
        "blue-link": "#4495FA",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        blink: "blink 1s infinite",
      },
    },
  },
  plugins: [],
};
