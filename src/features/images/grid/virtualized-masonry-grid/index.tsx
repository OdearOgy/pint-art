import { FC, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import Card from '../../../../components/card'
import { useConfigureLayout } from './use-configure-layout'
import { useIntersectionObserver } from './use-intersection-observer'
import { useVirtualization } from './use-virtualization'

export type MasonryItem = {
  height: number
  id: string
  src: string
  color?: string
  alt: string
}

interface VirtualizedMasonryGridProps {
  bufferRows?: number
  columnGap?: number
  columnWidth?: number
  items: MasonryItem[]
}

const VirtualizedMasonryGrid: FC<VirtualizedMasonryGridProps> = ({
  bufferRows = 2,
  columnGap = 16,
  columnWidth = 400,
  items,
}) => {
  const gridContainerRef = useRef<HTMLDivElement | null>(null)
  const layoutConfiguration = useConfigureLayout(gridContainerRef, columnWidth, columnGap)
  const imageRefs = useRef<Map<string, HTMLImageElement | HTMLDivElement | null>>(new Map())
  const [images, setImages] = useState<Record<string, boolean>>({})

  const { visibleItems, longestColumn } = useVirtualization(
    bufferRows,
    columnGap,
    columnWidth,
    items,
    layoutConfiguration
  )

  const observer = useIntersectionObserver(setImages)
  useEffect(() => {
    for (const item of visibleItems) {
      const el = imageRefs.current.get(item.id)
      if (el) {
        observer.observe(el)
      }
    }

    return () => observer.disconnect()
  }, [visibleItems, observer])

  return (
    <div
      ref={gridContainerRef}
      style={{
        position: 'relative',
        height: longestColumn,
      }}
    >
      {visibleItems?.map((item) => {
        return (
          <Link to={`/${item.id}`} key={item.id}>
            <Card
              src={item.src}
              alt={item.alt ?? ''}
              style={{
                background: item.color,
                color: item.color,
                height: item.height,
                left: item.posX,
                top: item.posY,
                width: columnWidth,
              }}
              id={item.id}
              isPending={!images[item.id]}
              imageRef={(el: HTMLImageElement) => {
                imageRefs.current.set(item.id, el)
              }}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default VirtualizedMasonryGrid
