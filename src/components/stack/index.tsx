import { FunctionComponent, PropsWithChildren } from 'react'
import { vars } from '../../styles/theme.css'
import { SpaceToken } from '../../styles/types'
import { StackStyles } from './index.css'

interface StackProps {
  className?: string
  space?: SpaceToken
}

const Stack: FunctionComponent<PropsWithChildren<StackProps>> = ({
  children,
  className,
  space,
}) => {
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
