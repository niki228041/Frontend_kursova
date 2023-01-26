/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        mainYellow:'#ffba52',
        fontYellowDark:'#755831',
        yellowForInputs:'#d29644',
        whiteYellow:"#f0cb98",
        grayBackground:"#d9d9d9",
        grayFont:"#464646",
      }
    },
  },
  plugins: [],
}
