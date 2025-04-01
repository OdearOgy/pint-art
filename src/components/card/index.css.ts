import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const CardStyles = style({
  borderRadius: vars.radii.lg,
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'absolute',

  selectors: {
    [`&::after`]: {
      background: 'currentColor',
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
  borderRadius: 'inherit',
  height: '100%',
  objectFit: 'cover',
  width: '100%',
})

export const CardBodyStyles = style({})

export const CardSkeletonStyles = style({
  background: 'currentColor',
  paddingTop: '150%',
  width: vars.space.full,
})
