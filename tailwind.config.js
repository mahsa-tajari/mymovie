/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'hayat': 'hayat',
        'iran-yekan':'iran-yekan'
      },
      colors:{
        'dark-gray': '#252525',
        'orange-1':'#eb8307'
      },
      container: {
        center: true,
        padding:{
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '8rem'
        }
      },
      backgroundImage:{
        // 'dark-lines': "URL(../images/bg/dark-lines.jpg)"
      },
      screens: {
        'tablet': '992px',
      }
    },
  },
  darkMode: 'class',
  plugins: [
    function({addVariant}){
      addVariant('child','&>*');
      addVariant('child-hover','&>*:hover');
    }
  ],
}

