import type { CSSProperties, FC, PropsWithChildren } from 'react'
import { vars } from '../../styles/theme.css'
import { SpaceToken } from '../../styles/types'
import { ClusterStyles } from './index.css'

interface ClusterProps {
  className?: string
  onClick?: () => void
  space?: SpaceToken
  style?: CSSProperties
}

const Cluster: FC<PropsWithChildren<ClusterProps>> = ({
  children,
  className,
  onClick,
  space,
  style,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${ClusterStyles} ${className}`}
      style={{
        gap: vars.space[space ?? 1],
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Cluster
