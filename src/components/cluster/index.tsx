import { FunctionComponent, PropsWithChildren } from 'react'
import { vars } from '../../styles/theme.css'
import { SpaceToken } from '../../styles/types'
import { ClusterStyles } from './index.css'

const Cluster: FunctionComponent<
  PropsWithChildren<{
    className?: string
    onClick?: () => void
    space?: SpaceToken
  }>
> = ({ children, className, onClick, space }) => {
  return (
    <div
      onClick={onClick}
      className={`${ClusterStyles} ${className}`}
      style={{
        gap: vars.space[space ?? 1],
      }}
    >
      {children}
    </div>
  )
}

export default Cluster
