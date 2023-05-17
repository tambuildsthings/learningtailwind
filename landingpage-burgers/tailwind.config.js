/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      lg: '1020px'
    },
    extend: {
      colors: {
        flosOrgange: 'hsl(13, 86%, 53%)',
        flosGray: 'hsl(20, 25%, 95%)',
        flosLime: 'hsl(64, 91%, 69%)',
      },
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
        bowlbly: ['"Bowlby One"'],
      },
      backgroundImage: () => ({
        star: "url('https://raw.githubusercontent.com/tambuildsthings/web-bits/4b77e71be175b65e8577b63a690a804d3d7a7d12/fakeburgers/icons-star.svg')"
      }),
    },
  },
  plugins: [],
}
