import type { FC, PropsWithChildren } from 'react'
import type { LayoutProps } from '../types'
import { CenterStyles } from './index.css.ts'

type CenterProps = Omit<LayoutProps, 'space'>

const Center: FC<PropsWithChildren<CenterProps>> = ({ children, className, style }) => {
  return (
    <div className={`${CenterStyles} ${className ?? ''}`} style={style}>
      {children}
    </div>
  )
}

export default Center
