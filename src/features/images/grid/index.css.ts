import { style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme.css.ts'

export const GridStyles = style({
  margin: '0 auto',
  maxWidth: '70vw',
  padding: vars.space[10],
})
