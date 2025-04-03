import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css.ts'

export const FieldStyles = style({
  width: vars.space.full,
  position: 'relative',
})

export const FieldSizeStyles = styleVariants({
  large: {
    paddingInline: vars.space[4],
  },
  medium: {
    paddingInline: vars.space[3],
  },
  small: {
    padding: `${vars.space[1]} ${vars.space[2]}`,
  },
})

export const FieldLabelStyles = style({
  fontSize: vars.fontSize.lg,
})

export const FieldInputStyles = style({
  border: '2px solid',
  borderRadius: vars.radii.md,
  borderColor: vars.color.primary[400],
  padding: `${vars.space[2]} ${vars.space[3]}`,
  position: 'relative',
  fontSize: vars.fontSize.base,

  selectors: {
    ['&:hover']: {
      borderColor: vars.color.primary[500],
    },
    ['&:active, &:focus']: {
      borderColor: vars.color.primary[600],
    },

    [`${FieldSizeStyles.large} &`]: {
      padding: vars.space[7],
    },

    [`${FieldSizeStyles.medium} &`]: {
      padding: vars.space[5],
    },

    [`${FieldSizeStyles.small} &`]: {
      padding: vars.space[4],
    },
  },
})

export const FieldClearButtonStyles = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: vars.fontSize['3xl'],

  selectors: {
    [`${FieldSizeStyles.large} &`]: {
      right: vars.space[7],
    },

    [`${FieldSizeStyles.medium} &`]: {
      right: vars.space[5],
    },

    [`${FieldSizeStyles.small} &`]: {
      right: vars.space[4],
    },
  },
})
