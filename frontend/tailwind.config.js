/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'background-image': "url('./src/assets/Background.png')"
      },
      textColor:{
        'logo-blue': '#174883'
      },
      fontFamily:{
        'default-font': ['archivo', 'sans-serif']
      }
    },
  },
  plugins: [],
}