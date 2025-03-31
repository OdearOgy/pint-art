import { Input as HeadlessInput } from '@headlessui/react'
import { FunctionComponent } from 'react'
import Stack from '../stack'
import { FieldInputStyles, FieldLabelStyles, FieldStyles } from './index.css'

type InputProps = {
  label?: string
  name: string
  onBlur?: () => void
  onChange?: (s: string) => void
  placeholder?: string
  value: unknown
}

const Input: FunctionComponent<InputProps> = ({
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <Stack className={FieldStyles}>
      {label ? <label className={FieldLabelStyles}>{label}</label> : null}
      <HeadlessInput
        name={name}
        onChange={(e) => onChange?.(e.target.value)}
        onBlur={() => onBlur?.()}
        className={FieldInputStyles}
        value={value?.toString()}
        placeholder={placeholder}
      />
    </Stack>
  )
}

export default Input
