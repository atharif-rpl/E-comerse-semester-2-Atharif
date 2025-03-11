/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.{html,js}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      width: {
        '128': '40rem',
        '50': '50%',
        '800': '80%',
      },
      height: {
        '128': '40rem',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        poppins: "'Poppins', serif;",
        roboto: "'Roboto', serif;",
        montserrat: "'Montserrat'",
      },
      colors: {
        primary: '#23B25E',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
      },
      animation: {
        'gradient': 'gradient 3s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};