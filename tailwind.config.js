

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/sections/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors : {
        pink : {
          100 : '#FFEEF0',
          200 : '#FFD8DE',
          300 : '#FF7E8F',
          400 : '#FF7184',
          500 : '#FF3954'
        },
        black : {
          100 : '#232323',
          200 : '#000000',
          300 : '#00000059'
        },
        gray : {
          100 : '#FCFCFC',
          200 : '#F8F8F8',
          300 : '#E8E8E8',
          400 : '#EDE1FF',
          500 : '#F5EEFF',
          600 : '#F5F5F5',
          700 : '#9A9A9A',
          800 : '#e6e5e5',
          alpha : {
            100 : '#ffffff4d'
          }
        },
        yellow : {
          100 : '#FFFFB0',
          200 : '#FFFF87',
          300 : '#F4F474'
        },
        pruple : {
          100 : '#6a1bdacc',
          200 : '#691BDA'
        },
      },
      fontFamily : {
        euclidReqular : 'euclidReqular',
        euclidBold : 'euclidBold',
        robotoReqular : 'robotoReqular',
        robotoMedium : 'robotoMedium',
        robotoBold : 'robotoBold'
      },
      fontSize : {
        10 : '10px',
        12 : '12px',
        14 : '14px',
        16 : '16px',
        18 : '18px',
        30 : '30px',
        35 : '35px',
        40 : '40px',
        45 : '45px',
        50 : '50px'
      },
    },
  },
  plugins: [],
}
