import type { CSSProperties, FC, RefCallback } from 'react'
import { CardImageStyles, CardSkeletonStyles, CardStyles } from './index.css.ts'

interface CardProps {
  alt?: string
  id: string
  imageRef?: RefCallback<HTMLImageElement | null>
  isPending?: boolean
  src: string
  style?: CSSProperties
}

const Card: FC<CardProps> = ({ alt = '', id, imageRef, isPending, src, style }) => {
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
    </div>
  )
}

export default Card
