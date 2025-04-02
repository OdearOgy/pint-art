import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const FieldStyles = style({
  width: vars.space[72],
  position: 'relative',
})

export const FieldLabelStyles = style({
  fontSize: vars.fontSize.lg,
})

export const FieldInputStyles = style({
  border: '2px solid',
  borderRadius: vars.radii.md,
  borderColor: vars.color.primary[400],
  padding: `${vars.space[2]} ${vars.space[3]}`,

  selectors: {
    ['&:hover']: {
      borderColor: vars.color.primary[500],
    },
    ['&:active, &:focus']: {
      borderColor: vars.color.primary[600],
    },
  },
})
