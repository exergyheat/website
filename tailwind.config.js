/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F2F7',
          100: '#E1E5EE',
          200: '#C3CBDE',
          300: '#A5B1CD',
          400: '#8797BD',
          500: '#697DAC',
          600: '#2F3B69', // Your company blue
          700: '#252D51',
          800: '#1B2039',
          900: '#121522'
        },
        surface: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B'
        }
      },
      fontFamily: {
        'heading': ['Valorant', 'Impact', 'Arial Black', 'sans-serif'],
        'subheading': ['Futura PT', 'Futura', 'Avenir', 'Helvetica Neue', 'sans-serif'],
        'body': ['Futura PT', 'Futura', 'Avenir', 'Helvetica Neue', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'], // Keep for code/technical elements
      },
      fontWeight: {
        'heading': '700',
        'subheading': '500',
        'body': '300',
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}