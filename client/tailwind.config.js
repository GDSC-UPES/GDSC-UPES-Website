/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'greyText': '#626262',
        'redText':'#EA4335',
        'blueText': '#0060FF',
        'greenText': '#0D9C58',
        'lineColor':'#C5C5C5',
        'lineColorDark':'#020617',
        
      },
      dropShadow:{
        'custom': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'custom1': '0px 4px 4px rgba(255, 255, 255, 0.20)',
      },
      screens:{
        'xxs': '380px',
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },
    },
  },
  plugins: [],
}

