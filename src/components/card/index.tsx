import { FC, PropsWithChildren } from 'react'
import { CardBodyStyles, CardImageStyles, CardSkeletonStyles, CardStyles } from './index.css'

export type CardSizes = {
  w: string
  h: string
}

interface CardProps {
  src: string
  alt?: string
  isPending?: boolean
  width?: string
  height?: string
}

const Card: FC<PropsWithChildren<CardProps>> = ({
  src,
  alt = '',
  isPending,
  children,
  width,
  height,
}) => {
  return (
    <div
      className={CardStyles}
      // style={{
      //   width: `${width}px`,
      //   height: `${height}px`,
      // }}
    >
      {isPending ? (
        <div className={CardSkeletonStyles} />
      ) : (
        <img className={CardImageStyles} src={src} alt={alt} />
      )}
      {children && <div className={CardBodyStyles}>{children}</div>}
    </div>
  )
}

export default Card
