/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF1FF',
          500: '#335CFF',
        },
        secondary: {
          50: '#F5F7FA',
          100: '#F3F5F8',
          200: '#E0E4EA',
          300: '#CACFD8',
          400: '#99A0AE',
          500: '#717784',
          600: '#525866',
          700: '#2B303B',
          800: '#232530',
          950: '#0E121B',
        },
        danger: '#FB3748',
        success: '#21C16B',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      boxShadow: {
        'all-edges': '0 0 10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
