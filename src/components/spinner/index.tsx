import type { FC } from 'react'
import { vars } from '../../styles/theme.css.ts'
import { SpinnerStyles } from './index.css.ts'

const Spinner: FC<{
  size?: number
  color?: string
}> = ({ color, size }) => {
  return (
    <div
      className={SpinnerStyles}
      style={{
        width: size ?? vars.space[12],
        height: size ?? vars.space[12],
        borderColor: vars.color.neutral[500],
        borderTopColor: color ?? vars.color.primary[700],
      }}
    />
  )
}

export default Spinner
