/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  // darkMode: false,
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#2F70FF',
        secondary1: '#00998B',
        secondary2: '#FF6161',
        secondary3: '#C78200',
        secondary4: '#5D69F4',
        secondary3dark: '#FFC861',
        n0: '#FFFFFF',
        n10: '#FAFAFB',
        n20: '#F5F6F7',
        n30: '#EBECEF',
        n40: '#DFE0E4',
        n50: '#C1C4CC',
        n60: '#B2B6BF',
        n70: '#A6AAB5',
        n80: '#979CA8',
        n90: '#888E9C',
        n100: '#798090',
        n200: '#6A7283',
        n300: '#5B6477',
        n400: '#4F586D',
        n500: '#404A60',
        n600: '#343E56',
        n700: '#222E48',
        n800: '#13203B',
        n900: '#0B1323',
        bg3: '#131920',
        bg4: '#1B232D'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
        xxxl: '1600px',
        '4xl': '1800px'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      }
    }
  },
  plugins: []
}
