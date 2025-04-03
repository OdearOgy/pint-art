import { Input as HeadlessInput } from '@headlessui/react'
import type { FC } from 'react'
import { Size } from '../../shared/types.ts'
import Button from '../button/index.tsx'
import XCircleIcon from '../icons/x-circle-icon.tsx'
import Stack from '../layout/stack'
import {
  FieldClearButtonStyles,
  FieldInputStyles,
  FieldLabelStyles,
  FieldSizeStyles,
  FieldStyles,
} from './index.css.ts'

interface InputProps {
  label?: string
  name: string
  onBlur?: () => void
  onChange?: (s: string) => void
  placeholder?: string
  value?: unknown
  defaultValue?: string
  size?: Size
  onClear?: () => void
}

const Input: FC<InputProps> = ({
  label,
  onBlur,
  onChange,
  onClear,
  value,
  size = 'medium',
  ...props
}) => {
  const inputCls = `${FieldStyles} ${FieldSizeStyles[size]}`

  return (
    <Stack className={inputCls}>
      {label ? <label className={FieldLabelStyles}>{label}</label> : null}
      <HeadlessInput
        {...props}
        className={FieldInputStyles}
        onChange={(e) => onChange?.(e.target.value)}
        onBlur={() => onBlur?.()}
        value={value?.toString()}
      />

      {(value || props.defaultValue) && (
        <Button onClick={onClear} className={FieldClearButtonStyles} variant="danger" size={size}>
          <XCircleIcon />
        </Button>
      )}
    </Stack>
  )
}

export default Input
