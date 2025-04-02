import type { FC, PropsWithChildren } from 'react'
import { vars } from '../../../styles/theme.css'
import type { LayoutProps } from '../types'
import { CoverStyles } from './index.css.ts'

const Cover: FC<PropsWithChildren<LayoutProps>> = ({ children, className, space, style }) => {
  return (
    <div
      className={`${CoverStyles} ${className ?? ''}`}
      style={{
        gap: vars.space[space ?? 5],
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Cover
