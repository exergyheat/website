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
          50: '#F0F4F8',
          100: '#E1E9F1',
          200: '#C3D3E3',
          300: '#A5BDD5',
          400: '#87A7C7',
          500: '#4970A5', // BLUE 2 - Main brand blue (updated from #2F3B69)
          600: '#3D5A8A', // Darker shade of BLUE 2
          700: '#2F4570',
          800: '#213056',
          900: '#131B3C'
        },
        secondary: {
          50: '#F5F8FB',
          100: '#EBF1F7',
          200: '#D7E3EF',
          300: '#C3D5E7',
          400: '#AFC7DF',
          500: '#9EA8BE', // BLUE 4 - Light accent
          600: '#718EBC', // BLUE 3 - Medium accent
          700: '#5A7199',
          800: '#435477',
          900: '#2C3755'
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
        },
        accent: {
          light: '#9EA8BE', // BLUE 4 for light accents
          medium: '#718EBC', // BLUE 3 for medium accents
          dark: '#4970A5' // BLUE 2 for dark accents (updated)
        }
      },
      fontFamily: {
        'heading': ['Futura PT', 'Futura', 'Avenir', 'Helvetica Neue', 'sans-serif'],
        'subheading': ['Futura PT', 'Futura', 'Avenir', 'Helvetica Neue', 'sans-serif'],
        'body': ['Futura PT', 'Futura', 'Avenir', 'Helvetica Neue', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
        'valorant': ['Valorant', 'Futura PT', 'Futura', 'Avenir', 'Helvetica Neue', 'sans-serif'],
      },
      fontWeight: {
        'heading': '600',
        'subheading': '500',
        'body': '300',
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#4970A5',
              '&:hover': {
                color: '#3D5A8A',
              },
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            blockquote: {
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}