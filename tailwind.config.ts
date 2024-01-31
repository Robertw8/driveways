import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#121417',
        'black-50': '#12141780',
        'black-20': '#12141733',
        'black-5': '#1214170D',
        'blue-primary': '#3470FF',
        'blue-secondary': '#0B44CD',
        backdrop: '#12141780',
        gray: '#363535',
        'white-secondary': '#F7F7FB',
        'light-gray': '#8A8A89',
      },
    },
  },
};

export default config;
