import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css.ts'

// TODO: consider using recipes
export const ButtonStyles = style({
  border: '1px solid',
  borderRadius: vars.radii.md,
  minHeight: vars.space[8],
  cursor: 'pointer',
  transition: 'background 0.2 ease',

  selectors: {
    '&[disabled], &[data-loading="true"]': {
      cursor: 'not-allowed',
      opacity: 0.8,
    },
  },
})

export const ButtonVariantStyles = styleVariants({
  neutral: {
    backgroundColor: vars.color.neutral[500],
    borderColor: vars.color.neutral[600],
    color: vars.color.neutral[50],

    '&:hover': {
      backgroundColor: vars.color.neutral[600],
    },
  },
  primary: {
    backgroundColor: vars.color.primary[500],
    borderColor: vars.color.primary[600],
    color: vars.color.primary[50],

    '&:hover': {
      backgroundColor: vars.color.primary[600],
    },
  },
  danger: {
    backgroundColor: vars.color.danger[500],
    borderColor: vars.color.danger[600],
    color: vars.color.danger[50],

    '&:hover': {
      backgroundColor: vars.color.danger[600],
    },
  },
})

export const ButtonSizeStyles = styleVariants({
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

export const ButtonPrefixStyles = style({
  width: vars.space[4],
  height: vars.space[4],

  selectors: {
    [`.${ButtonSizeStyles['small']} &`]: {
      width: vars.space[3],
      height: vars.space[3],
    },
  },
})
