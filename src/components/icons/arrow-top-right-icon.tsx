import type { FC } from 'react'
import { IconsStyles } from './icons.css.ts'
import { IconProps } from './types.ts'

const ArrowTopRightIcon: FC<IconProps> = ({ className, style }) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  )
}

export default ArrowTopRightIcon
