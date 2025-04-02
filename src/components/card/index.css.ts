import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css.ts'

export const CardStyles = style({
  borderRadius: vars.radii.lg,
  overflow: 'hidden',
  position: 'relative',
  boxShadow: `2px 5px 10px ${vars.color.neutral[400]}`,
  cursor: 'pointer',

  selectors: {
    [`&::after`]: {
      background: 'currentColor',
      borderRadius: vars.radii.lg,
      content: '',
      display: 'block',
      height: vars.space.full,
      left: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      transition: 'opacity 0.2s ease',
      width: vars.space.full,
    },

    [`&:hover::after`]: {
      opacity: 0.6,
    },
  },
})

export const CardImageStyles = style({
  borderRadius: vars.radii.lg,
  height: '100%',
  objectFit: 'cover',
  width: '100%',
})

export const CardSkeletonStyles = style({
  background: 'currentColor',
  borderRadius: vars.radii.lg,
  height: 'inherit',
  width: 'inherit',
})
