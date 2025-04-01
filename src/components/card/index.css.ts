import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const CardStyles = style({
  backgroundColor: vars.color.neutral[50],
  borderRadius: vars.radii.lg,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',

  selectors: {
    [`&::after`]: {
      content: '',
      height: vars.space.full,
      left: 0,
      opacity: '1',
      position: 'absolute',
      top: 0,
      transition: 'background 0.5s ease, opacity 0.5s ease',
      width: vars.space.full,
      zIndex: 2,
    },

    [`&:hover::after`]: {
      background: vars.color.neutral[600],
      opacity: '0.4',
    },
  },
})

export const CardImageStyles = style({
  display: 'block',
  // height: vars.space.auto,
  objectFit: 'cover',
  width: vars.space.full,
  zIndex: 1,
})

export const CardBodyStyles = style({})

export const CardSkeletonStyles = style({
  width: vars.space.full,
  paddingTop: '150%',
  background: vars.color.neutral[100],
})
