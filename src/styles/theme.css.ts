import { createGlobalTheme } from '@vanilla-extract/css'
import { spin } from './animations.css.ts'

export const vars = createGlobalTheme(':root', {
  color: {
    neutral: {
      50: 'hsl(0, 0%, 97.65%)',
      100: 'hsl(0, 0%, 92.55%)',
      200: 'hsl(0, 0%, 87.06%)',
      300: 'hsl(0, 0%, 80.78%)',
      400: 'hsl(0, 0%, 72.94%)',
      500: 'hsl(0, 0%, 62.75%)',
      600: 'hsl(0, 0%, 51.76%)',
      700: 'hsl(0, 0%, 42.35%)',
      800: 'hsl(0, 0%, 34.9%)',
      900: 'hsl(0, 0%, 24.71%)',
      950: 'hsl(0, 0%, 15.69%)',
    } as const,
    primary: {
      50: 'hsl(180, 16.67%, 97.65%)',
      100: 'hsl(188.57, 17.07%, 91.96%)',
      200: 'hsl(189.23, 18.31%, 86.08%)',
      300: 'hsl(186.32, 18.1%, 79.41%)',
      400: 'hsl(188.57, 18.67%, 70.59%)',
      500: 'hsl(187.69, 18.84%, 59.41%)',
      600: 'hsl(188.24, 21.16%, 47.25%)',
      700: 'hsl(188, 31.91%, 36.86%)',
      800: 'hsl(187.06, 33.33%, 30%)',
      900: 'hsl(188.11, 33.94%, 21.37%)',
      950: 'hsl(187.83, 33.33%, 13.53%)',
    } as const,
    danger: {
      50: 'hsl(0, 75%, 98.43%)',
      100: 'hsl(0, 70.37%, 94.71%)',
      200: 'hsl(0, 67.35%, 90.39%)',
      300: 'hsl(0, 69.01%, 86.08%)',
      400: 'hsl(0, 68.93%, 79.8%)',
      500: 'hsl(0, 68.71%, 71.18%)',
      600: 'hsl(0, 69.15%, 60.59%)',
      700: 'hsl(0, 65.46%, 48.82%)',
      800: 'hsl(0, 65.22%, 40.59%)',
      900: 'hsl(0, 65.1%, 29.22%)',
      950: 'hsl(0, 62.6%, 24%)',
    } as const,
  } as const,

  space: {
    0: '0px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    auto: 'auto',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    screen: '100vw',
  } as const,

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  } as const,

  animation: {
    spin: `${spin} 1s linear infinite`,
  } as const,

  radii: {
    none: '0px',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  } as const,
})
