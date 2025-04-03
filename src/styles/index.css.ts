import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css.ts'

globalStyle(':root', {
  fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  backgroundColor: vars.color.primary[100],
  color: vars.color.neutral[900],
  lineHeight: '1.5',
  fontWeight: '400',
  WebkitFontSmoothing: 'antialiased',
  textRendering: 'optimizeLegibility',
  fontSynthesis: 'none',
})

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

globalStyle('a', {
  color: vars.color.primary[600],
  textDecoration: 'none',
  transition: 'color 0.2s ease',
})

globalStyle('a:hover', {
  color: vars.color.primary[700],
})
