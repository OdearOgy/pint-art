import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css.ts'

// TODO: consider using recipes
export const ButtonStyles = style({
  border: '1px solid',
  borderRadius: vars.radii.md,
  minHeight: vars.space[8],
  cursor: 'pointer',
  transition: 'background 0.2s ease',

  selectors: {
    '&[disabled], &[data-loading="true"]': {
      cursor: 'not-allowed',
      opacity: 0.8,
    },
  },
})

export const ButtonVariantStyles = styleVariants({
  neutral: {
    backgroundColor: vars.color.neutral[300],
    borderColor: vars.color.neutral[400],
    color: vars.color.neutral[950],

    '&:hover': {
      backgroundColor: vars.color.neutral[400],
    },
  },
  primary: {
    backgroundColor: vars.color.primary[300],
    borderColor: vars.color.primary[400],
    color: vars.color.primary[950],

    '&:hover': {
      backgroundColor: vars.color.primary[400],
    },
  },
  danger: {
    backgroundColor: vars.color.danger[300],
    borderColor: vars.color.danger[400],
    color: vars.color.danger[950],

    '&:hover': {
      backgroundColor: vars.color.danger[400],
    },
  },
})

export const ButtonSizeStyles = styleVariants({
  large: {
    padding: `${vars.space[4]} ${vars.space[5]}`,
  },
  medium: {
    padding: `${vars.space[2]} ${vars.space[3]}`,
  },
  small: {
    padding: `${vars.space[1]} ${vars.space[2]}`,
  },
})

export const ButtonBodyStyles = style({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  minHeight: vars.space[5],
  fontSize: vars.fontSize.base,

  selectors: {
    [`.${ButtonStyles}[data-loading="true"] &`]: {
      width: vars.space[4],
      height: vars.space[4],
    },

    [`.${ButtonSizeStyles['medium']} &`]: {
      fontSize: vars.fontSize.sm,
    },

    [`.${ButtonSizeStyles['medium']}[data-loading="true"] &`]: {
      width: vars.space[4],
      height: vars.space[4],
    },

    [`.${ButtonSizeStyles['small']} &`]: {
      fontSize: vars.fontSize.xs,
      minHeight: vars.space[2],
    },

    [`.${ButtonSizeStyles['small']}[data-loading="true"] &`]: {
      width: vars.space[3],
      height: vars.space[3],
    },
  },
})

export const ButtonLoadingIconStyles = style({
  animation: vars.animation.spin,
})
