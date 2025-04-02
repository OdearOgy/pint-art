import type { FC, PropsWithChildren } from 'react'
import { vars } from '../../../styles/theme.css.ts'
import type { LayoutProps } from '../types.ts'
import { ClusterStyles } from './index.css.ts'

type ClusterProps = LayoutProps & {
  onClick?: () => void
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
      className={`${ClusterStyles} ${className ?? ''}`}
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
