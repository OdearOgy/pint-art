import { Button as HeadlessButton } from '@headlessui/react'
import { FunctionComponent, PropsWithChildren, ReactNode } from 'react'
import Cluster from '../cluster'
import ArrowPathIcon from '../icons/arrow-path-icon.tsx'
import {
  ButtonBodyStyles,
  ButtonLoadingIconStyles,
  ButtonPrefixStyles,
  ButtonSizeStyles,
  ButtonStyles,
  ButtonVariantStyles,
} from './index.css.ts'

export type Variant = 'primary' | 'danger' | 'neutral'
export type Size = 'large' | 'medium' | 'small'

interface ButtonProps {
  className?: string
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  prefixIcon?: ReactNode
  size?: Size
  variant?: Variant
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  disabled,
  loading,
  onClick,
  prefixIcon,
  size = 'medium',
  variant = 'neutral',
}) => {
  const btnCls = `${ButtonStyles} ${ButtonVariantStyles[variant]} ${ButtonSizeStyles[size]} ${className ?? ''}`

  return (
    <HeadlessButton
      onClick={onClick}
      type="button"
      className={btnCls}
      disabled={disabled}
      data-loading={loading}
    >
      <Cluster className={ButtonBodyStyles} space={1}>
        {loading ? (
          <ArrowPathIcon className={ButtonLoadingIconStyles} />
        ) : (
          <>
            {prefixIcon && <span className={ButtonPrefixStyles}>{prefixIcon}</span>}
            {children}
          </>
        )}
      </Cluster>
    </HeadlessButton>
  )
}

export default Button
