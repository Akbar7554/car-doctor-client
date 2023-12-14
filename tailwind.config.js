/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FF3811',
        'bg-secondary': '#FFFFFF',
      },
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

