import type { Config } from 'tailwindcss'
import {ButtonComponent} from './button-plugin'

const config = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,vue}'],
  plugins: [ButtonComponent],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.9rem',
      'full': '9999px',
      'primary': '1.25rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
          primary: '#333333',
          secondary: '#4F4F4F',
          light: '#828282',
      },
      red: {
        primary: '#EB5757',
        secondary: '#F2994A',
        light: '#F2C94C',
      },
      orange: {
        primary: '#f2764c',
        secondary: '#e14510',
        light: '#f8a978',
      },
      yellow: {
        // pastel yellow
        primary: '#efbb1c',
        secondary: '#efbb1c',
        light: '#f5d150',
      },
      green: {
        primary: '#27AE60',
        secondary: '#6FCF97',
        light: '#219653',
      },
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      primaryDark: "rgb(var(--color-primary-dark) / <alpha-value>)",
      primaryLight: "rgb(var(--color-primary-light) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      secondaryDark: "rgb(var(--color-secondary-dark) / <alpha-value>)",
      secondaryLight: "rgb(var(--color-secondary-light) / <alpha-value>)",
      background: "rgb(var(--color-background) / <alpha-value>)",
      surface: "rgb(var(--color-surface) / <alpha-value>)",
      error: "rgb(var(--color-error) / <alpha-value>)",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {

    }
  }
}

export default config