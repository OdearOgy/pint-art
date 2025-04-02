import type { CSSProperties, FC, PropsWithChildren, RefCallback } from 'react'
import { CardBodyStyles, CardImageStyles, CardSkeletonStyles, CardStyles } from './index.css'

interface CardProps {
  alt?: string
  id: string
  imageRef?: RefCallback<HTMLImageElement | null>
  isPending?: boolean
  src: string
  style?: CSSProperties
}

const Card: FC<PropsWithChildren<CardProps>> = ({
  alt = '',
  children,
  id,
  imageRef,
  isPending,
  src,
  style,
}) => {
  return (
    <div className={CardStyles} style={{ ...style }}>
      {isPending ? (
        <div ref={imageRef} className={CardSkeletonStyles}>
          loader
        </div>
      ) : (
        <img
          ref={imageRef}
          className={CardImageStyles}
          src={src}
          alt={alt}
          data-id={id}
          loading="lazy"
        />
      )}
      {children && <div className={CardBodyStyles}>{children}</div>}
    </div>
  )
}

export default Card
