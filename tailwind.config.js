/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        dim: 'var(--color-dim)',
        default: 'var(--color-default)',
        muted: 'var(--color-muted)',
        'muted-light': 'var(--color-muted-light)',
        'muted-dark': 'var(--color-muted-dark)',
        inverted: 'var(--color-inverted)',
        'secondary-light': 'var(--color-secondary-light)',
        'secondary-dark': 'var(--color-secondary-dark)',
        surface: 'var(--color-surface)',

        blue: {
          // 50: '#EBF1FF',
          // 500: '#335CFF',
          ...colors.blue,
          50: 'hsl(222, 100%, 96%)',
          500: 'hsl(228, 100%, 60%)',
          700: 'hsl(228, 70%, 48%)',
        },
        neutral: {
          // 50: '#F5F7FA',
          // 100: '#F3F5F8',
          // 200: '#E0E4EA',
          // 300: '#CACFD8',
          // 400: '#99A0AE',
          // 500: '#717784',
          // 600: '#525866',
          // 700: '#2B303B',
          // 800: '#232530',
          // 950: '#0E121B',

          ...colors.neutral,

          0: 'hsl(0, 0%, 100%)',
          50: 'hsl(216, 33%, 97%)',
          100: 'hsl(216, 26%, 96%)',
          200: 'hsl(216, 19%, 90%)',
          300: 'hsl(219, 15%, 82%)',
          400: 'hsl(220, 11%, 64%)',
          500: 'hsl(221, 8%, 48%)',
          600: 'hsl(222, 11%, 36%)',
          700: 'hsl(221, 16%, 20%)',
          800: 'hsl(231, 16%, 16%)',
          900: 'hsl(230, 19%, 12%)',
          950: 'hsl(222, 32%, 8%)',
        },

        // danger: '#FB3748',
        // success: '#21C16B',

        red: {
          ...colors.red,
          100: 'hsl(356, 100%, 92%)',
          500: 'hsl(355, 96%, 60%)',
        },
        green: {
          ...colors.green,
          100: 'hsl(154, 84%, 90%)',
          500: 'hsl(148, 71%, 44%)',
        },
      },
      fontFamily: {
        base: ['var(--font-family-base)'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Source Code Pro', 'ui-serif', 'Georgia', 'serif'],
        mono: ['Noto Serif', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'all-edges': '0 0 10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
