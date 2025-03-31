import { FunctionComponent, PropsWithChildren } from 'react'
import { vars } from '../../styles/theme.css'
import { SpaceToken } from '../../styles/types'
import { StackStyles } from './index.css'

const Stack: FunctionComponent<
  PropsWithChildren<{
    className?: string
    space?: SpaceToken
  }>
> = ({ children, className, space }) => {
  return (
    <div
      className={`${StackStyles} ${className}`}
      style={{
        gap: vars.space[space ?? 1],
      }}
    >
      {children}
    </div>
  )
}

export default Stack
