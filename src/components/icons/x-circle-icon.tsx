import type { FC } from 'react'
import { vars } from '../../styles/theme.css.ts'
import type { IconProps } from './types.ts'

const XCircleIcon: FC<IconProps> = ({ className, size, style }) => {
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
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
  )
}

export default XCircleIcon
