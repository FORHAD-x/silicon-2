/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
       "primary":["#FF009D"],
       "secondary":["#FF6347"],
     },
    },
   
    fontFamily:{
      "Manrope":["Manrope", "serif"]
    },
    container:{
      center:true,
    },
  },
  plugins: [],
}