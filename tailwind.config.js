import { white } from '@radix-ui/colors';

export const darkMode = ['class', '[data-mode="dark"]'];
export const content = ['./index.html', './src/**/*.{ts,tsx,js,jsx,mdx}'];
export const theme = {
  extend: {
    colors: {
      ...white,
      error: '#e53e3e',
      primary: '#0275d8',
      success: '#38a169',
    },
    fontFamily: {
      title: ['Roboto'],
      text: ['Roboto'],
    },
  },
};
export const plugins = [require('prettier-plugin-tailwindcss')];
