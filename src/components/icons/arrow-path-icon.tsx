import type { FC } from 'react'
import { vars } from '../../styles/theme.css.ts'
import type { IconProps } from './types.ts'

const ArrowPathIcon: FC<IconProps> = ({ className, size, style }) => {
  return (
    <div
      className={className}
      style={{
        width: vars.fontSize[size ?? 'base'],
        height: vars.fontSize[size ?? 'base'],
        fontSize: vars.fontSize[size ?? 'base'],
        ...style,
      }}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </div>
  )
}

export default ArrowPathIcon
