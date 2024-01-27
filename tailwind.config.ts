import { whiteA } from '@radix-ui/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...whiteA,
        error: '#e53e3e',
        primary: '#0275d8',
        success: '#38a169',
      },
      fontFamily: {
        title: ['Roboto'],
        text: ['Roboto'],
      },
    },
  },
  plugins: [],
};
