import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const SpinnerStyles = style({
  borderRadius: vars.radii.full,
  border: '4px solid',
  animation: vars.animation.spin,
})
