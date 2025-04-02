import type { FC } from 'react'
import { vars } from '../../styles/theme.css.ts'
import { IconProps } from './types.ts'

const ArrowLeftIcon: FC<IconProps> = ({ className, size, style }) => {
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
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </div>
  )
}

export default ArrowLeftIcon
