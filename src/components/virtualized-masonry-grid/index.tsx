import { FC, useEffect, useRef, useState } from 'react'
import { useConfigureLayout } from './use-configure-layout'
import { useIntersectionObserver } from './use-intersection-observer'

type Item = {
  height: number
  id: string
  src: string
}

interface VirtualizedMasonryGridProps {
  bufferRows?: number
  columnGap?: number
  columnWidth?: number
  items: Item[]
}

type ColumnItem = Item & {
  posX: number
  posY: number
}

const ITEM_HEIGHT_OPTIMIZATION = 10

const VirtualizedMasonryGrid: FC<VirtualizedMasonryGridProps> = ({
  items,
  columnWidth = 400,
  columnGap = 16,
  bufferRows = 2,
}) => {
  const gridContainerRef = useRef<HTMLDivElement | null>(null)

  const { gridColumns, scrollPosition, gridContainerHeight } = useConfigureLayout(
    gridContainerRef,
    columnWidth,
    columnGap
  )

  const columnHeights = new Array(gridColumns).fill(0)
  const columnItems: ColumnItem[] = []

  items.forEach((item) => {
    const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights))
    const posY = columnHeights[shortestColumn]
    const posX = shortestColumn * (columnWidth + columnGap)

    columnItems.push({ ...item, posX, posY })
    columnHeights[shortestColumn] += item.height / ITEM_HEIGHT_OPTIMIZATION + columnGap
  })

  const longestColumn = Math.max(...columnHeights)
  const buffer = bufferRows * gridContainerHeight
  const containerTopBorder = scrollPosition - buffer
  const containerBottomBorder = scrollPosition + gridContainerHeight + buffer

  const visibleItems = columnItems.filter((item) => {
    const { posY, height } = item

    return (
      posY + height / ITEM_HEIGHT_OPTIMIZATION > containerTopBorder && posY < containerBottomBorder
    )
  })

  const imageRefs = useRef<Map<string, HTMLImageElement | HTMLDivElement | null>>(new Map())
  const [images, setImages] = useState<Record<string, boolean>>({})

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
          <div
            key={item.id}
            style={{
              position: 'absolute',
              top: item.posY,
              left: item.posX,
              width: columnWidth,
              height: item.height / ITEM_HEIGHT_OPTIMIZATION,
              borderRadius: 8,
              overflow: 'hidden',
              background: '#eee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {images[item.id] ? (
              <img
                ref={(el) => imageRefs.current.set(item.id, el)}
                data-id={item.id?.toString()}
                src={item.src.medium}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            ) : (
              <div ref={(el) => imageRefs.current.set(item.id, el)} data-id={item.id?.toString()}>
                Loading...
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default VirtualizedMasonryGrid
