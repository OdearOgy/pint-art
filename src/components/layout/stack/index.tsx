import type { FC, PropsWithChildren } from 'react'
import { vars } from '../../../styles/theme.css.ts'
import type { LayoutProps } from '../types.ts'
import { StackStyles } from './index.css.ts'

const Stack: FC<PropsWithChildren<LayoutProps>> = ({ children, className, space, style }) => {
  return (
    <div
      className={`${StackStyles} ${className ?? ''}`}
      style={{
        gap: vars.space[space ?? 1],
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Stack
