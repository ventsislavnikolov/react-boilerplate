import { white } from '@radix-ui/colors';

export const darkMode = 'class';
export const content = ['./index.html', './src/**/*.{ts,tsx,js,jsx,mdx}'];
export const theme = {
  extend: {
    colors: {
      ...white,
      primary: '#1a202c',
      error: '#e53e3e',
      success: '#38a169',
    },
  },
};
export const plugins = [];
