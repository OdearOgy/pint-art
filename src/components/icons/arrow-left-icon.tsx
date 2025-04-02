import type { FC } from 'react'
import { IconsStyles } from './icons.css.ts'
import { IconProps } from './types.ts'

const ArrowLeftIcon: FC<IconProps> = ({ className, style }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${IconsStyles} ${className}`}
      style={style}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  )
}

export default ArrowLeftIcon
