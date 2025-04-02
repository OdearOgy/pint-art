import { FunctionComponent, PropsWithChildren } from 'react'
import { vars } from '../../styles/theme.css'
import { SpaceToken } from '../../styles/types'
import { ClusterStyles } from './index.css'

interface ClusterProps {
  className?: string
  onClick?: () => void
  space?: SpaceToken
}

const Cluster: FunctionComponent<PropsWithChildren<ClusterProps>> = ({
  children,
  className,
  onClick,
  space,
}) => {
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
