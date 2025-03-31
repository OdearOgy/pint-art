import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css.ts'

globalStyle(':root', {
  fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  backgroundColor: vars.color.neutral[900],
  color: vars.color.neutral[50],
  lineHeight: '1.5',
  fontWeight: '400',
  WebkitFontSmoothing: 'antialiased',
  textRendering: 'optimizeLegibility',
  fontSynthesis: 'none',
})
