import type { CSSProperties, FC, PropsWithChildren } from 'react'
import { vars } from '../../styles/theme.css'
import { SpaceToken } from '../../styles/types'
import { StackStyles } from './index.css'

interface StackProps {
  className?: string
  space?: SpaceToken
  style?: CSSProperties
}

const Stack: FC<PropsWithChildren<StackProps>> = ({ children, className, space, style }) => {
  return (
    <div
      className={`${StackStyles} ${className}`}
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
