/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bae3be',
          300: '#8fcd95',
          400: '#5fb169',
          500: '#429649',
          600: '#2E7D32', // main primary
          700: '#256429',
          800: '#1e5022',
          900: '#19421d',
          950: '#0b2410',
        },
        secondary: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#dfdfdf',
          300: '#c8c8c8',
          400: '#adadad',
          500: '#999999',
          600: '#888888',
          700: '#7b7b7b',
          800: '#676767',
          900: '#515151',
          950: '#3d3d3d',
        },
        accent: {
          50: '#fcf5eb',
          100: '#f9e8cf',
          200: '#f2cfa0',
          300: '#eab169',
          400: '#e4963e',
          500: '#db7b22',
          600: '#ca5f1b',
          700: '#a74618',
          800: '#883919',
          900: '#703019',
          950: '#3d160d',
        },
        success: {
          500: '#4CAF50',
          600: '#43A047',
        },
        warning: {
          500: '#FF9800',
          600: '#FB8C00',
        },
        error: {
          500: '#F44336',
          600: '#E53935',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};